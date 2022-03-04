FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ngnix.conf /etc/nginx/conf.d

#RUN mkdir /var/www/html -p && touch /var/www/html/index.php