.PHONY: up-db stop-db dev up start stop

up-db:
	cd .docker && docker-compose -f docker-compose.yml up -d

stop-db:
	cd .docker && docker-compose -f docker-compose.yml stop

install:
	npm install

up:
	npm run start:dev

start:
	cd .docker && docker-compose -f docker-compose.yml up -d

stop:
	cd .docker && docker-compose -f docker-compose.yml stop

build:
	cd .docker && docker-compose -f docker-compose.yml build