FROM node:16.13.0-alpine3.14

WORKDIR /app
ENV PORT 3000
ENV NAME Gonçalo

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

CMD ["yarn", "start"]