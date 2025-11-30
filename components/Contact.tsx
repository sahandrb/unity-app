import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Side */}
          <div className="md:w-5/12 bg-unity-blue p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">تماس با کارخانه</h3>
              <p className="text-blue-100 mb-8">
                برای ثبت سفارش عمده، دریافت نمایندگی یا مشاوره در مورد رنگ موی حیوانات و چسب یونیتی، با ما در تماس باشید.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0 text-unity-gold" />
                  <p className="text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="shrink-0 text-unity-gold" />
                  <p className="text-sm font-bold" dir="ltr">{CONTACT_INFO.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="shrink-0 text-unity-gold" />
                  <p className="text-sm">{CONTACT_INFO.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="shrink-0 text-unity-gold" />
                  <p className="text-sm" dir="ltr">{CONTACT_INFO.instagram}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-xs text-blue-200">ساعات پاسخگویی: شنبه تا چهارشنبه ۸ الی ۱۷</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">ارسال پیام</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">نام و نام خانوادگی</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-unity-blue transition-colors" placeholder="مثال: علی محمدی" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">شماره تماس</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-unity-blue transition-colors text-left" dir="ltr" placeholder="0912..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">موضوع پیام</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-unity-blue transition-colors">
                  <option>سفارش عمده رنگ مو</option>
                  <option>سفارش عمده چسب یونیتی</option>
                  <option>درخواست نمایندگی</option>
                  <option>سایر موارد</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">متن پیام</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-unity-blue transition-colors" placeholder="پیام خود را بنویسید..."></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                ارسال درخواست
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;