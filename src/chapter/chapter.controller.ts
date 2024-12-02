import { Controller, Get } from '@nestjs/common';

@Controller('chapter')
export class ChapterController {
constructor(){}

    @Get()
    getAll(){
        throw new Error()
    }
}
