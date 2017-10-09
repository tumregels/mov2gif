NODE_LOCAL_BIN=./node_modules/.bin

.PHONY: test
test: 
	@echo 'No tests available'

install:
	@npm install

mov2mp4:
	@$(NODE_LOCAL_BIN)/ffmpeg -i in.mov -qscale 0 out.mp4

mov2gif:
	@$(NODE_LOCAL_BIN)/ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | $(NODE_LOCAL_BIN)/gifsicle --optimize=3 --delay=3 > out.gif


.PHONY: lint
lint: jshint

clean:
	rm -rf node_modules

.PHONY: jshint
jshint:
	@$(NODE_LOCAL_BIN)/jshint index.js

