FROM node:11.15.0 AS builder

WORKDIR /opt/app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

COPY --from=builder /opt/app/dist /usr/share/nginx/html