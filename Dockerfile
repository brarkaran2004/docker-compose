FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

# ENV DATABASE_URL="postgresql://postgres:mypass@localhost:5432/postgres" 


EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate dev && npx prisma generate && npm run dev"]
