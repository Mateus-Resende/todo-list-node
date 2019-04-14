FROM node:10.15 as builder
WORKDIR /usr/src/app/
COPY package* ./
RUN npm install -g nodemon && npm install
COPY . .

FROM builder as test
RUN npm test

FROM builder as console
RUN ["node"]
