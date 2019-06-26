pipeline {
  agent {
    docker {
      image 'node:10' 
      args '-p 3000:3000 -p 9102:9102' 
    }
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'

      }
    }
    stage('Test') {
      steps {
        sh './jenkins/test.sh'
      }
    }
    stage('Deploy for production environment') {
      when {
        branch 'master'
      }
      steps {
        sh './jenkins/deploy-for-production.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}