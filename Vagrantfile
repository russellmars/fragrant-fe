# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.define "frontend"

  # boxes at https://vagrantcloud.com/search.

  config.vm.box = "centos/7"
  config.vm.box_version = "1902.01"

  # 设置虚拟机的名称
  config.vm.hostname = "local-centos-7"

  config.vm.network "forwarded_port", guest: 9102, host: 9102
  config.vm.network "forwarded_port", guest: 9103, host: 9103


  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"
  # config.vm.synced_folder ".", "/vagrant", type: "smb"


  config.vm.provider "virtualbox" do |vb|
    # vb.gui = true
    vb.memory = "2048"
  end

  # 同步全局的.gitconfig 文件
  config.vm.provision "file", source: "~/.gitconfig", destination: ".gitconfig"
  
  # 执行首次启动时的环境安装
  config.vm.provision "bootstrap", type: "shell", path: "bootstrap.sh"
end
