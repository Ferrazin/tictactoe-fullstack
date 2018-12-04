import {
    JsonController,
    Post,
    HttpCode,
    Body,
  } from 'routing-controllers';
import { Game } from './entities';  
  
  @JsonController()
  export default class GameController {
    @Post('/games')
    @HttpCode(201)
    async createGame(
        @Body() board
    ) { 
       const entity = await Game.create().save();
       entity.board = board;
      return entity.save();
    }
  }
  