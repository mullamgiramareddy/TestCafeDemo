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
        stage('Test UI'){           
             steps{
                script{
                    bat 'npx testcafe chrome tests\\E2ELpnLevelAsnReceiving.js --disable-native-automation'
                }
            }
        }

         stage('Test API'){           
             steps{
                script{
                      bat 'npx testcafe chrome:headless api\\LpnLevelAsnCreation.js'
                }
            }
        }
    }
}