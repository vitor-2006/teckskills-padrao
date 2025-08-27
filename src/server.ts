import express, {Request, Response} from 'express'

const app = express();
const port: number = 3000;

app.use(express.json());
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});