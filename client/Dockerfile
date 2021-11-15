# stage 1: build application
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2: copy builded application into nginx container
FROM nginx:latest
COPY --from=node /app/dist/client /usr/share/nginx/html

