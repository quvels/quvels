FROM node:16-alpine3.11 AS development

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install --only=development

COPY ./apps/auth ./apps/auth

RUN npm run build auth

EXPOSE 3001 3002

CMD ["node", "dist/apps/auth/main"]