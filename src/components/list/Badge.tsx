type Props = {
  discount?: number;
};

const Badge = ({ discount }: Props) => {
  return (
    <span
      className={`absolute text-white rounded bg-yellow-500 rounded-tl-[12px]
        rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px]
        px-2 py-1 lg:px-4 lg:py-3 ${discount ? "bg-yellow-500" : "bg-blue-500"}
        `}
    >
      {discount ? `%${discount} indirim` : "Yeni"}
    </span>
  );
};

export default Badge;
