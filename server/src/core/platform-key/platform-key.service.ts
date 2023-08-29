import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { assert } from 'src/utils/assert';
import { CreateKey } from './dto/CreateKey.dto';

@Injectable()
export class PlatformKeyService {
  constructor(private readonly prismaService: PrismaService) {}

  findMany = this.prismaService.client.platformKey.findMany;

  // Update
  update = this.prismaService.client.platformKey.update;
  updateMany = this.prismaService.client.platformKey.updateMany;

  // Delete
  delete = this.prismaService.client.platformKey.delete;
  deleteMany = this.prismaService.client.platformKey.deleteMany;

  async create(args: CreateKey) {
    // Create platformKey
    const adminHasWorkspace =
      await this.prismaService.client.platformKey.findMany({
        where: { email: args.email },
      });

    console.log(adminHasWorkspace);

    if (adminHasWorkspace?.length) {
      throw new BadRequestException(
        `Admin with provided email already has a platform key.`,
      );
    }

    const platformKey = await this.prismaService.client.platformKey.create({
      data: { ...args },
    });

    return platformKey;
  }
}
