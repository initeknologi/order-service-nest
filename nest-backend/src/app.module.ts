// nest-backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/order.entity';

@Module({
  imports: [
    // Konfigurasi koneksi ke PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Ganti sesuai host PostgreSQL Anda
      port: 5432, // Port default PostgreSQL
      username: 'postgres', // Ganti sesuai username Anda
      password: 'password', // Ganti sesuai password Anda
      database: 'postgres', // Ganti dengan nama database
      entities: [Order],
      synchronize: true, // Hanya untuk development; nonaktifkan di production
    }),
    OrdersModule,
  ],
})
export class AppModule {}
