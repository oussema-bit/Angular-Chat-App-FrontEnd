pipeline {
    agent any
    tools {
      nodejs "NODEJS"
      maven "maven-spring-backend"
    }
    environment {
            imagename = "oussamaayari2020/my_first_frontend_job"
            dockerImage = ''
            containerName = 'my-frontend-container'
            dockerHubCredentials = 'admin'
    }

    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh 'npm install'
                sh "docker build -t ${imagename}:latest ."
            }
        }

        stage('Running image & Unit tests') {
            steps {
               script {
                  sh "docker run -d --name ${containerName} ${imagename}:latest"
                  // Unit test to run on the running container
               }
            }
        }
        stage('Stop and Remove Container') {
           steps {
              script {
                 sh "docker stop ${containerName} || true"
                 sh "docker rm ${containerName} || true"
              }
           }
        }
        stage('Test') {
            steps {
                echo "Testing.."
            }
        }
        stage('Deploy Image') {
           steps {
              script {
                 // Use Jenkins credentials for Docker Hub login
                 
                 sh "docker login -u oussemaayari2020 -p dckr_pat_4votRQbhA8pfxpO3NF8xJQRFgwE"
                 sh "docker push ${imagename}:latest"
                  
              }
           }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'

            }
        }
    }
}
