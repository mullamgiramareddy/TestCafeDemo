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
        stage('Test API'){        
            try{
             steps{
                script{
                      bat 'npx testcafe chrome:headless api\\LpnLevelAsnCreation.js'
                }
            }
            }catch(Exception e){}
        }
        stage('Test UI'){           
             steps{
                script{
                    bat 'npx testcafe chrome tests\\E2ELpnLevelAsnReceiving.js --disable-native-automation'
                }
            }
        }

    }
}