FROM node:16.14.0-alpine as build-stage

RUN mkdir /usr/app
COPY . /usr/app

WORKDIR /usr/app

RUN npm ci

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV REACT_APP_BASE_URL http://localhost:3052

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
