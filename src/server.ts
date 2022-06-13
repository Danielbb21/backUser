import 'reflect-metadata';
import '../typeorm/index';
import Express from 'express';
import { DataSource } from 'typeorm';

const app = Express();

app.use(Express.json());

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5435,
  username: "postgres",
  password: "postgres",
  database: "mm",
  entities: [
      // ....
  ],
})

PostgresDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

app.listen(3333, () => console.log('ta rodando'));
