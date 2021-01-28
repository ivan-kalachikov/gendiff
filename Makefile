lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --silent

test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

install:
	npm ci
