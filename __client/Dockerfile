FROM node:14.2.0-alpine as builder
WORKDIR /__client
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:14.2.0-alpine
WORKDIR /__client
COPY --from=builder /__client/package.json .
COPY --from=builder /__client/yarn.lock .
RUN yarn --prod
COPY --from=builder /__client/.nuxt .
RUN ls
CMD [ "yarn", "start" ]
