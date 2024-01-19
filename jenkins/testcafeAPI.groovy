pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    stages{
        stage('Install npm dependencies'){
            steps{
                script{
                    bat 'npm install'
                }
            }
        }
        stage('Test'){           
             steps{
                script{
                    bat 'npx testcafe chrome:headless api\\LpnLevelAsnCreation.js --disable-native-automation'
                }
            }      
        }
    }
}