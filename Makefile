bundle:
	cat scripts/phaser.min.js >> scripts/bundle.js
	uglifyjs scripts/boot.js >> scripts/bundle.js
	uglifyjs scripts/menu.js >> scripts/bundle.js
	uglifyjs scripts/play.js >> scripts/bundle.js
	uglifyjs scripts/game.js >> scripts/bundle.js
