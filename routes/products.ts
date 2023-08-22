import Express from 'express';
import http from 'http';
let app: Express.Application | undefined = undefined;
export function InitializeExpress(port = 5000): void {
    app = Express();
    app.use(Express.urlencoded({ extended: true }));
    app.get('/', function (_req: Express.Request, res: Express.Response) {
        res.status(200).json({
            message: "Hello World!" 
        });
    });
   // Add 404 handler
   app.use(function (_req: Express.Request, res: Express.Response) {
      res.status(404).send("Not found");
   });
   // Start server (app.listen can also be used)    
   http.createServer(app).listen(port, () =>  
    console.log(`Running at http://localhost:${port}/`));
}