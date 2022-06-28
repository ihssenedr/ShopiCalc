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
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
    }
}