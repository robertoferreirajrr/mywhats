# Use a imagem oficial como imagem principal.
#FROM node:latest
#FROM node:current
FROM ubuntu:18.04
#FROM node:20.04

RUN mkdir -p /usr/src/app

RUN apt-get update && apt-get install -y \
    && cd ~ \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y \
    git \
    yarn \
    npm \
    gcc \
    g++ \
    make \
    nodejs

# Defina o diretório de trabalho.
WORKDIR /usr/src/app

# Copie o arquivo do seu host para o local atual.
COPY package*.json ./

# Execute o comando dentro do seu sistema de arquivos de imagem.
RUN npm install

# Copie o restante do código-fonte do seu aplicativo do host para o sistema de arquivos de imagem.
COPY . .

EXPOSE 8000

# Execute o comando especificado dentro do contêiner.
CMD [ "npm", "start" ]

### LEIA-ME
## Processando o arquivo Dockerfile
# docker build -t alanmartines/nodejs-mywhats:1.0 .

## Criar um contêiner
# docker container run --name mywhats -p 8000:8000 -d alanmartines/nodejs-mywhats:1.0

## Acessar bash do container
# docker exec -it <container id> /bin/sh
# docker exec -it <container id> /bin/bash

## Removendo todos os containers e imagens de uma só vez
# docker rm $(docker ps -qa)