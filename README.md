# E-Commerce Products Service
Part of a team tasked with building scalable microservices that replaced the legacy monolithic API for an e-commerce platform to handle the increase in growing traffic. This is for the product section of the API and was stress tested using only EC2 t2.micro instances.

## Build with
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

## Other Libraries Used
- Loader.io
- New Relic
- K6
- Pactum

## Project Accomplishments
- Seeded a PostgreSQL database with over 7 million records
- Optimized sequelize ORM query execution times to average < 1ms per query by hash indexing
- Locally optimized to 1000 requests per second with <30 ms latency
- Improved throughput to 10,000 requests per second with <50 ms latency and 0% error rate when deployed and horizontally scaled
- Used total of five EC2 t2.micro instances:
  - One instance hosting Postgres database
  - One instance running NGINX with least connections load balancing and caching enabled.
  - Three instances running the node server with the API
  
## Test Results
![截屏2021-11-30 11 22 17](https://user-images.githubusercontent.com/89163211/147209185-ff96edef-8baa-46ff-a16d-c7b776644474.png)

![截屏2021-12-02 14 10 38](https://user-images.githubusercontent.com/89163211/147209031-7d8026e4-409e-44f9-9340-460fa376407d.png)

## Building and running
First install dependencies:
```sh
npm install
```
Start Application:
```sh
npm run start
```

## PostgreSQL 
Import data(order maters):

```sh
COPY "Products" (id, name, slogan, description, category, default_price) FROM 'filepath/product.csv' WITH (delimiter ',' csv header);

COPY "Styles" (id, "productId", name, sale_price, original_price, default_style) FROM 'filepath/styles.csv' WITH (delimiter ',' csv header null 'null');

COPY "Relateds" (id, current_product_id, related_product_id) FROM 'filepath/related.csv' WITH (delimiter ',' csv header);

COPY "Features" (id, product_id, feature, value) FROM 'filepath/features.csv' WITH (delimiter ',' csv header null 'null');

COPY "Skus" (id, "styleId", size, quantity) FROM 'filepath/skus.csv' WITH (delimiter ',' csv header null 'null');

COPY "Photos" (id, "styleId", url, thumbnail_url) FROM 'filepath/photos.csv' WITH (delimiter ',' csv header null 'null');
```

## Test
Run Jest Test Code:
```sh
npm run test
```

Connect to New Relic:
```sh
node -r newrelic server/index.js
```

Start Stress Testing with K6:
```sh
// Change into testing directory
cd testing/k6
k6 run <file name>
```




