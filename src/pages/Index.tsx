import Hero from "@/components/Hero";
import MenuNavigation from "@/components/MenuNavigation";
import MenuCategory from "@/components/MenuCategory";
import Footer from "@/components/Footer";
import { menuData } from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <MenuNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div id="koshary">
          <MenuCategory title="كشري الزهراء" items={menuData.koshary} icon="🍜" />
        </div>
        
        <div id="tagines">
          <MenuCategory title="طواجن الزهراء" items={menuData.tagines} icon="🍲" />
        </div>
        
        <div id="meals">
          <MenuCategory title="وجبات الزهراء" items={menuData.meals} icon="🍱" />
        </div>
        
        <div id="hawawshi">
          <MenuCategory title="حواوشي الزهراء" items={menuData.hawawshi} icon="🥙" />
        </div>
        
        <div id="crepe">
          <MenuCategory title="كريب الزهراء" items={menuData.crepe} icon="🌯" />
        </div>
        
        <div id="pizza-eastern">
          <MenuCategory title="بيتزا شرقي" items={menuData.pizzaEastern} icon="🍕" />
        </div>
        
        <div id="pizza-italian">
          <MenuCategory title="بيتزا إيطالي" items={menuData.pizzaItalian} icon="🍕" />
        </div>
        
        <div id="desserts">
          <MenuCategory title="حلو الزهراء" items={menuData.desserts} icon="🍰" />
        </div>
        
        <div id="beverages">
          <MenuCategory title="المشروبات" items={menuData.beverages} icon="🥤" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
