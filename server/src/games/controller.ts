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
      @Body() game
  ) { 
      const entity = await Game.create().save();
      entity.winner = game.winner;
      entity.board = game.squares;
    return entity.save();
  }
}
