import {
    JsonController,
    Post,
    HttpCode,
    Body,
  } from 'routing-controllers';
import { Game } from './entities';
//   import { Game } from './entities';
  
  
  @JsonController()
  export default class GameController {
    @Post('/games')
    @HttpCode(201)
    async createGame(
        @Body() board: any
    ) { 
       const entity = await Game.create().save();
       entity.board = board 
      return entity.save();
    }
  }
  