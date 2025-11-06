import { Card, CardContent } from "@/components/ui/card";

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
            className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card border-border"
          >
            <CardContent className="p-5">
              <div className="flex justify-between items-center" dir="rtl">
                <h3 className="text-lg font-semibold text-foreground flex-1">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-primary mr-4">
                  {item.price} جنيه
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
