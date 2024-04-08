import {AppDataSource,DataSource} from "includes"

export interface _Service{
 readonly  datasource:DataSource=AppDataSource
}
