FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY prisma/schema.prisma ./

RUN yarn install
RUN npx prisma generate

COPY . .

EXPOSE 4000

CMD [ "yarn", "prod" ]
