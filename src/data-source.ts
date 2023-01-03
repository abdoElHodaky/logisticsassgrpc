import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from "./entity/Article";
import { Attachment } from "./entity/Attachment";
import { Author } from "./entity/Author";
import { Book } from "./entity/Book";
import { supTicket } from "./entity/supTicket";
import { User } from "./entity/User"
import { Verification } from "./entity/Verification";

export const _AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    cache: {
        duration: 30000
    },
    synchronize: true,
    logging: false,
    entities: [User,supTicket,Article,
      Verification,Author,Attachment,Book],
    migrations: [],
    subscribers: [],
    extra: {
        connectionTimeoutMillis: 3000,
        idleTimeoutMillis: 3500
    }
})
_AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));

export const getDataSource =  (delay = 3000): Promise<DataSource> => {
  if (_AppDataSource.isInitialized) return Promise.resolve(_AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (_AppDataSource.isInitialized) resolve(_AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};
