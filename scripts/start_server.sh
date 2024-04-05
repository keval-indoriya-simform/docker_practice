#!/bin/bash
cd /project
docker-compose build
docker-compose -p webapp up -d
docker image prune --all --force