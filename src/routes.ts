import { Router } from "express";
import { usersroute } from "./usersroute";
export const apiv1=Router();
apiv1.use(usersroute);