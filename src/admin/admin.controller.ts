import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  @Get()
  @Roles('admin') // Only admins can access this
  getAdminData() {
    return { message: 'Welcome, Admin!' };
  }
}
