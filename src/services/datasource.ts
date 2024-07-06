import {AppDataSource,DataSource,EntityManager} from "../includes"

export abstract class _Data{
 readonly  datasource:DataSource=AppDataSource
 readonly  em:EntityManager=AppDataSource.manager
}
