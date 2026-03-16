# StockFlow lagersystem
Dette er en produtype for et lagersystem til et fiktivt firma kaldet StockFlow. Dette er lavet som en øvelse hos specialisterne Academy.

## Indhold
1. [Projekt beskrivelse](#projekt-beskrivelse)
2. [Docker](#docker)
3. [Frontend](#frontend)
4. [REST service](#rest-service)
5. [Database](#database)
6. [Frameworks og biblioteker](#frameworks-og-biblioteker)


## Projekt beskrivelse
Dette projekt er et fullstack projekt, der indeholder en frontend, en REST service og en database. 
Lagersystemet er ment som et system til medarbejdere af firmaet, med et fokus på at de skal kunne se ordre og lagerbeholdning i virksomheden. Der er givet krav som enkelte funktioner, og et brugervenligt og responsive design, men opgaven er stillet løst, så vi har haft mulighed for at vælge teknologier og meget af system designet. 

## Installation
Der er lavet en docker compose fil, der gør det muligt at starte frontend, REST og database.
Når man starter den, bliver der både sørget for at installere de forskellige dependencies, samt lavet en database, der også bliver fyldt med diverse test data.

For at køre projektet:

1. Clone repository : 
```
git clone https://github.com/SPAC-Group2/SoftFlow_lagersystem.git
```

Projektet kræver en .env fil, der indeholder:
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD= ****** 
POSTGRES_DB=StockFlow 
```
> (Hvor * erstattes med et password.)

For at køre alle services med docker skal der køres:

```docker compose up --build```

Og for at stoppe den igen:

```docker compose down```

Docker vil starte de forskellige på på:

- REST service  http://localhost:3000.
- Frontend: http://localhost:5173.
- Database: http://localhost:5432.

## Frontend
Denne del af projeketet indeholder Frontend til lagerstyeringssytemet.

Frontend er udviklet med følgende teknologier:

- React
- TypeScript
- Vite
- Bootstrap

Applikationen fungere som en webbaseret interface til Adminstration af lageret.

## REST service

## Database
Til projektet bruger vi en Postgress database, til at håndtere alt vores data. 
### Valg af database:
Vi valgte postgress fordi det er en solid og open source database, samt giver den mulighed for at ville kunne viderebygge på den, skulle dette projekt bruges af en virksomhed. Postgress er god til databehandling, hvilket ville kunne give gode muligheder for et firma, til at undersøge evt. trends eller salgsstatistikker. 

### Data og design
Dette projekt gav ikke de store krav i forhold til hvilke data der skal ligge i databasen, og derfor at vi måtte gætte os til nogle af de data vi har valgt at ligge i. Måden databasen og tabellerne er struktureret på kan ses på vores database diagram:

![ER database diagram over Stockflows database](/Dokumentation/Database%20ER%20diagram%20v2.png)

## Frameworks og biblioteker

### Fælles
Node: For at styre og hente forskellige bibloteker og frameworks.
TypeScript:
Tilføjer statiske typer til JavaScript. 

### Frontend

React:
Bruges til at bygge interfacen med komponenter.

Vite:
Bruges som udviklingsværktøj til at starte projektet og håndtere build-prcessen

Bootstrap:
Bruges til styling af interface og responsiv layout.

### Backend

Express: Et webframework der hjælper med at bygge API'er

nodemon: Et værktøj til ikke at skulle genstarte servicen hver gang der bliver ændret i den.

