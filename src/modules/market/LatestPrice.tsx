import { useEffect, useRef, useState } from "react";

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export function LatestPrice({ price }: { price: string | undefined }) {
  const previousPrice = usePrevious(price);

  const [priceState, setPriceState] = useState<"up" | "down" | "equal">(
    "equal"
  );

  useEffect(() => {
    if (previousPrice !== undefined && price !== previousPrice) {
      if (Number(price) > Number(previousPrice)) {
        setPriceState("up");
      } else {
        setPriceState("down");
      }

      setTimeout(() => {
        setPriceState("equal");
      }, 600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <span
      className={`${
        priceState === "equal"
          ? ""
          : priceState === "up"
          ? "text-green-500"
          : "text-red-500"
      } transition-colors duration-600`}
    >
      Rp {Number(price).toLocaleString("id")}
    </span>
  );
}
