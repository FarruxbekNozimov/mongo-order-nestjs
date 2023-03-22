import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const { user_name, password } = createAdminDto;
    const hashed_password = await bcrypt.hash(password, 7);
    const createdAdmin = new this.adminModel({
      user_name,
      hashed_password,
    });
    return createdAdmin.save();
  }

  async findAll() {
    return this.adminModel.find().exec();
  }

  async findOneById(id: string) {
    return this.adminModel.findById(id).exec();
  }

  async findOneByUserName(user_name: string) {
    const res = await this.adminModel
      .findOne({ user_name: user_name }, { new: true })
      .exec();
    if (!res) return new NotFoundException('USER NOT FOUND | 404');
    return res;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.adminModel.findByIdAndDelete(id).exec();
  }
}
