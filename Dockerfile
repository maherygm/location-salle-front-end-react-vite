# Étape 1 : Construire l'application avec Vite
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# importation de la default conf pour les reverse proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

# met l'app en ecoute sur le port 80 du container
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
