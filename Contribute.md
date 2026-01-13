## manual installation 
    - install node js locally
    - clone the repo
    - install dependencies (npm install)
    - start the db locally (can use docker or get a db online)
    - change the .env file and update your db credentials
    - npx prisma migrate
    - npm run build
    - npm run start

## Docker installation 
    - install docker
    - create a network for communication between backend and postgres
    - start postgres container and set its network to created network
    - build the image (with build steps in script set --network=host so npx primsa migrate dev can run )
    - start the image (with --network set to your created network)
    - this gets more complex as microservices increase
    
## Docker installation (not just docker but docker compose)
    - install docker ,docker compose
    - run `docker-compose up` or `docker compose watch