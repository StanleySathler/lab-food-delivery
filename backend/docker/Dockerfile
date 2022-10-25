FROM node:current-alpine3.16

COPY ./backend /app
WORKDIR /app

RUN npm ci
RUN npm run build

ENTRYPOINT ["/app/docker/entrypoint.sh"]