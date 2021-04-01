# Api Payment

Para execução do projeto é necessário estar com Docker e docker-compose instalado em sua máquina. Ao realizar o clone do projeto, execute o comando ```yarn``` ou ```npm install``` para instalar as dependências. Após isso, execute o comando ```docker network create payment_api``` para criar a rede interna, e posteriormente ```yarn docker-up``` para subir o docker. Na primeira execução irá popular automaticamente o banco de dados.

Para cadastrar um novo favorecido, realize um post na rota ```http://localhost:3333/v1/favoreds``` com o payload:
```json
{
    "userData": {
        "name": "Usuário Teste",
        "email": "user@email.com",
        "cpf": "43440636003"
    },
    "accountData": {
        "bankName": "Itaú",
        "agencyNumber": "135",
        "agencyDigit": "8",
        "accountType": "CONTA_POUPANCA",
        "accountNumber": "12348928",
        "accountDigit": "9"
    },
    "status": "Rascunho"
}
```

Demais recursos podem ser conferidos em ```http://localhost:3333/api```.