import { Item } from "../types/shippingTypes";
import { CONTAINER_SIZES } from "../constants/containers";
export const calculateVolume = (input: Item[]) => {
  let totalVolume = 0;

  if (input.length <= 1) {
    let item = input[0];
    return item.length * item.width * item.height;
  }

  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    let itemVolume = item.length * item.width * item.height;
    totalVolume += itemVolume * item.quantity;
  }

  return totalVolume;
};

export const calculateContainers = (input: Item[]) => {
  let totalVolume = calculateVolume(input);
  let containerQuantities: Record<string, number> = {};

  if (input.length <= 1 && input[0].quantity === 1) {
    for (let i = 0; i < CONTAINER_SIZES.length; i++) {
      const element = CONTAINER_SIZES[i];
      const boxVolume = calculateVolume([{ ...element, quantity: 1 }]);

      if (boxVolume >= totalVolume) {
        containerQuantities[element.name] = 0;
        containerQuantities[element.name] += 1;

        return containerQuantities;
      }
    }
  }

  for (let i = 0; i < CONTAINER_SIZES.length; i++) {
    let containerSize = CONTAINER_SIZES[i];
    let containerVolume =
      containerSize.length * containerSize.width * containerSize.height;
    containerQuantities[containerSize.name] = 0;

    while (totalVolume >= containerVolume) {
      containerQuantities[containerSize.name] += 1;
      totalVolume -= containerVolume;
    }
  }

  if (totalVolume) {
    const lastContainer = CONTAINER_SIZES[CONTAINER_SIZES.length - 1];
    containerQuantities[lastContainer.name] += 1;
    totalVolume = 0;
  }

  return containerQuantities;
};
