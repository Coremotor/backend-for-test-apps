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
            sshCommand remote: remote, command: "cd ../usr/fortestapps_api/api"
            sshCommand remote: remote, command: "ll"
            sshCommand remote: remote, command: "corepack enable"
            sshCommand remote: remote, command: "yarn set version stable"
            sshCommand remote: remote, command: "yarn install"
            sshCommand remote: remote, command: "pm2 start index.js"
        }
    }
}