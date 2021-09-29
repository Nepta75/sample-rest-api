import { put } from './put';
import { post } from './post';
import { del } from './delete';
import { get } from './get';

export const crud = (route, table) => (
  [put, post, del, get].map(object => (
    Object.keys(object).map((key) => object[key](route, table))
  ))
);