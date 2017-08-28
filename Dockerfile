FROM node:8-slim
MAINTAINER Tim Shelburne <shelburt02@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i

CMD npm start
