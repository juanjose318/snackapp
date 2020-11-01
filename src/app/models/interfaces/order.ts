import { Product } from './products';

export interface Order extends Product {
    'title':string,
    'status':string,
    'fields': {
        'address': 'string',
            'delivery_time': number,
            "product": Product
    }
}
