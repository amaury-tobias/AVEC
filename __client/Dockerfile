FROM node:12.16.3-alpine
WORKDIR /__client
COPY package.json .
RUN yarn
COPY . .
CMD ["yarn", "dev"]
