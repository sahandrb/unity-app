import React from 'react';
import { FEATURES } from '../constants';
import { Palette, Sparkles, Droplets } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="pet-dye" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-unity-blue font-bold tracking-wider uppercase mb-3">محصول ویژه</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">رنگ موی تخصصی حیوانات</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            جدیدترین محصول کارخانه ما، با فرمولاسیونی کاملاً گیاهی و بی‌خطر، زیبایی و شادی را به حیوانات خانگی شما هدیه می‌دهد.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="lg:col-span-1 space-y-6">
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                            <feature.icon size={24} />
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-slate-800">{feature.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Central Image */}
            <div className="lg:col-span-1 flex items-center justify-center relative">
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white">
                    <img 
                        src="https://picsum.photos/seed/dogdye/600/800" 
                        alt="Dog with colored hair" 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <p className="font-bold text-2xl mb-1">خلاقیت بی‌پایان</p>
                            <p className="text-white/80">برای تمامی نژادها</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Color Palette / Details */}
            <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-lg border-r-4 border-pink-500">
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Palette className="text-pink-500" />
                        رنگ‌بندی محبوب
                    </h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-pink-500 shadow-md group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-700">صورتی پرنسسی</span>
                            </div>
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">پرفروش</span>
                        </div>
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-600 shadow-md group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-700">بنفش کهکشانی</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 shadow-md group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-700">آبی اقیانوسی</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-400 shadow-md group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-700">سبز نئونی</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-blue-600 text-white p-6 rounded-2xl flex items-center justify-between shadow-lg shadow-blue-200">
                    <div>
                        <p className="text-sm opacity-80 mb-1">ظرفیت تولید ماهانه</p>
                        <p className="text-2xl font-black">۵۰,۰۰۰ تیوب</p>
                    </div>
                    <Sparkles size={32} className="opacity-50" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;