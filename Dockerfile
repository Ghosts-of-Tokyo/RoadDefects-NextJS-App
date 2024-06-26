FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm install --silent
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

#docker build -t road-defects .