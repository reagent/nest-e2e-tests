import { application } from './application'

async function bootstrap() {
  let app = await application()
  await app.listen(3000);
}
bootstrap();
