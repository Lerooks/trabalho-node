FROM node:14

LABEL Plataform TrabalhoNode

# variables
ENV APP_HOME /trabalho-node

RUN mkdir ${APP_HOME}
WORKDIR ${APP_HOME}

ADD ./package.json ${APP_HOME}/
RUN npm install

COPY . ${APP_HOME}

EXPOSE 3000

CMD [ "npm", "run", "dev"]
