import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerCreateInput = {
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
};
