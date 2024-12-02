import { Controller, Get } from '@nestjs/common';

@Controller('class')
export class ClassController {
    constructor(){}

    @Get()
    getAll(){
        throw new Error()
    }
}
