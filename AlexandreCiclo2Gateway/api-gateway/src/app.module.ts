// src/app.module.ts (API Gateway)
import { Module } from '@nestjs/common';
import { OrdemController } from './ordem/ordem.controller';
import { OrdemService } from './ordem/ordem.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  controllers: [OrdemController],
  providers: [
    OrdemService,
    {
      provide: 'ORDEN_SERVICE', // Nome do token de injeção
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.RMQ, // Usando RabbitMQ como transporte
          options: {
            urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'], // Incluindo o vhost 'arquivoprojetormq'
            queue: 'ordemQueue', // Nome da fila no RabbitMQ
            queueOptions: {
              durable: false, // A fila não será durável
            },
          },
        }),
    },
  ],
})
export class AppModule {}
