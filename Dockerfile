FROM node:20.16.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000:3000

CMD ["npm", "start"]

