import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { StatusModule } from './status/status.module';
import { CurrencyTypeModule } from './currency_type/currency_type.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    StatusModule,
    CurrencyTypeModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
