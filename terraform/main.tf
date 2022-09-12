terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  backend "s3" {
    key    = "project/learn-go"
    region = "us-west-2"
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = var.aws_region
}

data "aws_iam_policy_document" "website_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = [
      aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
      type = "AWS"
    }
    resources = ["arn:aws:s3:::${var.domain_name}/*"]
  }
  
  statement {
    actions = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${var.domain_name}"]
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

resource "aws_acm_certificate" "cert" {
  domain_name = var.domain_name
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {}

resource "aws_s3_bucket" "website_bucket" {
  bucket = var.domain_name
  acl = "private"
  policy = data.aws_iam_policy_document.website_policy.json
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_cloudfront_distribution" "prod_distribution" {
  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id = "S3-${aws_s3_bucket.website_bucket.bucket}"
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }
  
  # By default, show index.html file
  default_root_object = "index.html"
  enabled = true
  is_ipv6_enabled = true
  aliases = [var.domain_name]

  # If there is a 404, return index.html with a HTTP 200 Response
  custom_error_response {
    error_caching_min_ttl = 3000
    error_code = 404
    response_code = 200
    response_page_path = "/index.html"
  }
  
  default_cache_behavior {
    allowed_methods = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.website_bucket.bucket}"
    
    # Forward all query strings, cookies and headers
    forwarded_values {
      query_string = true
       cookies {
          forward = "none"
       }
    }
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
  }
  
  # Distributes content to US and Europe
  price_class = "PriceClass_100"
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  # SSL certificate for the service.
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
  }
}