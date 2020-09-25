# Use a imagem oficial como imagem principal.
FROM node:14-alpine

# define o mantenedor da imagem
LABEL maintainer="AlanMartines"

# RUN apk add --no-cache bash vim

# Defina o diretório de trabalho.
WORKDIR /usr/src/app

# Copie o arquivo do seu host para o local atual.
COPY package.json .

# Execute o comando dentro do seu sistema de arquivos de imagem.
RUN npm install

# Copie o restante do código-fonte do seu aplicativo do host para o sistema de arquivos de imagem.
COPY . .

EXPOSE 8081

# Execute o comando especificado dentro do contêiner.
CMD [ "npm", "start" ]

### LEIA-ME
## Processando o arquivo Dockerfile
# docker build -t alanmartines/mywhats:1.0 .

## Criar um contêiner
# docker container run --name mywhats -p 8081:8081 alanmartines/mywhats:1.0