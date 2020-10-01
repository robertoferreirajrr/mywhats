
<p align="center">
  <img src="https://github.com/AlanMartines/mywhats/blob/master/public/images/whatsapp-bot.png" width="150" alt="My Whats">
</p>

# My Whats
 Este projeto usa como base o [Venom-bot](https://github.com/orkestral/venom "Venom-bot"), um navegador virtual sem interface gráfica que abre o whatsapp web e executa todos os comandos via código possibilitando assim a automação de todas as funções, e um fork do projeto [myzap](https://github.com/billbarsch/myzap "myzap") do [@billbarsch](https://github.com/billbarsch "@billbarsch").

## Rodando a aplicação

```bash
# Ir para seu diretório home
$ cd ~

# Recuperar o script de instalação para sua versão de preferência
$ curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

# Execute o script 
$ sudo bash nodesource_setup.sh

# Instalar o pacote Node.js
$ sudo apt install -y git nodejs yarn npm gcc g++ make

# Remover pacotes que não são mais necessários
$ sudo apt autoremove -y

# Clone este repositório
$ git clone https://github.com/AlanMartines/mywhats.git

# Acesse a pasta do projeto no terminal/cmd
$ cd mywhats

# Instale as dependências
$ npm install

# Execute a aplicação 
$ node index.js

# Manter os processos ativos a cada reinicialização do servidor
sudo npm install -g pm2

sudo pm2 startup

sudo pm2 start index.js

sudo pm2 save

# O servidor iniciará na porta:8000

# Pronto, escaneie o código QR do Whatsapp e Voilà, aproveite!
```
## Uso
#### Acesso via web (Em desenvolvimento a integração/automatização)
http://localhost:8000/

#### Iniciar sessão whatsapp
http://localhost:8000/sistem/start/nome_da_sessão

####  Exibir QR-Code no navegador
http://localhost:8000/sistem/QRCode/nome_da_sessão/true

####  Retorna json com (base64) do QR-Code 
http://localhost:8000/sistem/QRCode/nome_da_sessão/false

#### Fecha sessão whatsapp
http://localhost:8000/sistem/crose/nome_da_sessão

## Aviso
Dockerfile incompleto

## Em desenvolvimento
Este projeto se encontra em desevolvimento.

## License
[MIT](https://choosealicense.com/licenses/mit/)
