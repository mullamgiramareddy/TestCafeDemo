pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    parameters{
        string(name: 'dynamicNum', defaultValue: 'Enter Dynamic Value')
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
                        def selectedDynamicValue = params.dynamicNum
                        echo "Selected DynamicValue: ${selectedDynamicValue}"

                    bat "npx testcafe chrome:headless --dynamicNum ${selectedDynamicValue} api\\LpnLevelAsnCreation.js"
                }
            }      
        }
    }
}