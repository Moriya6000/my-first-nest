import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
    constructor(){}

    @Get()
    getAll(){
        throw new Error()
    }
}
