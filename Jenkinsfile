pipeline {
    agent any
    stages {
        stage('Build frontend docker image') {
            steps {
                echo "Building.."
                sh '''
                docker build -t frontend:1.0.0 .
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
            }
        }
    }
}
