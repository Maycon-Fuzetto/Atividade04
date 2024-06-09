# Definindo a imagem base
FROM node:latest

# Criando o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando apenas o package.json para aproveitar o cache do Docker
COPY package.json .

# Instalando dependências
RUN npm install

# Copiando os arquivos do diretório local para o diretório de trabalho no contêiner
COPY . .

# Comando para iniciar sua aplicação
CMD ["npm", "start"]
