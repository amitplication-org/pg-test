import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
