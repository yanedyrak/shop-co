const category = [
  {
    id: 1,
    name: "T-shirts",
  },
  {
    id: 2,
    name: "Shorts",
  },
  {
    id: 3,
    name: "Shirts",
  },
  {
    id: 4,
    name: "Hoodie",
  },
  {
    id: 5,
    name: "Jeans",
  },
];
export const Filters = () => {
  return (
    <div className="w-[300px] px-[30px] rounded-[30px] border-[3px] border-[rgba(0,0,0,0.1)]">
      <div className="py-[24px]">
        <h1 className="font-bold pb-[24px] text-xl border-b-[1px] border-b-gray-400">
          FILTERS
        </h1>

        <ul className="py-[24px]  border-b-[1px] border-b-gray-400">
          {category.map((item) => (
            <li className="opacity-60  mb-[22px] text-[16px]" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="mt-[24px] h-[30px] pb-[24px] border-b-[1px] border-b-gray-400 bg-black">
          1
        </div>
      </div>
    </div>
  );
};
