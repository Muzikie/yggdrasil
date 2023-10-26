## OVERVIEW
Since the API was not initiated, I made the choices. I decided to write the API using Node (TypeScript). I've used `Sequelize` which is one of the most popular ORMs among Node community. It supports TypeScript, enable developers to strongly statically type their models, interfaces and other entities to eradicate errors.  

Since the criteria did not specify, I did not use any framework such as Next.js,. Loopback, or other similar frameworks. I believe this this is a decision which requires more details about the project and other stakeholders. Therefore I opted for creating the project with Express JS to demonstrate my skills for bootsrapping a project and handling the entire implementation from the ground up.

I did not convert the existing client application to TypeScript. In my opinion new developers should not start unnecessary refactoring phases without the concent of direct manager, and consult of the team. Therefore I kept it as it was. I've also used existing components as instructed.  

In order to make the project scaffolding consistent, I've moved the files related to the client app into a directory with this name. We can revert this if it's not what the team prefers.


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
