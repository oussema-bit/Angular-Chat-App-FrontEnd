pipeline {
    agent any
    stages {
        stage('Build frontend image') {
            steps {
                echo "Building.."
                sh '''
                docker build -t frontend .
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
