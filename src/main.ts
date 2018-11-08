import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Avanade Social')
  .setDescription('Descrição da API utilizada no projeto Avanade Social')
  .setVersion('1.0')
  .addTag('users')
  .addTag('auth')
  .addTag('posts')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();