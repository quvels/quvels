FROM node:16-alpine3.11 AS development

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/apps/quvels/main"]