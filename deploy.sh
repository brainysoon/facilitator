# deploy the build to github
npm run deploy

# connect to server
ssh -l brainysoon 35.235.103.176 << 'deploy'
cd /usr/share/nginx/html
sudo git pull
deploy
