import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerUpdateInput = {
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
};
