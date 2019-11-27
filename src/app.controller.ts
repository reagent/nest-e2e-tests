import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { App } from './app.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() dto: App):Promise<App> {
    return dto
  }
}
