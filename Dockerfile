FROM node:18-alpine

WORKDIR /app

# Copiar apenas os arquivos de dependência primeiro
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Expor a porta que o Vite usa
EXPOSE 5173

# Comando para executar o app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
