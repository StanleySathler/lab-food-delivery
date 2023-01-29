# This image is cached and only rebuilt if any dependencies change.
FROM node:18-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN pwd
RUN ls -l
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --only=production

# This image is cached and only rebuilt if the build output changes.
FROM node:18-alpine AS builder
WORKDIR /app
COPY ./frontend .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

# @todo: make these more flexible, as it prevents us from 
# running Docker locally
ENV NODE_ENV production
ENV NEXT_PUBLIC_API_URL http://api.lab-food-delivery.store

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
# EXPOSE 3000

CMD ["npm", "start"]