# Project Terraform

This is the terraform necessary to create your own version of the Learning
Go website. You can run this against your own account to get everything you 
need to run this.

## Init

There isn't a tfvars file included in this (as it would contain things not related 
to your project). You can add your own to use like `site.tfvars` to provide the 
necessary variables. After doing that, run:

```
AWS_PROFILE={your profile name} terraform init \
    -backend-config="bucket={your aws terraform bucket}"
```

## Running It

After initializing, you can plan and then actually create the resources using these commands:

```
AWS_PROFILE={your profile name} terraform plan -var-file="site.tfvars"


AWS_PROFILE={your profile name} terraform apply -var-file="site.tfvars"
```