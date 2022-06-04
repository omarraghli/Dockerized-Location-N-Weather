# WeatherNPosition

Thanks for checking out my Project! :D

this project contains two directories: FrontEnd, And BackEnd, each of them have it own docker file

to run the project follow this steps:

## First step:

cd to where the docker-compose file is located then run the following command: sudo docker-compose up db

this command will run the database container, wait till it booted up successfully

## 2nd step

Run the following command to run the frontend and backend containers: sudo docker-compose up backend frontend

## 3rd step:

run this command and copy the backend container id: sudo docker ps

## 4th step:

Run the following command to access the backend container: sudo docker exec -it PastTheBackendContainerIdHere sh

## 5th step:

run the following command to migrate tables into database: python manage.py migrate

## 6th step:

access the application by this link: http://localhost:4200/

don't forget to allow your browser to access your current position! :)

Thanks again!
