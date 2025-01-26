# builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# runner
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
# сборкой докерфайла билдить его вручную

RUN mkdir -p /var/www/certbot
# для продления
# RUN echo "acme value" > /var/www/certbot/acme_file

CMD ["nginx", "-g", "daemon off;"]