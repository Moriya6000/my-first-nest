import { Controller, Get } from '@nestjs/common';

@Controller('mentor')
export class MentorController {
    constructor(){}

    @Get()
    getAll(){
        throw new Error()
    }
}
