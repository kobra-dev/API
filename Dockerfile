FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY prisma/schema.prisma ./

RUN yarn install
RUN npx prisma generate

COPY . .

EXPOSE 4001

CMD [ "yarn", "prod" ]
