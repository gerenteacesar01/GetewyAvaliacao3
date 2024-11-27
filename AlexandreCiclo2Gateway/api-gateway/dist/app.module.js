"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const ordem_controller_1 = require("./ordem/ordem.controller");
const ordem_service_1 = require("./ordem/ordem.service");
const microservices_1 = require("@nestjs/microservices");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [ordem_controller_1.OrdemController],
        providers: [
            ordem_service_1.OrdemService,
            {
                provide: 'ORDEN_SERVICE',
                useFactory: () => microservices_1.ClientProxyFactory.create({
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
                        queue: 'ordemQueue',
                        queueOptions: {
                            durable: false,
                        },
                    },
                }),
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map