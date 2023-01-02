import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from "./entity/Article";
import { Author } from "./entity/Author";
import { supTicket } from "./entity/supTicket";
import { User } from "./entity/User"
import { Verification } from "./entity/Verification";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    cache: {
        duration: 30000 // 30 seconds
    },
    synchronize: true,
    logging: false,
    entities: [User,supTicket,Article,
      Verification,Author],
    migrations: [],
    subscribers: [],
    extra: {
        connectionTimeoutMillis: 1000,
        idleTimeoutMillis: 1500
    }
})

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));

export const getDataSource =  (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};
