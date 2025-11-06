import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
  icon?: string;
}

const MenuCategory = ({ title, items, icon }: MenuCategoryProps) => {
  const { addItem } = useCart();
  return (
    <div className="mb-12 animate-slide-up" id={title.replace(/\s+/g, '-')}>
      <div className="flex items-center gap-3 mb-6">
        {icon && <span className="text-4xl">{icon}</span>}
        <h2 className="text-3xl md:text-4xl font-bold text-primary" dir="rtl">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card 
            key={index} 
            className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
          >
            <CardContent className="p-5">
              <div className="flex justify-between items-start gap-3" dir="rtl">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    {item.price} جنيه
                  </span>
                </div>
                <Button
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => addItem({
                    id: `${title}-${item.name}`,
                    name: item.name,
                    price: parseFloat(item.price),
                    category: title,
                  })}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
