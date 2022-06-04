# # Stage 1
# FROM node:18-alpine as build-step
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build --prod
# # Stage 2
# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/docs /usr/share/nginx/html

FROM node:alpine
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck