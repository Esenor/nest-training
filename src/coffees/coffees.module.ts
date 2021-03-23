import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../event/entities/event.entity';
import { ConfigService } from '@nestjs/config';

class MockCoffeeService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService, ConfigService],
  // providers: [{ provide: CoffeesService, useValue: new MockCoffeeService() }],
  exports: [CoffeesService],
})
export class CoffeesModule {}
