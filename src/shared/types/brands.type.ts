export interface IBrands {
  name: string;
  description: string;
}

export interface IBrandResponse extends IBrands {
  id: string;
}

export interface IUpdateBrands {
  name?: string;
  description?: string;
}
