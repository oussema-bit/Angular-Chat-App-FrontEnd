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
                sh '''
                echo "doing test stuff..
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
