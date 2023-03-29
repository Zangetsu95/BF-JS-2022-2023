import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages() {}

  @Get('/:id')
  getMessages() {}
}
