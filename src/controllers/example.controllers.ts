import { Request, Response } from 'express'

class ExampleController {
    async helloWorld(req: Request, res: Response){
        return res.send('Hello Typescrypt')
    }
}

export { ExampleController }