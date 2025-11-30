import { CheckCircle, Globe, Users, Factory, Award, ShieldCheck } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'خانه', href: '#hero' },
  { name: 'رنگ موی پت', href: '#pet-dye' },
  { name: 'چسب یونیتی', href: '#unity-tape' },
  { name: 'درباره ما', href: '#about' },
  { name: 'تماس با ما', href: '#contact' },
];

export const STATS = [
  { id: 1, label: 'سال سابقه درخشان', value: '+۲۰', icon: Award },
  { id: 2, label: 'تعداد پرسنل متخصص', value: '۶۰', icon: Users },
  { id: 3, label: 'صادرات و واردات', value: 'جهانی', icon: Globe },
  { id: 4, label: 'استاندارد کیفیت', value: 'ISO', icon: ShieldCheck },
];

export const FEATURES = [
  {
    title: 'مواد اولیه درجه یک',
    description: 'استفاده از بهترین متریال‌های وارداتی برای تضمین سلامت حیوانات خانگی.',
    icon: CheckCircle
  },
  {
    title: 'فرمولاسیون ایمن',
    description: 'فاقد آمونیاک و مواد حساسیت‌زا، طراحی شده توسط متخصصین شیمی.',
    icon: ShieldCheck
  },
  {
    title: 'تنوع رنگی بالا',
    description: 'طیف گسترده‌ای از رنگ‌های فانتزی و طبیعی برای سلیقه‌های مختلف.',
    icon: Factory
  }
];

export const CONTACT_INFO = {
  address: 'تهران، منطقه صنعتی، خیابان صنعتگران، پلاک ۱۱۰',
  phone: '۰۲۱-۸۸۸۸۸۸۸۸',
  email: 'info@unitygroup.ir',
  instagram: '@unity_pet_color'
};