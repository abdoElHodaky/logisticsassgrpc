from node:18-alpine
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev redis supervisor sudo
RUN rm -rf package-lock.json && mkdir /var/log/supervisor/
RUN npm cache clean --force
RUN  yarn add chalk redis-url mariadb  && npm install pm2 npm-run-all -g
#RUN yarn add ts-node-dev --dev
RUN  yarn install -y 
ENV GRPCSTWOPORT 3030
ENV GRPCSONEPORT 5051
ENV PORT 3000
ENV NODE_ENV production
ENV ENABLE_OVERCOMMIT_MEMORY true
EXPOSE ${GRPCSONEPORT} ${GRPCSTWOPORT} ${PORT} 9001

#CMD ["/usr/bin/supervisord","-c","./supervisord.conf"]
CMD ["sh","./tsrun.sh"]
