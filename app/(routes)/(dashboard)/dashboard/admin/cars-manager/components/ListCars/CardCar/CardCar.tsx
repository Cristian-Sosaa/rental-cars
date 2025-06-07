import { CardCarProps } from "./CardCar.type";

export function CardCar(props: CardCarProps) {
  const { car } = props;

  return <div>{car.name}</div>;
}
