.PHONY: up-db stop-db dev

up-db:
	docker-compose -f docker-compose.yml up -d

stop-db:
	docker-compose -f docker-compose.yml stop

dev:
	yarn start:dev

install:
	yarn install