FROM node:latest

# this makes the build fail in travis ! see https://github.com/nodejs/docker-node/issues/661
# RUN npm install --global yarn
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm run build

ENV NODE_ENV=production

CMD ["npm","start"]