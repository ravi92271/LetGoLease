# docker build -t frontend . #This builds the Docker image
# docker run -p 3000:3000 frontend #This runs the Docker container 

FROM node:23

WORKDIR /LetGoLease/letgolease

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]