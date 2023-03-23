import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OperationService } from './operation.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Post()
  create(@Body() createOperationDto: CreateOperationDto) {
    return this.operationService.create(createOperationDto);
  }

  @Get()
  findAll() {
    return this.operationService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.operationService.findOneById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOperationDto: UpdateOperationDto,
  ) {
    return this.operationService.update(id, updateOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operationService.remove(id);
  }
}
