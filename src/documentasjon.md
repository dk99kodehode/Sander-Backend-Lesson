## VISST DU SKAL BYTTE FRA 12 TIL 16 MÅ DU HA BEGGE SOM SUPPORTS I LENGERE TID

trigger på pålogging, gjør en 12 layer check.
if passes, hash på 16. over YEARS

##

FROM node:26-alpine

COPY package.json /app/
WORKDIR /app
RUN npm install

// copy src på bunne siden du bytter ofte src materiale
COPY src /app/src/

CMD ["npm", "start"]

##

volumes = data
enviroment i compose yamal overskriver vanlig .env
