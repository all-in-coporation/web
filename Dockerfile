FROM node:11.15.0 AS builder

WORKDIR /opt/app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

RUN cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.orig && \
    sed -i 's/listen[[:space:]]*80;/listen 8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080 

COPY --from=builder /opt/app/dist /usr/share/nginx/html