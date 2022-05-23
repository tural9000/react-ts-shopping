import { IPRODUCT } from './products';

export interface ICARD{
    product: IPRODUCT;
    createDate?: Date | string;
    quantity: number
}