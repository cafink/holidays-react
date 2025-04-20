# Holidays around the world

Run server:

`npm run dev`

Run via Docker:

`docker run -it --rm -p 5173:5173 --mount src="$(pwd)",target=/usr/src/app,type=bind -w /usr/src/app node:22-alpine npm run dev`

Then visit [localhost:5173](http://localhost:5173/)