pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
            args '-u root'
        }
    }

    stages {
        stage('Node version') {
            steps {
                sh 'node --version'
            }
        }

        stage('install dependencies') {
            steps {
                sh "corepack enable"
                sh "yarn set version stable"
                sh "yarn install"
            }
        }

        stage('Build app') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}

node {
    withCredentials([
        string(credentialsId: 'ssh_cloud', variable: 'SSH_CLOUD'),
        string(credentialsId: 'ssh_user', variable: 'SSH_USER'),
        string(credentialsId: 'ssh_host', variable: 'SSH_HOST')
    ]) {
        def remote = [:]
        remote.name = SSH_USER
        remote.host = SSH_HOST
        remote.user = SSH_USER
        remote.password = SSH_CLOUD
        remote.allowAnyHosts = true
        stage('Remote SSH') {
            sshPut remote: remote, from: '.', into: '../usr/fortestapps_api/'
            sshCommand remote: remote, command: "pm2 start ../usr/fortestapps_api/index.js"
        }
    }

}