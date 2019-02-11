FROM node:10.15 as builder
WORKDIR /app/user/
COPY package* ./
RUN npm install -g nodemon && npm install
COPY . .

FROM builder as test
RUN npm run lint && npm test

FROM builder as console
RUN ["node"]
