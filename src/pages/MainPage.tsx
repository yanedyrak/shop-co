import { Button } from "../shared/ui/Button";
import { Brands } from "../shared/ui/brands/Brands";
import { CardList } from "../widgets/CardList";
import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Main } from "../widgets/Main";
import { ReviewList } from "../widgets/ReviewList";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Brands />
      <CardList>NEW ARRIVALS</CardList>
      <Button>View all</Button>
      <CardList>TOP SELLING</CardList>
      <Button>View all</Button>
      <ReviewList />

      <Footer />
    </>
  );
};
