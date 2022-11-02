####### 
# Builder image
#######
FROM node:lts-alpine as builder

# By only copying package.json, before running npm install, we can leverage dockers caching strategy for steps. 
# Otherwise docker needs to run npm install every time you change any of the code.
# Ref: https://dev.to/johannesvitt/deploy-a-react-app-on-gcp-with-google-cloud-run-il3
COPY package.json ./
RUN npm install

# Copy source code as usual.
RUN mkdir /app
RUN mv ./node_modules ./app
WORKDIR /app
COPY . .

# Build static files.
RUN npm run build

####### 
# Web Server image
#######
FROM nginx:alpine

# copy the .conf template
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page and replace it with the static files we created in the first step
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/.next /usr/share/nginx/html

# Run Nginx on Foreground, not Background.
# Ref: https://stackoverflow.com/questions/18861300/how-to-run-nginx-within-a-docker-container-without-halting
CMD nginx -g 'daemon off;'