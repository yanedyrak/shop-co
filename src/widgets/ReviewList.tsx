import { Review } from "../entities/Review";
import { data } from "../reviews";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ReviewList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} arrows={false} autoPlay infinite>
      {data.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </Carousel>
  );
};
