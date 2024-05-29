import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { Main } from "../widgets/Main";
import { Brands } from "../shared/ui/brands/Brands";
import { Card } from "../entities/Card";
import { Button } from "../shared/ui/Button";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Brands />
      <Button>{"View All"}</Button>
      <Card a={false} />
      <Card a={true} />
      <Footer />
    </div>
  );
}

export default App;
