import { Controller, Get } from "@nestjs/common"

@Controller("/app")
export class AppController {
  @Get("/hello")
  getRootRouter() {
    return "hello world !"
  }

  @Get("/bye")
  getByeThere() {
    return "bye :("
  }
}
