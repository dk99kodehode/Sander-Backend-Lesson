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

## salt hjelper med å lage tilfeldig

hashing hadde vært det samme uten saltet

## Sessions vs JWT

Session sjekker om cookies er lik
Kan terminere session på sekundet.

JWT token er meint å dekke svakheten til session.
Kan ikke terminere JWT token
Meint til å være kjapp og ikke varig
Renewable tokens - lagres i local storage / pcen
