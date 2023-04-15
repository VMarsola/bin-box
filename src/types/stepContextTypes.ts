import { Containers, Item } from "./shippingTypes";

export type IContextProps = {
  children: React.ReactNode;
};

export type UniId = {
  uniqueiD: string;
};
export type ItemItem = Item & UniId;

export type IStepType = {
  stepIndex: number;
  data: ItemItem[];
  response: Containers;
};
