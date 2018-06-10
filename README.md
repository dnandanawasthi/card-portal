This command will install node_modules
npm install

This command will run portal app as standalone
ng serve

This command will prepare for prod
ng build --prod

This command build image
docker build -t card-portal .

This command will run container
docker run -p 8000:80 --name card-portal card-portal

To access card UI: http://localhost:8000/

Note: Before last command please make sure that card-service is up and running

verify steps if card-service is up and running or not

