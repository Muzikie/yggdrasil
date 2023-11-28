## OVERVIEW
Yggdrasil is a RESTful API written using Node (TypeScript). It uses `Sequelize` which is one of the most popular ORMs among Node community. Supporting TypeScript, it enable developers to strongly statically type their models, interfaces and other entities to eradicate errors.

## RUNNING THE PROJECT
You need a few dependencies to run the project:
1. You need `nvm` to activate the right node version.
2. Docker v24.0.2
2. Docker Compose v2.19.1

Once you have the above dependencies, you can run

```
docker-compose up --build

```
To build and run the app. you may use `-d` flag to detach the process.

## CONTRIBUTION
You can start the project without docker too, simply run

```
npm start
```
Although you need to take care of the db. And should you wish to run the project in dev mode, you can run 

```
npm run dev
```

## Testing
Unit and functional testing is encouraged. Testing helps stabilize the functionalities and prevent regressions. The tests are currently written using Jest.
