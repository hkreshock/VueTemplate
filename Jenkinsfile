def getEnvName(branchName) {
    if ("dev".equals(branchName)) {
        return "dev";
    }else if("staging".equals(branchName)) {
        return "staging";
    } else if ("master".equals(branchName)) {
        return "production";
    } 
}

def getQEnvName(branchName) {
    if ("dev".equals(branchName)) {
        return "development";
    } else if("staging".equals(branchName)) {
        return "staging";
    } else if ("master".equals(branchName)) {
        return "production";
    }
}

def getPortNumber(branchName) {
	if ("dev".equals(branchName)) {
		return 9337;
	} else if("staging".equals(branchName)) {
		return 7337;
	} else if ("master".equals(branchName)) {
		return 5337;
	}
}

def getName(branchName) {
	if ("dev".equals(branchName)) {
		return 'dev_my_vue_project';
	} else if ("staging".equals(branchName)) {
		return 'staging_my_vue_project';
	} else if ("master".equals(branchName)) {
		return 'my_vue_project';
	}
}

pipeline {
	triggers {
		pollSCM('H/5 * * * *')
	}
	agent {
		label 'tidal'
	}
	options {
		timeout(time: 1, unit: 'HOURS') 
	}
	environment {
		PORT = getPortNumber(env.BRANCH_NAME)
		NODE_ENV = getEnvName(env.BRANCH_NAME)
		HOME = '.'
		NAME = getName(env.BRANCH_NAME)
		QENV = getQEnvName(env.BRANCH_NAME)
	}
	stages {
		stage('Build') {
			agent {
				dockerfile {
					filename 'Dockerfile'
					additionalBuildArgs '-t ${NAME}  --build-arg QENV=${QENV}'
					label 'tidal'
				}
			}
			steps {
				sh 'echo "this is the build stage"'
			}
		}
		stage('Prep') {
			when {
				expression {
					return NODE_ENV == 'production' || NODE_ENV == 'staging' || NODE_ENV == 'dev';
				}
			}
			steps {
				script {
					try {
						sh 'docker stop ${NAME}'
						sh 'docker rm ${NAME}'
					} catch(Exception e) {
						echo 'Exception occurred: ' + e.toString()
					}
				}
			}
		}
		stage('Deploy') {
			when {
				expression {
					return NODE_ENV == 'production' || NODE_ENV == 'staging' || NODE_ENV == 'dev';
				}
			}
			steps {
				sh '''
					docker run \
						-d \
						-p ${PORT}:80 \
						--restart unless-stopped \
						--name ${NAME} \
						-e NODE_ENV=${NODE_ENV} \
                        -e INDEX_NAME=${NAME} \
						${NAME}
				'''
			}
		}
		stage('Cleanup') {
			when {
				expression {
					return NODE_ENV == 'production' || NODE_ENV == 'staging' || NODE_ENV == 'dev';
				}
			}
			steps {
				sh 'docker image prune -af'
			}
		}
	}
}