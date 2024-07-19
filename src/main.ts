import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      // logger: false, //disable default logger
    }
  );
  app.enableCors();
  app.setGlobalPrefix('api');  //prefix before every route
  await app.listen(4040);
}
bootstrap();
 