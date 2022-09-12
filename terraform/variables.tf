variable "domain_name" {
    type        = string
    description = "the primary domain name for the site"
}

variable "aws_region" {
    type        = string
    description = "the aws region everything will be stored in"
    default     = "us-east-1"
}