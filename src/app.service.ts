import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!123';
  }
  postHello() {
    return {
      message: 'Hello World!',
      data: {
        name: 'John Doe',
        age: 25,
        address: '123 Main St, New York, NY 10030',
      },
      status: 'success',
    };
  }
}
