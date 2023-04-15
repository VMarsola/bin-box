export type Item = {
  width: number; // in meters
  height: number; // in meters
  length: number;
  quantity: number;
};

export type ItemInput = Item[];

export type Containers = {
  [size: string]: any;
};
