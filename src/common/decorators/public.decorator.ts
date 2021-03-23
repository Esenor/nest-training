import { SetMetadata } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => {
  ApiTags('Public');
  return SetMetadata(IS_PUBLIC_KEY, true);
};
