import { Order } from "../order/Order";
import { Address } from "../address/Address";

export type Customer = {
  phone: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  orders?: Array<Order>;
  address?: Address | null;
};
