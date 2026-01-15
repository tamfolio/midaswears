import HeroSection from "./components/HeroSection";
import ProductSlider from "./components/ProductSlider";
import { mensProducts, womensProducts } from "./Data/productData";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductSlider title="Men's New Arrivals" products={mensProducts} />
      <ProductSlider title="Women's New Arrivals" products={womensProducts} />
    </div>
  );
}
