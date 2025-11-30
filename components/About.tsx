import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-unity-gold font-bold mb-4 text-lg">داستان ما</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              ۲۰ سال تعهد به کیفیت <br/> 
              <span className="text-gray-400">از واردات تا تولید ملی</span>
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
              <p>
                گروه بازرگانی و تولیدی یونیتی فعالیت خود را دو دهه پیش با واردات محصولات باکیفیت آغاز کرد. با تکیه بر تجربه ۲۰ ساله در شناخت بازارهای جهانی و نیازهای داخلی، ما تصمیم گرفتیم دانش خود را به خطوط تولید منتقل کنیم.
              </p>
              <p>
                امروز، کارخانه ما با مساحتی بالغ بر ۵۰۰۰ متر مربع و با همکاری ۶۰ نفر از متخصصین مجرب، نبض بازار رنگ موی حیوانات خانگی و چسب‌های صنعتی را در دست دارد.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-gray-800 pt-8">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">۱۳۸۲</span>
                <span className="text-sm text-gray-500">تاسیس شرکت</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">۳</span>
                <span className="text-sm text-gray-500">خط تولید فعال</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">۱۰۰٪</span>
                <span className="text-sm text-gray-500">رضایت مشتریان</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4 h-full">
                <img 
                    src="https://picsum.photos/seed/factory1/400/600" 
                    className="w-full h-64 md:h-full object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity" 
                    alt="Factory Interior"
                />
                <div className="flex flex-col gap-4">
                    <img 
                        src="https://picsum.photos/seed/factory2/400/300" 
                        className="w-full h-full object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity" 
                        alt="Lab"
                    />
                    <div className="bg-unity-blue p-6 rounded-2xl flex flex-col justify-center h-full">
                        <p className="font-bold text-xl mb-2">به ما بپیوندید</p>
                        <p className="text-sm text-blue-200 mb-4">همواره آماده همکاری با ایده‌های نو هستیم.</p>
                        <button className="text-left text-white font-bold hover:underline">اطلاعات بیشتر &larr;</button>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;