import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
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
