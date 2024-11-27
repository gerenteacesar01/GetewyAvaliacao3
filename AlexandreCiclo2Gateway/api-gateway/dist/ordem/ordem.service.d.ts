import { ClientProxy } from '@nestjs/microservices';
export declare class OrdemService {
    private readonly client;
    constructor(client: ClientProxy);
    sendOrderToMicroservice(orderData: any): Promise<any>;
}
