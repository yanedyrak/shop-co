import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { Main } from "../widgets/Main";
import { Brands } from "../shared/ui/brands/Brands";
import { Card } from "../entities/Card";
import { Button } from "../shared/ui/Button";
import { Review } from "../entities/Review";
import { CatalogBrowse } from "../widgets/CatalogBrowse";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Brands />
      <Card a={true} />
      <Review />

      <CatalogBrowse />
      <Footer />
    </div>
  );
}

export default App;
