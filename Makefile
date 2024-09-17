# Makefile
install:
	npm ci
brain-games:
	node bin/brain-games
brain-even:
	node bin/brain-even
publish:
	npm publish --dry-run