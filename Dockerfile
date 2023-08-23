FROM node:18-alpine3.17

# Set working directory
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

# Copiar el directorio y su contenido
COPY . /var/www/app/

RUN yarn install
RUN yarn build

# Dar permiso para ejecutar la applicación
RUN adduser --disabled-password mesfesta
RUN chown -R mesfesta:mesfesta /var/www/app
USER mesfesta

# Limpiar el caché
RUN yarn cache clean --force

EXPOSE 3000

CMD [ "yarn","start" ]