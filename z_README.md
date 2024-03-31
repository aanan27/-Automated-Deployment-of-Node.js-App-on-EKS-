

---

# Automated Deployment of Node.js App on EKS

## Overview

This project demonstrates the automated deployment of a Node.js application on Amazon Elastic Kubernetes Service (EKS) using Docker containers, GitHub Actions for CI/CD, and Terraform for infrastructure management.

## Technologies Used

- Docker
- Kubernetes
- Amazon EKS
- GitHub Actions
- Terraform

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aanan27/-Automated-Deployment-of-Node.js-App-on-EKS-.git
   ```

2. Install Docker on your machine.

3. Install kubectl to interact with the Kubernetes cluster.

4. Install the AWS CLI to interact with Amazon EKS.

## Usage

1. Configure your AWS credentials using the AWS CLI:

   ```bash
   aws configure
   ```

2. Update the Terraform configuration files (`main.tf`, `variables.tf`) with your AWS credentials and desired configuration.

3. Initialize Terraform:

   ```bash
   terraform init
   ```

4. Apply the Terraform configuration to create the necessary infrastructure:

   ```bash
   terraform apply
   ```

5. Build and push your Docker image to Amazon ECR:

   ```bash
   docker build -t <your_image_name> .
   docker tag <your_image_name> <your_ecr_repository_uri>:<tag>
   docker push <your_ecr_repository_uri>:<tag>
   ```

6. Update the Kubernetes deployment and service YAML files (`k8s_deployment.yml`, `k8s_services.yml.yml`) with your Docker image details.

7. Apply the Kubernetes configuration:

   ```bash
   kubectl apply -f k8s_deploymeny.yml
   kubectl apply -f k8s_services.yml
   ```
