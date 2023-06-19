   FROM cypress/included:latest

   WORKDIR /app

   COPY package*.json ./
   
   COPY cypress.config.js /app/cypress.config.js

   RUN npm install
 
   COPY cypress/ /app/cypress/

    COPY launch.json /app/launch.json

   CMD ["npx", "cypress", "run", "--record", "--key", "8c4d4b50-9684-49a5-ad64-93960578c0ef"]
