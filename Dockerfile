FROM node
WORKDIR /myappp
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node","index.js" ]
