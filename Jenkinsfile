pipeline {
    agent any
    tools {
      nodejs "NODEJS"
      maven "maven-spring-backend"
      scannerHome "sonar-qube-jenkins"
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
                withSonarQubeEnv() {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
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
                 withCredentials([usernamePassword(credentialsId: 'ab7a00a8-e667-49e9-a08d-cc976b4cc179',
                  usernameVariable: 'DOCKER_USERNAME',
                  passwordVariable: 'DOCKER_PASSWORD')])
                  {
                     sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                     sh "docker push ${imagename}:latest"
                  }
              }
           }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh 'chmod -R +rwx ./jenkins/scripts/deliver.sh'
                sh 'chmod -R +rwx ./jenkins/scripts/kill.sh'
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
