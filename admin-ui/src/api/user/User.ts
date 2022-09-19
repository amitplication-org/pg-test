import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  id: string;
  roles: JsonValue;
};
