# Define node version
FROM node:latest AS build
WORKDIR /usr/local/app
COPY . /usr/local/app/
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=build /usr/local/app/dist/avant_frontend/browser /usr/share/nginx/html
EXPOSE 80