FROM node:14.10.1-alpine as builder
WORKDIR /__api
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:14.10.1-alpine
ENV NODE_ENV=production
RUN mkdir -p /__api/node_modules && chown -R node:node /__api
WORKDIR /__api
USER node
COPY --from=builder --chown=node:node /__api/package.json .
COPY --from=builder --chown=node:node /__api/yarn.lock .
RUN yarn --prod
COPY --from=builder --chown=node:node /__api/dist ./dist
CMD [ "node", "dist" ]


