FROM node:14-alpine AS base

FROM base AS development
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
CMD [ "yarn", "start" ]

# Build the app
FROM base AS builder
WORKDIR /app
COPY . ./
COPY --from=development /app/node_modules ./node_modules
RUN yarn install --production
RUN yarn build
RUN yarn prune --production

# Run the app
FROM base AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
CMD [ "yarn", "start:prod" ]
