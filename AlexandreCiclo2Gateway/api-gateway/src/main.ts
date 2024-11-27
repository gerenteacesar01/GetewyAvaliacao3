import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Conectar-se ao RabbitMQ (Microservice)
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],  // URL do RabbitMQ
      queue: 'ordemQueue',  // Nome da fila
      queueOptions: {
        durable: false,  // Se a fila é durável ou não
      },
    },
  });

  await app.startAllMicroservices(); // Inicia o microserviço
  await app.listen(3000); // Porta onde o API Gateway vai ouvir
}

bootstrap();
