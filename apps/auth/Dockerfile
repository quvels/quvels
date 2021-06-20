FROM node:16-alpine3.11 AS development

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install --only=development

COPY ./apps/auth ./apps/auth

RUN npm run build auth

FROM node:16-alpine3.11 AS production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install --only=production

COPY ./apps/auth ./apps/auth

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]