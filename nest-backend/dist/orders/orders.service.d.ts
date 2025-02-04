import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrdersForAnalysis(): Promise<Order[]>;
}
