import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h4 className="text-white text-xl font-bold mb-2">گروه تولیدی یونیتی</h4>
            <p className="text-sm">تولیدکننده تخصصی رنگ موی حیوانات و چسب‌های صنعتی</p>
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">خانه</a>
             <a href="#pet-dye" className="hover:text-white transition-colors">محصولات</a>
             <a href="#about" className="hover:text-white transition-colors">درباره ما</a>
             <a href="#contact" className="hover:text-white transition-colors">تماس</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© تمامی حقوق برای گروه یونیتی محفوظ است. ۱۴۰۳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;