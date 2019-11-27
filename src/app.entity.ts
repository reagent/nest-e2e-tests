import { IsNotEmpty } from "class-validator"

export class App {
  @IsNotEmpty()
  name:string
}