import {AppDataSource,DataSource} from "includes"

export abstract class _Service{
 readonly  datasource:DataSource=AppDataSource
 
 async all(){}

 async create(){}

 async id(){}

 

}
