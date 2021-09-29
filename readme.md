# API REST (EXPRESS, PRISMA, POSTGRES)
***
## before start server application:

`cp .env.example .env` (**after copying, you need to edit .env file**)<br />
`docker-compose up` (init Postgres DB with adminer viewer)<br />
`yarn install`</br>
`yarn prisma migrate dev`</br>

## start server:
`yarn dev`

## build server for production:
`yarn build`
