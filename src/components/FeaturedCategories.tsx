import pizzaImage from "@/assets/pizza-feature.jpg";
import dessertsImage from "@/assets/desserts-feature.jpg";
import hawawshiImage from "@/assets/hawawshi-feature.jpg";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "بيتزا الزهراء",
      description: "بيتزا إيطالية و شرقية بأجود المكونات",
      image: pizzaImage,
      link: "#pizza-eastern",
    },
    {
      title: "حواوشي الزهراء",
      description: "حواوشي طازج محضر يومياً",
      image: hawawshiImage,
      link: "#hawawshi",
    },
    {
      title: "حلو الزهراء",
      description: "حلويات شرقية و غربية",
      image: dessertsImage,
      link: "#desserts",
    },
  ];

  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary" dir="rtl">
          الأصناف المميزة
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex items-end p-6">
                <div dir="rtl">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {category.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
