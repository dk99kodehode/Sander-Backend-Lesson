FROM node:26-alpine

COPY package.json /app/
WORKDIR /app
RUN npm install

COPY tests /app/tests/

COPY src /app/src/

CMD ["npm", "test"]