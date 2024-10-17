للمشروعتطبيق التداول مع بايننس و3Commas
نظرة عامة
هذا المشروع هو تطبيق تداول آلي يتكامل مع منصات Binance و3Commas. يقوم بمعالجة الإشارات الواردة عبر webhooks، ويدير استراتيجيات التداول، ويوفر تقارير أداء وإشعارات للمستخدم.
الميزات الرئيسية

التكامل مع Binance و3Commas APIs
معالجة إشارات التداول عبر webhooks
إدارة الروبوتات وإعدادات الاستراتيجية
تقارير الأداء وتحليل الربح/الخسارة
نظام إشعارات (البريد الإلكتروني والتطبيق)
مزامنة البيانات مع المنصات الخارجية
أمان وتشفير البيانات

متطلبات النظام

Node.js (الإصدار 14 أو أحدث)
NPM (مدير حزم Node.js)
حساب Binance
حساب 3Commas

الإعداد

استنسخ المستودع:
Copygit clone https://https://github.com/osmanjamal/project.git
cd your-trading-app

قم بتثبيت التبعيات:
Copynpm install

قم بإعداد ملف الإعدادات:

انسخ config.example.js إلى config.js
قم بتعديل config.js بإضافة مفاتيح API الخاصة بك ومعلومات الإعداد الأخرى

قم بإعداد قاعدة البيانات:

قم بتشغيل سكريبت إعداد قاعدة البيانات (إذا كان مطلوبًا)

Copynpm run setup-db

التشغيل
لتشغيل التطبيق:
Copynpm start
الاستخدام

قم بإعداد webhooks في TradingView أو أي مصدر إشارات آخر للاتصال بنقطة نهاية webhook الخاصة بالتطبيق
استخدم واجهة المستخدم لإدارة الروبوتات وعرض التقارير
راقب الإشعارات للحصول على تحديثات حول نشاط التداول
