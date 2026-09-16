## DESCRIBE, IT , EXPECT

DESCRIBE = beskriver action som skal gjøres i testen
IT = tester whatever action du vil gjøre hos brukeren eller test
EXPECT = BOOLEAN trenger toBe(true/false) og skal returne enten true eller false

## ## SEQUELIZE SYNC

sequelize.sync();
syncer til database

## Workflows

Needs to be inside a vite / node project because you it starts building the project for you

## whatever you call the script you need to use to run it

"docker-test": "docker compose build && docker compose up"
so for this to run you would type 'npm run docker-test'
