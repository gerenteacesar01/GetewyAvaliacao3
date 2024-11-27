import { OrdemService } from './ordem.service';
export declare class OrdemController {
    private readonly ordemService;
    constructor(ordemService: OrdemService);
    createOrder(orderData: any): Promise<any>;
}
