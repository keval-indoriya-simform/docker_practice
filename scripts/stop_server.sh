#!/bin/bash
docker builder prune -a
docker-compose -p webapp down 