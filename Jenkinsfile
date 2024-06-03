pipeline {
    agent any
    stages {
        stage('Build frontend image') {
            steps {
                echo "Building.."
                sh '''
                ping 8.8.8.8
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
