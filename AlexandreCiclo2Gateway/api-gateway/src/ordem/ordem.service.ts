// src/ordem/ordem.service.ts (API Gateway)
import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';  // Para aguardar a resposta do microserviço

@Injectable()
export class OrdemService {
  constructor(
    @Inject('ORDEN_SERVICE') private readonly client: ClientProxy, // Injetando o ClientProxy com o token correto
  ) {}

  // Método para enviar a ordem para o microserviço
  async sendOrderToMicroservice(orderData: any) {
    // Envia a mensagem para a fila no microserviço e aguarda a resposta
    return lastValueFrom(this.client.send('create_ordem', orderData));  // 'create_ordem' é a rota que o microserviço espera
  }
}
