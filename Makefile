# Makefile
install:
	npm ci
brain-games:
	node bin/brainGames
brain-even:
	node bin/brainEven
publish:
	npm publish --dry-run
lint:
	npx eslint .