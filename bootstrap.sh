#!/usr/bin/env bash

echo " ---- Initialize the local development environment ---- "

# echo "----------------------------------------------"
# echo " ---------- Update system package ----------- "
# echo "----------------------------------------------"
# sudo yum update -y

echo "----------------------------------------------"
echo " -------------- Install git -------------- "
echo "----------------------------------------------"
sudo yum install -y git


echo "----------------------------------------------"
echo " -------------- Install nodejs -------------- "
echo "----------------------------------------------"
curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum install -y nodejs
sudo yum install -y gcc-c++ make