import dotenv from 'dotenv';
import express, { Express ,Request,Response} from 'express';
import { connectToMongo } from './conn';
import router from './routes/products';

dotenv.config();

connectToMongo()


const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(router);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});