FROM node:15.5.0-alpine as builder
WORKDIR /__client
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:15.5.0-alpine
WORKDIR /__client
COPY --from=builder /__client/package.json .
COPY --from=builder /__client/yarn.lock .
RUN yarn --prod
COPY --from=builder /__client/.nuxt ./.nuxt
COPY --from=builder /__client/store ./store
CMD [ "node", "node_modules/nuxt/bin/nuxt.js", "start", "-c", ".nuxt/ts-compiled/nuxt.config.js" ]
