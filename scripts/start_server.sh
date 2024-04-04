#!/bin/bash
cd /project/backend
echo "PORT=8000
MONGO_URI='mongodb://mongodb:27017/to-do'
JWT_SECRET='secret key'
GMAIL_USERNAME='admin@123'
GMAIL_PASSWORD='abc@123'" >> .env
cd /project
docker-compose build
docker-compose -p webapp up -d