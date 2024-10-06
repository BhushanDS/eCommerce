import { Product } from './product';

export class CartItem {

  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(product: Product) {
      this.id = product.id ?? 'default-id'; // Provide a default id if undefined
      this.name = product.name ?? 'default-name';
      this.imageUrl = product.imageUrl ?? 'default-image-url';
      this.unitPrice = product.unitPrice ?? 0;
      this.quantity = 1;
  }
}

