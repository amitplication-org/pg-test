import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  phone?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  addressId?: SortOrder;
};
