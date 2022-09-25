# Install node
FROM node:current-alpine3.16

COPY ./backend /app
WORKDIR /app

RUN npm ci

ENTRYPOINT ["npm run start"]