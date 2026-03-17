# StockFlow lagersystem
Dette er en prototype for et lagersystem til et fiktivt firma kaldet StockFlow. 
Dette er lavet som et gruppeprojekt og en øvelse hos specialisterne Academy.


## Indhold
1. [Projekt beskrivelse](#projekt-beskrivelse)
2. [Docker](#docker)
3. [Frontend](#frontend)
4. [REST service](#rest-service)
5. [Database](#database)
6. [Frameworks og biblioteker](#frameworks-og-biblioteker)


## Projekt beskrivelse
Til dette projekt fik vi en case til et lagerstyringsprojekt, til et fiktivt firma kalder StockFlow. Lagersystemet er ment som et system til medarbejdere af firmaet, med et fokus på at de skal kunne se ordre og lagerbeholdning i virksomheden.

Dette er givet som et fullstack projekt, hvor det forventes at der bliver lavet en webapplikation, håndtering af API ’er og en database, samt er der givet krav som enkelte funktioner, og et brugervenligt og responsive design, men opgaven er stillet løst, så vi har haft mulighed for at vælge teknologier og meget af system designet.

For give projektet en god base, samtidig gøre det dette kunne videre udvikles har vi valgt at opstille det med en database, en REST service og en webapplikation. Ved at holde REST service adskilt fra Webapplikationen, er der mulighed for nemt at kunne ændre REST service eller skifte teknologier i den, samt er der mulighed for at udbygge systemet med fx apps, der kan tilgå de samme API ‘er. 

Herunder kan ses hvordan strukturen ser ud når en medarbejder tilgår webapplikationen.
![Projekt struktur som sekvens diagram](/Dokumentation/Project%20structure.png)

## Valgte teknologier:
For at have noget kontinuitet i vores projekt, har vi valgt at bruge typescript til både webapplikationen og til REST servicen, da dette betyder at vi ville kunne genbruge elementer som klasser og interfaces af objekter. 

Til databasen bruger vi en postgres database. 

Vi bruger docker til at køre hele projektet som en container, da dette gør at vi ikke behøver at holde styr på forskellige services og sørge for de alle køre, samt at vi er sikre på at vi alle vil bruge de samme versioner og dependencies i projektet.

Vi går dybere i teknologierne under hver sektion, samt en samlet liste over frameworks og biblioteker længere nede. 



## Installation
Der er lavet en docker compose fil, der gør det muligt at starte frontend, REST og database.
Når man starter den, bliver der både sørget for at installere de forskellige dependencies, samt lavet en database, der også bliver fyldt med diverse test data.

For at køre projektet:

1. Clone repository : 
```
git clone https://github.com/SPAC-Group2/SoftFlow_lagersystem.git
```

2. Kør docker docker engine

3. Projektet kræver en .env fil, der indeholder:
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD= ****** 
POSTGRES_DB=StockFlow 

DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@database:5432/${POSTGRES_DB}
```
> (Hvor * erstattes med et password.)

4. For at køre alle services med docker skal der køres:

```docker compose up --build```

Og for at stoppe den igen:

```docker compose down```

Docker vil starte de forskellige på på:

- REST service  http://localhost:3000.
- Frontend: http://localhost:5173.
- Database: http://localhost:5432.

Under udviklinging kan der være behov for at nustille databasen og opstille den igen. Det gøres ved at køre down med "-v" og så starte den igen som normalt.

``` docker compose down -v ```

```docker compose up --build```


## Frontend
Denne del af projeketet indeholder Frontend til lagerstyeringssytemet.

Frontend er udviklet med følgende teknologier:

- React
- TypeScript
- Vite
- Bootstrap

Applikationen fungere som en webbaseret interface til Adminstration af lageret.

## REST service
Vores REST service er designet med en layered aktitektur, hvor vi deler funktionaliteten op i forskellige typer, for at have et godt overblik hvor setuppet samt for nemt at kunne udskifte funktionaliteten skulle der ske ændringer vedrørende database eller hvis der skulle komme krav vedrørende HTTP requests and response. 

Med dette setup kan vi også nemt dele arbejdet op, så nogle ville kunne arbejde med design af API og nogle med kald til databasen.
### API’er 
En vigitg ting vi gjorde i start af projektet, var at designe alle vores API’er og samle dem i et dokument. Dette gjorde at vi alle vidste hvilke API’er der skulle laves, og hvilke der i fremtiden kan kaldes. 

Vi samlede dem i et dokument der kan ses under dokumentation. 
Vi har også lavet et API diagram for nemt at visualisere hvilke API’er der er, og hvem der kan kalde dem.
![Diagram over API'er i vores projekt](/Dokumentation/API%20Diagram.png)

### Route -> controller -> service
Vi har delt vores REST service op i 3 hovedområder. 
#### Routes
I route delen definerer vi de forskellige API, og hvor de skal kalde hen. Det er ret simpelt, og indeholder ingen logik eller lignede kode, men den er alligevel vigtig at have for sig selv, da det gør det nemmere at vedligeholde, samt organisere koden.
#### Controller
I controller håndterer vi alt der al HTTP logikken. Det er her hvor vi bland andet søger for at der bliver givet de rigtige statuskoder, vi håndtere eventuelle filtre der kommer med forespørgslerne og uddelegere arbejdet videre til services.
#### Service
I service er hvor vi tager os a hentning af data fra databasen. 

## Database
Til projektet bruger vi en Postgress database, til at håndtere alt vores data. 
### Valg af database:
Vi valgte postgress fordi det er en solid og open source database, samt giver den mulighed for at ville kunne viderebygge på den, skulle dette projekt bruges af en virksomhed. Postgress er god til databehandling, hvilket ville kunne give gode muligheder for et firma, til at undersøge evt. trends eller salgsstatistikker. 

### Data og design
Dette projekt gav ikke de store krav i forhold til hvilke data der skal ligge i databasen, og derfor at vi måtte gætte os til nogle af de data vi har valgt at ligge i. Måden databasen og tabellerne er struktureret på kan ses på vores database diagram:

![ER database diagram over Stockflows database](/Dokumentation/Database%20ER%20diagram%20v2.png)

### Public id
Flere steder i databasen har vi lavet et public id, der er forskelligt fra id. Det har vi valgt at gøre de fleste steder for at nemt kunne identificere id’erne ved de 3 første bogstaver som: produkter – PRO, varehuse – WHS, kunder – CUS og ordre – ORD. Dette gør at man kan hurtigt kan se hvilket id man har med at gøre. Ved varehuse og produkter benytter vi de næste 3 bogstaver til at indikere enten byen varehuset er i, eller kategorien på produktet, hvor det/de sidste tal er det interne id, for at sikre at id’erne er unikke. For kunder og ordre, hvor man helst ikke må kunne gætte sig til id’erne, har vi valgt at lave tilføje det interne id, men også encode det i base64. 

Vi havde overvejet om vi skulle bruge de specielle id’er som index i databasen, men det ville betyde at der skulle bruges mere plads på det, samt er det hurtigere at køre index på tal end specielle id’er. 


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

