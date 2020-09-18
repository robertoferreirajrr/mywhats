# WaBot
 Este projeto usa como base o [Venom-bot](https://github.com/orkestral/venom "Venom-bot"), um navegador virtual sem interface gráfica que abre o whatsapp web e executa todos os comandos via código possibilitando assim a automação de todas as funções, e um fork do projeto [myzap](https://github.com/billbarsch/myzap "myzap") do [@billbarsch](https://github.com/billbarsch "@billbarsch").

## Rodando a aplicação

```bash
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

# O servidor inciará na porta:8081 - acesse <http://localhost:3333> 

# Pronto, escaneie o código QR do Whatsapp e Voilà, aproveite!
```
## Uso
#### Iniciar sessão whatsapp
http://localhost:8081/sistem/start/nome_da_sessão

####  Exibir QRCode no navegador
http://localhost:8081/sistem/QRCode/nome_da_sessão/true

####  Retorna joson com (base64) do QRCode 
http://localhost:8081/sistem/QRCode/nome_da_sessão/true

#### Fecha sessão whatsapp
http://localhost:8081/sistem/crose/nome_da_sessão

## Em desenvolvimento

Este projeto se encontra em desevolvimento.

## License
[MIT](https://choosealicense.com/licenses/mit/)