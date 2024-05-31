import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { Main } from "../widgets/Main";
import { Brands } from "../shared/ui/brands/Brands";
import { Card } from "../entities/Card";
import { Button } from "../shared/ui/Button";
import { Review } from "../entities/Review";
import { CatalogBrowse } from "../widgets/CatalogBrowse";
import { data } from "../reviews";
import { ReviewList } from "../widgets/ReviewList";
function App() {
  return (
    <>
      <ReviewList />
    </>
  );
}

export default App;
