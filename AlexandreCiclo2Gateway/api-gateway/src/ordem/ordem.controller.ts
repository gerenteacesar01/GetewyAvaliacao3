// src/ordem/ordem.controller.ts (API Gateway)
import { Controller, Post, Body } from '@nestjs/common';
import { OrdemService } from './ordem.service';

@Controller('ordem')
export class OrdemController {
  constructor(private readonly ordemService: OrdemService) {}

  @Post()
  async createOrder(@Body() orderData: any) {
    // Envia a ordem para o microserviço
    return await this.ordemService.sendOrderToMicroservice(orderData);
  }
}
