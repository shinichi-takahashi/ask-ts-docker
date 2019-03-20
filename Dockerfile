# https://github.com/martindsouza/docker-amazon-ask-cli
FROM node:8.10-alpine

# NPM_CONFIG_PREFIX: See below
# PATH: Required for ask cli location
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="${PATH}:/home/node/.npm-global/bin/:/home/node/.local/bin/"

# Required pre-reqs for ask cli
RUN apk add --update \
  python \
  make \
  bash \
  git \
  py-pip

WORKDIR /home/node/app
COPY ./app/package*.json /home/node/app/
RUN chown -R node:node /home/node/app

USER node

# Default folder for developers to work in
RUN npm install

# /home/node/.ask: For ask CLI configuration file
# /home/node/.ask: Folder to map to for app development
RUN npm install -g ask-cli
RUN mkdir /home/node/.ask \
    && mkdir /home/node/.aws \
    && pip install awscli --upgrade --user

# Patch for  https://github.com/martindsouza/docker-amazon-ask-cli/issues/1
WORKDIR /$NPM_CONFIG_PREFIX/lib/node_modules/ask-cli
RUN npm install simple-oauth2@1.5.0 --save-exact

WORKDIR /home/node/app
