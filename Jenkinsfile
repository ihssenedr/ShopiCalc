pipeline {
     agent any
     environment {
        VERSION = "0.1.0"        
        VERSION_RC = "rc.2"
    }
    stages {
        stage('Audit') {
            steps {
                sh ''' 
                    git version
                    docker version
                    yarn version
                    npm version
                '''
            }
        }
        stage('Install') {
        steps {
            echo "Build Version : ${VERSION} with suffix ${VERSION_RC}"
            sh 'yarn install'
        }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}