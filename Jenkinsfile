pipeline {
  agent {
    docker {
      image 'node:10' 
      args '-p 3000:3000' 
    }
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'

      }
    }
    // stage('Test') {
    //   steps {
    //     echo 'Testing..'
    //   }
    // }
    stage('Deploy for integrated test environment') {
      when {
        branch 'test'
      }
      steps {
        sh './jenkins/scripts/deliver-for-development.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
    stage('Deploy for production environment') {
      when {
        branch 'master'
      }
      steps {
        sh './jenkins/scripts/deploy-for-production.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}