import { Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FincluRecord } from '@prisma/client';

@Injectable()
export class RecordService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<FincluRecord[]> {
    return await this.prisma.fincluRecord.findMany({
      where: query,
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'sales_agent_id' });

    const result = await this.prisma.fincluRecord.findMany({
      where: { [searchKey]: { contains: searchVal }, ...filterObj },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.fincluRecord.count();

    return {
      data: result,
      pageInfo: {
        page: skip,
        pageSize: take,
        totalRowCount: total,
      },
    };
  }

  async getOneById(id: string): Promise<any> {
    return await this.prisma.fincluRecord.findUnique({
      where: { id: id },
    });
  }

  async create(body: CreateRecordDto): Promise<FincluRecord> {
    return await this.prisma.fincluRecord.create({ data: body });
  }

  async createMany(dataList: any): Promise<any> {
    const newDataList = dataList.map((item) => {
      return {
        application_id: item.application_id,
        sales_agent_id: item.sales_agent_id,
        account_type: item.account_type,
        application_status: item.application_status,
        business_category: item.business_category,
      };
    });

    const createdObj = await this.prisma.fincluRecord.createMany({
      data: newDataList,
    });

    return createdObj.count;
  }

  async update(id: string, body: UpdateRecordDto): Promise<FincluRecord> {
    return await this.prisma.fincluRecord.update({
      where: {
        id: id,
      },
      data: body,
    });
  }

  async delete(id: string): Promise<FincluRecord> {
    return await this.prisma.fincluRecord.delete({ where: { id: id } });
  }
}
