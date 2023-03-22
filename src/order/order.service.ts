import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private authModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const res = new this.authModel(createOrderDto);
    return res.save();
  }

  async findAll() {
    return this.authModel.find().exec();
  }

  async findOneById(id: string) {
    return this.authModel.findById(id).exec();
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.authModel
      .findByIdAndUpdate(id, updateOrderDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.authModel.findByIdAndDelete(id).exec();
  }
}
