export interface IEmployee {
  name: string;
  email: string;
  role: string;
  salary: number;
}

export interface IEmployeeResponse extends IEmployee {
  id: string;
}

export interface IUpdateEmployee {
  name?: string;
  email?: string;
  role?: string;
  salary?: number;
}
