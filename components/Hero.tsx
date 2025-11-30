import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Factory Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-unity-blue/90 to-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="text-white space-y-6">
          <div className="inline-block bg-unity-gold/20 text-unity-gold border border-unity-gold/30 px-4 py-1.5 rounded-full text-sm font-bold mb-2">
            بیش از ۲۰ سال تجربه موفق
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            پیشرو در صنعت <span className="text-unity-gold">واردات و تولید</span> محصولات تخصصی
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
            ما با تکیه بر ۶۰ نفر پرسنل متخصص و تکنولوژی روز دنیا، با کیفیت‌ترین رنگ موی حیوانات خانگی و چسب‌های صنعتی برند یونیتی را به بازار عرضه می‌کنیم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#pet-dye"
              className="bg-unity-gold hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-900/20"
            >
              محصولات جدید
              <ArrowLeft size={20} />
            </a>
            <a
              href="#about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all"
            >
              درباره کارخانه
            </a>
          </div>
        </div>

        {/* Hero Visual - Abstract Representation of Colorful Dye and Tape */}
        <div className="hidden md:flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-unity-blue rounded-full blur-[100px] opacity-40"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img
                    src="https://picsum.photos/600/600"
                    alt="Products Composition"
                    className="rounded-2xl shadow-lg w-full max-w-md"
                 />
                 <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-800 font-bold text-sm">تضمین اصالت کالا</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;