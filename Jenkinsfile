pipeline {
  agent any
  environment {
    VERSION = "0.1.0"
    VERSION_RC = "rc.2"
  }
  stages {
    stage('Audit') {
      steps {
        bat ''' 
        git version
        docker version
        npm version
          '''
      }
    }
    stage('Install') {
      steps {
        echo "Build Version : ${VERSION} with suffix ${VERSION_RC}"
        bat 'npm install'
      }
    }
    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
    stage('Test') {
      steps {
        bat 'npm run test'
      }
    }
    stage('Capacitor update') {
      steps {
        bat 'npx cap update'
      }
    }
    stage('Capacitor copy') {
      steps {
        bat 'npx cap copy'
      }
    }
    stage('install android') {
      steps {
        bat 'npm install @capacitor/android'
      }
    }
    stage('add android') {
      steps {
        bat 'npx cap add android'
      }
    }
    stage('Build app bundle ndroid') {
      steps {
        bat 'cd android && gradle bundle'
      }
    }
  }
}
