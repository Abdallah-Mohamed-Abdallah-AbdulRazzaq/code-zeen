code-zeen/
├── public/                 # الصور والخطوط والملفات الثابتة
│   ├── images/
│   ├── fonts/
│   └── locales/            # ملفات الترجمة (en.json, ar.json)
├── src/
│   ├── app/                # App Router Logic
│   │   ├── [lang]/         # Dynamic Segment للغة (ar/en)
│   │   │   ├── page.tsx    # (Home Page)
│   │   │   ├── about/      # صفحة من نحن
│   │   │   │   └── page.tsx
│   │   │   ├── services/   # صفحة الخدمات
│   │   │   │   └── page.tsx
│   │   │   ├── work/       # صفحة أعمالنا
│   │   │   │   └── page.tsx
│   │   │   ├── process/    # صفحة آلية العمل
│   │   │   │   └── page.tsx
│   │   │   ├── careers/    # صفحة الوظائف
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx  # Layout الرئيسي (Navbar + Footer)
│   │   ├── globals.css     # التنسيقات العامة
│   │   └── layout.tsx      # Root Layout (html, body)
│   ├── components/         # مكونات الواجهة
│   │   ├── common/         # مكونات مشتركة (Header, Footer, Button)
│   │   ├── home/           # مكونات خاصة بالصفحة الرئيسية (Hero, Testimonials)
│   │   ├── services/       # مكونات خاصة بصفحة الخدمات
│   │   └── ui/             # مكونات صغيرة (Inputs, Cards - ShadcnUI style)
│   ├── lib/                # دوال مساعدة (Utils) والتهيئة
│   │   ├── dictionary.ts   # دالة جلب ملفات اللغة
│   │   └── utils.ts        # دوال مساعدة عامة (مثل دمج الكلاسات)
│   ├── styles/             # ملفات الستايل الخاصة
│   │   └── theme.ts        # (اختياري) لو أردت تخزين متغيرات الألوان كـ constants
│   ├── types/              # تعريفات TypeScript
│   └── middleware.ts       # هام جداً: لتحويل المستخدم للغة الصحيحة
├── tailwind.config.ts      # المكان الأساسي للتحكم بالألوان (Theme Config)
└── next.config.js