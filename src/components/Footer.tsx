import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-right" dir="rtl">
            <h3 className="text-2xl font-bold mb-4">منيو كشري و حلواني الزهراء</h3>
            <p className="text-white/90">
              عالم فريد من البيتزا الإيطالي و الشرقي و الفطائر
            </p>
          </div>
          
          <div className="text-center" dir="rtl">
            <h4 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              اتصل بنا
            </h4>
            <div className="space-y-2">
              <a href="tel:01040346247" className="block hover:text-accent transition-colors">
                01040346247
              </a>
              <a href="tel:01105709047" className="block hover:text-accent transition-colors">
                01105709047
              </a>
              <a href="tel:01142787968" className="block hover:text-accent transition-colors">
                01142787968
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left" dir="rtl">
            <h4 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5" />
              العنوان
            </h4>
            <p className="text-white/90">
              زهراء مدينة نصر - شارع الميثاق<br />
              بجوار معرض سيارات سيد مكاوي<br />
              أمام سنترال وي
            </p>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/20">
          <a 
            href="https://wa.me/201142787968" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg mb-6"
            dir="rtl"
          >
            <MessageCircle className="w-6 h-6" />
            اطلب على واتساب
          </a>
          <p className="text-white/80 text-lg font-bold" dir="rtl">
            EL ZAHRAA — الزهراء
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
