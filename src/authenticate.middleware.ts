import { Middleware } from '@decorators/express';

class AuthenticateMiddleware implements Middleware {
  public use(request: Request, response: Response, next: NextFunction): void {
   if((req.auth && (req.auth=={}|| req.auth==null )) || (req.user && (req.user=={} || req.user==null))){
     res.status(401).json({message:"Please sign in"})
   }
    next();
  }
}
