import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-koshary.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg" dir="rtl">
            منيو كشري و حلواني الزهراء
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium" dir="rtl">
            كشري • بيتزا • كريب • حواوشي • حلو
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto" dir="rtl">
            عالم فريد من البيتزا الإيطالي و الشرقي و الفطائر
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="tel:01040346247" 
              className="flex items-center gap-3 bg-white/95 hover:bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-warm"
            >
              <Phone className="w-6 h-6" />
              <span>01040346247</span>
            </a>
            <a 
              href="tel:01105709047" 
              className="flex items-center gap-3 bg-white/95 hover:bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-warm"
            >
              <Phone className="w-6 h-6" />
              <span>01105709047</span>
            </a>
            <a 
              href="tel:01142787968" 
              className="flex items-center gap-3 bg-white/95 hover:bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-warm"
            >
              <Phone className="w-6 h-6" />
              <span>01142787968</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-white/95" dir="rtl">
            <MapPin className="w-6 h-6 flex-shrink-0" />
            <p className="text-base md:text-lg">
              زهراء مدينة نصر - شارع الميثاق - بجوار معرض سيارات سيد مكاوي - أمام سنترال وي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
