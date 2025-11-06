import { useState, useEffect } from "react";

const menuCategories = [
  { name: "كشري الزهراء", id: "koshary", icon: "🍜" },
  { name: "طواجن الزهراء", id: "tagines", icon: "🍲" },
  { name: "حواوشي الزهراء", id: "hawawshi", icon: "🥙" },
  { name: "كريب الزهراء", id: "crepe", icon: "🌯" },
  { name: "بيتزا شرقي", id: "pizza-eastern", icon: "🍕" },
  { name: "بيتزا إيطالي", id: "pizza-italian", icon: "🍕" },
  { name: "حلو الزهراء", id: "desserts", icon: "🍰" },
  { name: "المشروبات", id: "beverages", icon: "🥤" },
];

const MenuNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuCategories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap font-semibold
                transition-all duration-300 flex-shrink-0
                ${activeSection === category.id
                  ? "bg-primary text-primary-foreground shadow-warm scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }
              `}
              dir="rtl"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;
