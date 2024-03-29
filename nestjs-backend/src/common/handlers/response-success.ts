import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AES256 } from 'src/utilities/01100110';
import { aesConstants } from 'src/auth/constants';
import { ResponseMessageKey } from './response-message';
import { IResponseData, IResponseHash } from '../interfaces/response-format';

@Injectable()
export class TransformationInterceptor<T>
  implements NestInterceptor<IResponseData<T>>
{
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IResponseData<T> | IResponseHash> {
    const responseMessage =
      this.reflector.get<string>(ResponseMessageKey, context.getHandler()) ??
      '';

    const responseFormat = (data) => {
      const result = {
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: responseMessage,
        data: data || null,
        timestamp: new Date().toISOString(),
        method: context.switchToHttp().getRequest<Request>().method,
      };

      return aesConstants.isEncrypted
        ? { result: AES256.encryption(result) }
        : result;
    };

    return next.handle().pipe(map(responseFormat));
  }
}
