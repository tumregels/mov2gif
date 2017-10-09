NODE_LOCAL_BIN=./node_modules/.bin

.PHONY: test
test: 
	@echo 'No tests available'

install:
	@npm install

.PHONY: lint
lint: jshint

clean:
	rm -rf node_modules

.PHONY: jshint
jshint:
	@$(NODE_LOCAL_BIN)/jshint index.js
