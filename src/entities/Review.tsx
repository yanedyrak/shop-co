import { Star } from "../shared/Star";

export interface ReviewProps {
  id: number;
  rating: number;
  userName: string;
  text: string;
}
export const Review = ({ rating, userName, text }: ReviewProps) => {
  return (
    <div className="m-[20px] px-[20px] py-[20px] border-[2px] rounded-3xl border-[#F0EEED] w-94 h-60">
      <div className="flex gap-2">
        {Array(Math.round(rating))
          .fill(0)
          .map((_, index) => (
            <Star key={index} />
          ))}
      </div>
      <div className="mt-4">
        <p className="mb-[12px]">{userName}</p>
        <p className="opacity-60">"{text}”</p>
      </div>
    </div>
  );
};
