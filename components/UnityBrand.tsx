import React from 'react';
import { Shield, Target, Truck } from 'lucide-react';

const UnityBrand: React.FC = () => {
  return (
    <section id="unity-tape" className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-unity-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-unity-blue/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2">
                <div className="relative group">
                    <div className="absolute inset-0 bg-unity-blue rounded-3xl rotate-3 transition-transform group-hover:rotate-6 opacity-20"></div>
                    <img 
                        src="https://picsum.photos/seed/tape/600/600" 
                        alt="Unity Tape Roll" 
                        className="relative rounded-3xl shadow-2xl w-full object-cover z-10"
                    />
                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border-r-4 border-unity-red">
                        <p className="text-sm text-slate-500 mb-1">چسبندگی فوق‌العاده</p>
                        <p className="text-2xl font-black text-slate-800">تضمین کیفیت</p>
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-8">
                <div>
                    <span className="text-unity-red font-bold tracking-wider uppercase">برند اختصاصی ما</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">چسب یونیتی (Unity Tape)</h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                    علاوه بر محصولات آرایشی حیوانات، ما با افتخار تولیدکننده و صاحب امتیاز برند «چسب یونیتی» هستیم. این محصول با استفاده از تکنولوژی نانو و مواد اولیه وارداتی، بالاترین سطح چسبندگی را برای مصارف صنعتی و بسته‌بندی ارائه می‌دهد.
                </p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-50 p-2 rounded-lg text-unity-red mt-1">
                            <Shield size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">مقاومت بالا</h4>
                            <p className="text-sm text-slate-500">مقاوم در برابر رطوبت، کشش و تغییرات دمایی.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-2 rounded-lg text-unity-blue mt-1">
                            <Target size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">دقت در برش</h4>
                            <p className="text-sm text-slate-500">بدون پارگی حین کار، مناسب برای دستگاه‌های اتوماتیک.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-amber-50 p-2 rounded-lg text-amber-600 mt-1">
                            <Truck size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">توزیع سراسری</h4>
                            <p className="text-sm text-slate-500">آماده عقد قرارداد با کارخانجات و شرکت‌های پخش.</p>
                        </div>
                    </div>
                </div>

                <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                    مشاهده کاتالوگ چسب
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UnityBrand;