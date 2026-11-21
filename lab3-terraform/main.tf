terraform {
  required_version = ">= 1.0"
}

resource "terraform_data" "application" {
  count = 2

  input = {
    name   = "application-${count.index + 1}"
    status = "provisioned"
  }

  provisioner "local-exec" {
    command = "mkdir -p ${path.module}/app-${count.index + 1}"
  }
}

output "provisioned_applications" {
  value = [
    for app in terraform_data.application : app.input
  ]
}
