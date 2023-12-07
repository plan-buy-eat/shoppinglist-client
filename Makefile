.PHONY: lint
lint:
	yarn eslint ./src/* 

.PHONY: dev
dev:
	yarn dev

.PHONY: build
build:
	yarn build