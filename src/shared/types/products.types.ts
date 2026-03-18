export interface IProducts {
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface IProductResponse extends IProducts {
  id: string;
}

export interface IUpdateProducts {
  name?: string;
  image?: string;
  price?: number;
  description?: string;
}
