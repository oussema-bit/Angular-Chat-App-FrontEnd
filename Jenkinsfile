pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh 'npm install'

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
                sh 'npm run ng build'
                sh 'npm run ng serve'
            }
        }
    }
}
