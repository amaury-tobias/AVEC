FROM node:12.16.3-alpine
WORKDIR /__api
COPY package.json .
RUN yarn global add nodemon
RUN yarn
COPY . .
CMD [ "yarn", "dev" ]
#RUN yarn build

#FROM node:12.16.3-alpine
#ENV NODE_ENV=production
#RUN mkdir -p /app/node_modules && chown -R node:node /app
#WORKDIR /app
#USER node
#COPY --from=builder --chown=node:node /app/package.json .
#COPY --from=builder --chown=node:node /app/yarn.lock .
#RUN yarn
#COPY --from=builder --chown=node:node /app/dist .
#EXPOSE 3000
#CMD [ "node", "." ]


