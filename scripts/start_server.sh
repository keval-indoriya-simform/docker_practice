#!/bin/bash
cd /project
docker-compose pull
docker-compose -p webapp up -d
docker image prune