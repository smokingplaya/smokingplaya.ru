# тут мы создаем отдельный контейнер
# который бы собирал нам проект
# потому что нам лень писать каждый раз npm run build перед
# сборкой докерфайла билдить его вручную
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# запускаем nginx в отдельном контейнере
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d

COPY ./fullchain.pem /etc/letsencrypt/live/smokingplaya.ru/fullchain.pem
COPY ./privkey.pem /etc/letsencrypt/live/smokingplaya.ru/privkey.pem

RUN mkdir -p /var/www/certbot
# для продления
# RUN echo "acme value" > /var/www/certbot/acme_file

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]