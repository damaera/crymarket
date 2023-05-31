export const PriceChangeText = ({ change }: { change: string | undefined }) => {
  const changeNumber = Number(change);

  return (
    <span
      className={
        changeNumber > 0
          ? "text-green-500"
          : changeNumber < 0
          ? "text-red-500"
          : ""
      }
    >
      {changeNumber.toLocaleString("id")}%
    </span>
  );
};
