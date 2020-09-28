# WaBot
 Este projeto usa como base o [Venom-bot](https://github.com/orkestral/venom "Venom-bot"), um navegador virtual sem interface gráfica que abre o whatsapp web e executa todos os comandos via código possibilitando assim a automação de todas as funções, e um fork do projeto [myzap](https://github.com/billbarsch/myzap "myzap") do [@billbarsch](https://github.com/billbarsch "@billbarsch").

## Rodando a aplicação

# Instalar dependencias necessárias no sistema

```bash
# Ir para seu diretório home
cd ~

# Recuperar o script de instalação para sua versão de preferência
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

# Execute o script 
sudo bash nodesource_setup.sh

# Instalar o pacote Node.js
sudo apt install -y git nodejs yarn npm gcc g++ make

# Clone este repositório
$ git clone git@github.com:AlanMartines/myzap.git

# Acesse a pasta do projeto no terminal/cmd
$ cd myzap

# Instale as dependências
$ npm install

# Execute a aplicação 
$ node index.js

# Manter os processos ativos a cada reinicialização do servidor
npm install pm2 -g

pm2 start index.js

pm2 startup

# O servidor inciará na porta:8000

# Pronto, escaneie o código QR do Whatsapp e Voilà, aproveite!
```
## Uso
#### Acesso via web (Em desenvolvimento a integração/automatização)
http://localhost:8000/

#### Iniciar sessão whatsapp
http://localhost:8000/sistem/start/nome_da_sessão

####  Exibir QRCode no navegador
http://localhost:8000/sistem/QRCode/nome_da_sessão/true

####  Retorna joson com (base64) do QRCode 
http://localhost:8000/sistem/QRCode/nome_da_sessão/true

#### Fecha sessão whatsapp
http://localhost:8000/sistem/crose/nome_da_sessão

## Aviso
Dockerfile incompleto

## Em desenvolvimento
Este projeto se encontra em desevolvimento.

## License
[MIT](https://choosealicense.com/licenses/mit/)
