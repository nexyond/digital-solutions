let currentLang = 'tr';
let dictionary = {}; // Çeviriler buraya yüklenecek
let projectsData = [];
let currentProjectSlide = 0;
let projectInterval;

const projectDataRaw = {
    "projects": [
        {
            "id": "adisyon_sistemi",
            "name_tr": "Nexyond Adisyon Sistemi",
            "name_en": "Nexyond POS Ecosystem",
            "desc_tr": "Mutfak, Garson ve Yönetim panelleri arasında kusursuz senkronizasyon sağlayan; işletme verimliliğini gerçek zamanlı raporlarla maksimize eden kapsamlı adisyon çözümü.",
            "desc_en": "A comprehensive POS solution providing seamless synchronization between Kitchen, Waiter, and Management panels, maximizing business efficiency with real-time reporting.",
            "name_zh": "Nexyond 点单系统", 
            "desc_zh": "全方位POS解决方案，实现厨房、服务员和管理面板之间的无缝同步，通过实时报告提升业务效率。",
            "name_hi": "Nexyond POS इकोसिस्टम", 
            "desc_hi": "किचन, वेटर और मैनेजमेंट पैनल के बीच निर्बाध तालमेल प्रदान करने वाला एक व्यापक POS समाधान।",
            "name_es": "Ecosistema POS Nexyond", 
            "desc_es": "Solución integral de punto de venta con sincronización perfecta entre cocina, camareros y administración.",
            "name_ar": "نظام نكسيوند المتكامل للمطاعم", 
            "desc_ar": "حل شامل لنقاط البيع يوفر تزامنًا سلسًا بين المطبخ والنادل ولوحات الإدارة لزيادة الكفاءة.",
            "name_pt": "Ecossistema POS Nexyond", 
            "desc_pt": "Solução abrangente de PDV que oferece sincronização perfeita entre cozinha, garçons e painéis de gestão.",
            "name_fr": "Écosystème POS Nexyond", 
            "desc_fr": "Solution POS complète offrant une synchronisation fluide entre la cuisine, les serveurs et les panneaux de gestion.",
            "name_ru": "Экосистема Nexyond POS", 
            "desc_ru": "Комплексное POS-решение, обеспечивающее синхронизацию между кухней, официантами и панелями управления.",
            "name_ja": "Nexyond POS エコシステム", 
            "desc_ja": "厨房、ウェイター、管理パネル間のシームレスな同期を提供する、ビジネス効率を最大化するPOSソリューション。",
            "name_de": "Nexyond POS-Ökosystem", 
            "desc_de": "Umfassende POS-Lösung mit nahtloser Synchronisation zwischen Küche, Service und Management-Panels.",
            "name_it": "Ecosistema POS Nexyond", 
            "desc_it": "Soluzione POS completa che offre una sincronizzazione perfetta tra cucina, camerieri e pannelli di gestione.",
            "img_url": "src/PROJECTS/adisyon.png" 
        },
        {
            "id": "kaplanlar_web",
            "name_en": "Kaplanlar Tekstil Web",
            "name_tr": "Kaplanlar Tekstil Web",
            "name_zh": "Kaplanlar 纺织网页", "desc_zh": "专为纺织行业设计的以产品为中心的网页解决方案，突出企业形象。",
            "name_hi": "Kaplanlar टेक्सटाइल वेब", "desc_hi": "कपड़ा उद्योग के लिए डिज़ाइन किया गया एक उत्पाद-उन्मुख वेब समाधान, जो कॉर्पोरेट पहचान को उजागर करता है।",
            "name_es": "Kaplanlar Tekstil Web", "desc_es": "Solución web orientada a productos para la industria textil, resaltando la identidad corporativa.",
            "name_ar": "كابلانلار للمنسوجات", "desc_ar": "حل ويب يركز على المنتجات مصمم لصناعة المنسوجات، مع إبراز الهوية المؤسسية.",
            "name_pt": "Kaplanlar Têxtil Web", "desc_pt": "Solução web focada em produtos para a indústria têxtil, destacando a identidade corporativa.",
            "name_fr": "Kaplanlar Textile Web", "desc_fr": "Solution web orientée produit pour l'industrie textile, soulignant l'identité de l'entreprise.",
            "name_ru": "Kaplanlar Текстиль Веб", "desc_ru": "Веб-решение для текстильной промышленности, ориентированное на продукт и имидж компании.",
            "name_ja": "Kaplanlar 繊維ウェブ", "desc_ja": "企業のアイデンティティを強調する、繊維業界向けの商品中心のウェブソリューション。",
            "name_de": "Kaplanlar Textil Web", "desc_de": "Produktorientierte Web-Lösung für die Textilindustrie, die die Unternehmensidentität hervorhebt.",
            "name_it": "Kaplanlar Tessile Web", "desc_it": "Soluzione web per l'industria tessile, focalizzata sul prodotto e sull'identità aziendale.",
            "desc_en": "A product-oriented web solution designed for the textile industry, highlighting corporate identity.",
            "desc_tr": "Tekstil sektörü için tasarlanmış, ürün odaklı ve kurumsal kimliği ön plana çıkaran web çözümü.",
            "img_url": "src/PROJECTS/kaplanlar_web.png"
        },
        {
            "id": "cafe_menu",
            "name_en": "QR Menu for Cafe",
            "name_tr": "Kafeler için QR Menü",
            "name_zh": "咖啡馆 QR 菜单", "desc_zh": "通过二维码访问的菜单，可全天候从任何设备进行控制。",
            "name_hi": "कैफे के लिए QR मेनू", "desc_hi": "QR कोड के माध्यम से सुलभ मेनू, जिसे किसी भी डिवाइस से 24/7 नियंत्रित किया जा सकता है।",
            "name_es": "Menú QR para Cafeterías", "desc_es": "Menú accesible mediante código QR, controlable 24/7 desde cualquier dispositivo.",
            "name_ar": "قائمة QR للمقاهي", "desc_ar": "قائمة يمكن الوصول إليها عبر رمز QR، ويمكن التحكم فيها على مدار الساعة من أي جهاز.",
            "name_pt": "Menu QR para Cafés", "desc_pt": "Menu acessível via código QR, controlável 24/7 a partir de qualquer dispositivo.",
            "name_fr": "Menu QR pour Café", "desc_fr": "Menu accessible via code QR, contrôlable 24/7 depuis n'importe quel appareil.",
            "name_ru": "QR-меню для кафе", "desc_ru": "Меню, доступное по QR-коду, с возможностью управления 24/7 с любого устройства.",
            "name_ja": "カフェ向けQRメニュー", "desc_ja": "QRコードでアクセス可能なメニューで、あらゆるデバイスから24時間365日管理可能。",
            "name_de": "QR-Menü für Cafés", "desc_de": "Ein über QR-Code zugängliches Menü, das rund um die Uhr von jedem Gerät aus steuerbar ist.",
            "name_it": "Menu QR per Caffè", "desc_it": "Menu accessibile tramite codice QR, controllabile 24/7 da qualsiasi dispositivo.",
            "desc_en": "A menu accessible via QR code, controllable 24/7 from any device.",
            "desc_tr": "Karekodla açılan, 7/24 her cihazdan kontrol edebileceğiniz menü.",
            "img_url": "src/PROJECTS/cafe_menu.png"
        },
        {
            "id": "nexyond_digital",
            "name_en": "Nexyond Digital Platform",
            "name_tr": "Nexyond Digital Platform",
            "name_zh": "Nexyond 数字平台", "desc_zh": "我们按照现代 UI/UX 标准构建自身数字形象的高性能网络平台。",
            "name_hi": "Nexyond डिजिटल प्लेटफॉर्म", "desc_hi": "उच्च प्रदर्शन वाला वेब प्लेटफॉर्म जहां हमने आधुनिक UI/UX मानकों के साथ अपनी डिजिटल पहचान बनाई है।",
            "name_es": "Plataforma Digital Nexyond", "desc_es": "Plataforma web de alto rendimiento donde construimos nuestra identidad digital con estándares modernos de UI/UX.",
            "name_ar": "منصة Nexyond الرقمية", "desc_ar": "منصة ويب عالية الأداء بنينا عليها هويتنا الرقمية بمعايير UI/UX حديثة.",
            "name_pt": "Plataforma Digital Nexyond", "desc_pt": "Plataforma web de alto desempenho onde construímos nossa própria identidade digital com padrões modernos de UI/UX.",
            "name_fr": "Plateforme Digitale Nexyond", "desc_fr": "Plateforme web haute performance où nous avons construit notre identité numérique selon les standards UI/UX modernes.",
            "name_ru": "Цифровая платформа Nexyond", "desc_ru": "Высокопроизводительная веб-платформа, на которой мы создали свой имидж по стандартам UI/UX.",
            "name_ja": "Nexyond デジタルプラットフォーム", "desc_ja": "最新のUI/UX標準で独自のデジタルアイデンティティを構築した高性能ウェブプラットフォーム。",
            "name_de": "Nexyond Digitale Plattform", "desc_de": "Die Hochleistungs-Webplattform, auf der wir unsere eigene digitale Identität mit modernen UI/UX-Standards aufgebaut haben.",
            "name_it": "Piattaforma Digitale Nexyond", "desc_it": "Piattaforma web ad alte prestazioni dove abbiamo costruito la nostra identità digitale con standard UI/UX moderni.",
            "desc_en": "The high-performance web platform where we built our own digital identity with modern UI/UX standards.",
            "desc_tr": "Kendi dijital kimliğimizi inşa ettiğimiz, modern UI/UX standartlarında yüksek performanslı web platformu.",
            "img_url": "src/PROJECTS/nexyond_web.png"
        },
        {
            "id": "kaplanlar_db",
            "name_en": "Kaplanlar Stock Management",
            "name_tr": "Kaplanlar Stok & Yönetim",
            "name_zh": "Kaplanlar 库存管理", "desc_zh": "可加速业务流程的实时库存跟踪和生产管理面板。",
            "name_hi": "Kaplanlar स्टॉक प्रबंधन", "desc_hi": "वास्तविक समय स्टॉक ट्रैकिंग और उत्पादन प्रबंधन पैनल जो व्यावसायिक प्रक्रियाओं को तेज करता है।",
            "name_es": "Gestión de Stock Kaplanlar", "desc_es": "Panel de gestión de producción y seguimiento de stock en tiempo real que acelera los procesos comerciales.",
            "name_ar": "كابلانلار لإدارة المخزون", "desc_ar": "لوحة تتبع المخزون وإدارة الإنتاج في الوقت الفعلي التي تسرع عمليات العمل.",
            "name_pt": "Gestão de Stock Kaplanlar", "desc_pt": "Painel de gestão de produção e acompanhamento de stock em tempo real que acelera os processos de negócio.",
            "name_fr": "Gestion de Stock Kaplanlar", "desc_fr": "Panneau de gestion de production et suivi de stock en temps réel qui accélère les processus métier.",
            "name_ru": "Kaplanlar Управление запасами", "desc_ru": "Панель отслеживания запасов и управления производством в реальном времени для ускорения бизнес-процессов.",
            "name_ja": "Kaplanlar 在庫管理", "desc_ja": "ビジネスプロセスを加速させる、リアルタイムの在庫追跡および生産管理パネル。",
            "name_de": "Kaplanlar Lagerverwaltung", "desc_de": "Echtzeit-Lagerverfolgung und Produktionsmanagement-Panel, das Geschäftsprozesse beschleunigt.",
            "name_it": "Kaplanlar Gestione Magazzino", "desc_it": "Pannello di gestione della produzione e tracciamento dello stock in tempo reale che accelera i processi aziendali.",
            "desc_en": "A real-time stock tracking and production management panel that accelerates business processes.",
            "desc_tr": "İşletme süreçlerini hızlandıran, gerçek zamanlı stok takibi ve üretim yönetim paneli.",
            "img_url": "src/PROJECTS/kaplanlar_db.png"
        },
        {
            "id": "flowart_db",
            "name_en": "Flowart Business Management",
            "name_tr": "Flowart İş Yönetimi",
            "name_zh": "Flowart 业务管理", "desc_zh": "为 Flowart 开发的专注于数据分析和流程跟踪的定制软件解决方案。",
            "name_hi": "Flowart बिजनेस मैनेजमेंट", "desc_hi": "Flowart के लिए विकसित डेटा एनालिटिक्स और प्रोसेस ट्रैकिंग पर केंद्रित एक कस्टम सॉफ़्टवेयर समाधान।",
            "name_es": "Gestión Empresarial Flowart", "desc_es": "Solución de software personalizada centrada en el análisis de datos y seguimiento de procesos para Flowart.",
            "name_ar": "إدارة أعمال Flowart", "desc_ar": "حل برمجيات مخصص يركز على تحليلات البيانات وتتبع العمليات تم تطويره لـ Flowart.",
            "name_pt": "Gestão de Negócios Flowart", "desc_pt": "Solução de software personalizada focada em análise de dados e acompanhamento de processos para a Flowart.",
            "name_fr": "Gestion d'Entreprise Flowart", "desc_fr": "Solution logicielle personnalisée axée sur l'analyse de données et le suivi de processus pour Flowart.",
            "name_ru": "Flowart Управление бизнесом", "desc_ru": "Индивидуальное программное решение для Flowart, ориентированное на аналитику данных и отслеживание процессов.",
            "name_ja": "Flowart 業務管理", "desc_ja": "Flowart向けに開発された、データ分析とプロセス追跡に焦点を当てたカスタムソフトウェアソリューション。",
            "name_de": "Flowart Unternehmensmanagement", "desc_de": "Eine für Flowart entwickelte maßgeschneiderte Softwarelösung mit Fokus auf Datenanalyse und Prozessverfolgung.",
            "name_it": "Flowart Gestione Aziendale", "desc_it": "Soluzione software personalizzata focalizzata sull'analisi dei dati e sul tracciamento dei processi per Flowart.",
            "desc_en": "A custom software solution focused on data analytics and process tracking developed for Flowart.",
            "desc_tr": "Flowart için geliştirilen, veri analitiği ve süreç takibi odaklı özel yazılım çözümü.",
            "img_url": "src/PROJECTS/flowart_db.png"
        },
        {
            "id": "cafe_app",
            "name_en": "Cafe De La Rosa Mobile",
            "name_tr": "Cafe De La Rosa Mobil",
            "name_zh": "Cafe De La Rosa 移动端", "desc_zh": "提供快速订餐和忠诚度计划集成的现代咖啡馆体验移动应用。",
            "name_hi": "Cafe De La Rosa मोबाइल", "desc_hi": "तेज़ ऑर्डरिंग और लॉयल्टी प्रोग्राम एकीकरण के साथ आधुनिक कैफे अनुभव प्रदान करने वाला एक मोबाइल एप्लिकेशन।",
            "name_es": "Cafe De La Rosa Móvil", "desc_es": "Aplicación móvil que ofrece una experiencia de café moderna con pedidos rápidos e integración de programas de lealtad.",
            "name_ar": "تطبيق كافيه دي لا روزا", "desc_ar": "تطبيق جوال يقدم تجربة مقهى حديثة مع طلب سريع وتكامل برامج الولاء.",
            "name_pt": "Cafe De La Rosa Móvel", "desc_pt": "Aplicação móvel que oferece uma experiência de café moderna com pedidos rápidos e integração de programas de fidelização.",
            "name_fr": "Cafe De La Rosa Mobile", "desc_fr": "Application mobile offrant une expérience de café moderne avec commande rapide et programme de fidélité.",
            "name_ru": "Cafe De La Rosa Мобильное", "desc_ru": "Приложение для кафе с возможностью быстрого заказа и программой лояльности.",
            "name_ja": "Cafe De La Rosa モバイル", "desc_ja": "迅速な注文とロイヤリティプログラムの統合により、モダンなカフェ体験を提供するモバイルアプリ。",
            "name_de": "Cafe De La Rosa Mobil", "desc_de": "Eine mobile Anwendung, die ein modernes Café-Erlebnis mit schneller Bestellung und Treueprogramm-Integration bietet.",
            "name_it": "Cafe De La Rosa Mobile", "desc_it": "Applicazione mobile che offre una moderna esperienza di caffè con ordinazione rapida e programmi fedeltà.",
            "desc_en": "A mobile application offering a modern cafe experience with fast ordering and loyalty program integration.",
            "desc_tr": "Hızlı sipariş ve sadakat programı entegrasyonuna sahip, modern kafe deneyimi sunan mobil uygulama.",
            "img_url": "src/PROJECTS/cafe_app.png"
        }
    ]
}

const translationsData = {
  "tr": {
    "nav_vision": "VİZYON",
    "nav_services": "HİZMETLER",
    "nav_process": "SÜREÇ",
    "nav_contact": "İLETİŞİM",
    "nav_cta": "Hemen Başla",
    "hero_status": "SİSTEMLER AKTİF",
    "hero_title_1": "İşinizi Dijitalin",
    "hero_title_2": "Zirvesine Taşıyın.",
    "hero_desc": "Web sitesi, mobil uygulama veya dijital kartvizit... Rakiplerinizin önüne geçmek için ihtiyacınız olan her şeyi tasarlıyor ve kodluyoruz.",
    "cta_main": "Teklif Alın",
    "cta_sec": "Hizmetlerimiz",
    "cta_mailto": "Hemen Başlayın (Teklif Alın)",
    "vision_title": "Geleneksel Kalma,<br><span class='text-gradient-blue'>Geleceğe Odaklan.</span>",
    "vision_desc_1": "Eski usül ticaret yöntemleri yavaş yavaş kayboluyor. Müşterileriniz artık sizi telefonda, Google'da veya sosyal medyada arıyor. Fiziksel ofis sınırlarını kaldırarak, AI gücüyle işlerinizi ışık hızında dijitale taşıyoruz.",
    "vision_desc_2": "Eğer internette yoksanız, müşterileriniz için de yoksunuz demektir. Nexyond olarak sizi dijital dünyada görünür, ulaşılabilir ve prestijli kılıyoruz.",
    "vision_point_1": "7/24 Açık Dükkan (Web Sitesi)",
    "vision_point_2": "Milyonlara Ulaşan Reklamlar",
    "vision_point_3": "Kağıt Masrafsız Dijital Çözümler",
    "vision_card_title": "Dijital Dönüşüm",
    "vision_card_desc": "Fiziksel sınırları kaldırın. Dünyanın her yerinden müşteri edinin.",
    "services_title": "Neler Yapıyoruz?",
    "services_subtitle": "İşletmenizin ihtiyacı olan tüm dijital araçlar tek çatı altında.",
    "svc_web_title": "Web Sitesi Tasarımı & Kurulumu",
    "svc_web_desc": "Müşterileriniz sizi Google'da aradığında profesyonel bir vitrinle karşılaşsın. Kurumsal siteler, bloglar veya ürün tanıtım sayfaları. Hızlı, şık ve tüm telefonlara uyumlu.",
    "svc_qr_title": "Dijital Kartvizit (NFC & QR)",
    "svc_qr_desc": "Temassız NFC teknolojisi ve QR kod ile bilgilerinizi saniyeler içinde paylaşın. Kağıt israfına son verin.",
    "tag_popular": "ÇOK POPÜLER",
    "svc_app_title": "Mobil Uygulama (App)",
    "svc_app_desc": "Fikrinizi cebinize sığdırıyoruz. iOS (iPhone) ve Android için size özel, hızlı çalışan uygulamalar yapıyoruz.",
    "svc_logo_title": "Logo & Marka Kimliği",
    "svc_logo_desc": "Akılda kalıcı bir logo ve kurumsal renkler tasarlıyoruz. Müşterileriniz sizi ilk görüşte tanısın.",
    "svc_content_title": "AI İçerik & Sosyal Medya",
    "svc_content_desc": "Yapay zeka ile profesyonel fotoğraflar, Instagram gönderileri ve marka içerikleri oluşturuyoruz. Sosyal medya hesaplarınızı canlandırıyoruz.",
    "svc_auto_title": "E-Ticaret & İş Otomasyonu",
    "svc_auto_desc": "İnternetten ürün satın veya işlerinizi robotlara bırakın. Stok takibi, müşteri kaydı, otomatik WhatsApp mesajları gibi sıkıcı işleri yazılımlarımız yapsın.",
    "svc_gumroad_title": "Hazır Dijital Ürünler",
    "svc_gumroad_desc": "E-Kitaplar, hazır fotoğraf setleri, sosyal medya şablonları gibi işinize hemen yarayacak yüzlerce ürüne ulaşın.",
    "svc_gumroad_cta": "Tüm Ürünleri İncele →",
    "process_title": "Nasıl Çalışıyoruz?",
    "step_1_title": "Tanışma & Fikir",
    "step_1_desc": "Sizi dinliyoruz. Neye ihtiyacınız olduğunu (Site mi? Kartvizit mi?) belirliyoruz.",
    "step_2_title": "Tasarım & Yapım",
    "step_2_desc": "Sizin onayınıza göre tasarımı hazırlıyor ve kodlamasını yapıyoruz.",
    "step_3_title": "Teslim & Destek",
    "step_3_desc": "İşinizi teslim ediyoruz ve kullanımını öğretiyoruz. Takıldığınız yerde destek oluyoruz.",
    "footer_tagline": "İşinizi büyütmek için gereken tüm dijital çözümler burada.",
    "footer_links_title": "Hızlı Bağlantılar",
    "footer_link_services": "Hizmetlerimiz",
    "footer_link_process": "Çalışma Sürecimiz",
    "footer_link_contact": "İletişim",
    "assist_header": "Nexyond Dijital Asistan",
    "assist_initial": "Merhaba! Ben Nexyond Asistan. Diğerlerinin 4 haftada bitiremediği projeleri biz yeni nesil iş akışımızla 1-2 günde teslim ediyoruz. Hızımıza nereden başlamak istersin?",
    "assist_opt_web": "Hızlı Web Sitesi (24-48 Saat)",
    "assist_opt_card": "Dijital Kartvizit",
    "assist_opt_app": "Mobil Uygulama",
    "assist_opt_logo": "Marka Tasarımı",
    "assist_opt_content": "Hızlı İçerik Üretimi",
    "assist_opt_price": "Süre & Teslimat",
    "assist_opt_why": "Neden Nexyond?",
    "assist_opt_quality": "Hız Kaliteyi Etkiler mi?",
    "assist_opt_contact": "İletişime Geç",
    "assist_res_web": "Web sitesi bir dükkanın dijital şubesidir ama biz bu şubeyi kurarken sizi haftalarca bekletmiyoruz. En güncel teknolojilerle, Google uyumlu ve yüksek dönüşümlü sitenizi 2 gün içinde yayına alıyoruz.",
    "assist_res_kartvizit": "Dijital Kartvizit ile tanışın: QR kod teknolojisiyle saniyeler içinde rehbere eklenin. Kağıt israfını bitiren, prestijli ve 10 kat daha hızlı networking çözümü.",
    "assist_res_app": "Fikirlerinizi iOS ve Android platformlarına ışık hızında taşıyoruz. Karmaşık süreçleri optimize ederek, profesyonel mobil uygulamanızı günler içinde test sürüşüne hazır hale getiriyoruz.",
    "assist_res_logo": "Marka kimliğinizi oluştururken günlerce revizyon beklemenize gerek yok. Modern, akılda kalıcı ve sektörünüze yön verecek tasarımları yeni nesil tasarım vizyonumuzla hızla tamamlıyoruz.",
    "assist_res_content": "Markanızın dijital dünyada saniyeler içinde fark edilmesi gerekir. Sosyal medya içeriklerinizi ve SEO stratejilerinizi, rakipleriniz planlama aşamasındayken biz yayına hazır hale getiriyoruz. 10x üretim gücümüzle her zaman bir adım öndesiniz.",
    "assist_res_fiyat": "Fiyatlarımız projenin kapsamına göre belirlenir ancak hızımız sayesinde 'operasyonel maliyet' avantajını size yansıtıyoruz. Diğerlerinin 3 haftada yaptığı işin maliyetiyle, bizim 2 günde sunduğumuz verimlilik kıyaslanamaz.",
    "assist_res_why": "Çünkü biz 2026 standartlarında çalışıyoruz. Geleneksel ajanslar eski usul süreçlerle vakit kaybederken, biz optimize edilmiş dijital iş akışlarımızla projeleri 10 kat daha hızlı tamamlıyoruz.",
    "assist_res_quality": "Kesinlikle hayır. Hızımız acele etmemizden değil, süreçleri mükemmel şekilde optimize etmemizden geliyor. Her proje, teslim edilmeden önce kalite standartlarımıza göre 3 aşamalı kontrolden geçer.",
    "assist_res_contact": "Harekete geçmek için en doğru zaman şimdi. nexyond@gmail.com üzerinden veya form aracılığıyla bize ulaşın, hemen bugün başlayalım!",
    "stat_customers": "Müşteri Artışı",
    "stat_response": "Saat Tepki",
    "stat_projects": "Proje Teslim",
    "stat_satisfaction": "Memnuniyet",
    "work_title": "Vizyoner Projeler",
    "work_subtitle": "Nexyond Lab'da hazırlanan dijital konsept çalışmalarımız.",
    "lab_title": "Hazır Ürünlerimiz",
    "nav_lab": "ÜRÜNLERİMİZ",
    "lab_subtitle": "Özel paketlerimizle dijital varlığınızı hemen oluşturun.",
    "lab_solution_01": "QR Dijital Menü",
    "lab_solution_02": "QR, NFC Destekli Dijital Kartvizit",
    "lab_inspect": "İncele ↗",
    "lab_menu_title": "QR Dijital Menü",
    "lab_menu_desc": "İşletmeniz için 6 farklı profesyonel paketten oluşan, temassız ve hızlı QR menü sistemleri.",
    "lab_card_title": "Dijital Kartvizit",
    "lab_card_desc": "3 farklı modern paket seçeneğiyle, kurumsal kimliğinizi QR veya NFC ile dijital dünyaya taşıyın.",
    "lab_01": "6 PAKET",
    "lab_02": "QR Entegrasyonu",
    "lab_03": "Canlı Demo",
    "lab_11": "3 PAKET",
    "lab_12": "QR & NFC Entegrasyonu",
    "lab_13": "Yeni Nesil"
  },
  "en": {
    "stat_customers": "Customer Growth",
    "stat_response": "Hour Response",
    "stat_projects": "Projects Delivered",
    "stat_satisfaction": "Satisfaction",
    "nav_vision": "VISION",
    "nav_services": "SERVICES",
    "nav_process": "PROCESS",
    "nav_contact": "CONTACT",
    "nav_cta": "Get Started",
    "hero_status": "SYSTEMS ONLINE",
    "hero_title_1": "Forge Your",
    "hero_title_2": "Digital Destiny.",
    "hero_desc": "Websites, mobile apps, or digital business cards... We design and code everything you need to stay ahead of the competition.",
    "cta_main": "Get a Quote",
    "cta_sec": "Our Services",
    "cta_mailto": "Get Started (Request Quote)",
    "vision_title": "Adapt or Fade,<br><span class='text-gradient-blue'>Evolve Now.</span>",
    "vision_desc_1": "Traditional business methods are fading. Your customers look for you online. We move your business to digital at light speed using AI power.",
    "vision_desc_2": "If you aren't online, you don't exist. Nexyond makes you visible, accessible, and prestigious.",
    "vision_point_1": "24/7 Open Store (Website)",
    "vision_point_2": "Reach Millions with Ads",
    "vision_point_3": "Paperless Digital Solutions",
    "vision_card_title": "Digital Shift",
    "vision_card_desc": "Remove physical limits. Acquire customers globally.",
    "services_title": "What We Do",
    "services_subtitle": "All the digital tools your business needs under one roof.",
    "svc_web_title": "Web Design & Development",
    "svc_web_desc": "High-performance, SEO-optimized, and modern web experiences that look flawless on every device.",
    "svc_app_title": "Mobile App Solutions",
    "svc_app_desc": "Turning ideas into portable technology. High-speed, UX-focused apps for iOS and Android.",
    "svc_auto_title": "E-Commerce & Automation",
    "svc_auto_desc": "Automate your sales and operations. Smart systems that grow your business even while you sleep.",
    "svc_qr_title": "Digital Business Card (NFC & QR)",
    "svc_qr_desc": "Modernize your networking. Share your info with a single tap; save costs and maintain prestige.",
    "svc_logo_title": "Brand Identity & Logo Design",
    "svc_logo_desc": "Give your brand a soul. We create corporate palettes and visual identities that connect.",
    "svc_content_title": "AI-Powered Content & Strategy",
    "svc_content_desc": "Stand out on social media with the power of AI. We make your brand visible through data-driven content.",
    "svc_gumroad_title": "Ready-Made Digital Products",
    "svc_gumroad_desc": "Access hundreds of digital products you can use immediately for your business.",
    "svc_gumroad_cta": "View All Products →",
    "process_title": "How We Work",
    "step_1_title": "Meet & Plan",
    "step_1_desc": "We listen to you. We determine exactly what you need.",
    "step_2_title": "Design & Build",
    "step_2_desc": "We prepare the design and code it based on your approval.",
    "step_3_title": "Launch & Support",
    "step_3_desc": "We deliver the project and provide support whenever you need it.",
    "footer_tagline": "All digital solutions to grow your business are here.",
    "footer_links_title": "Quick Links",
    "footer_link_services": "Our Services",
    "footer_link_process": "Our Process",
    "footer_link_contact": "Contact",
    "assist_header": "Nexyond Digital Assistant",
    "assist_initial": "Hello! I'm Nexyond Assistant. We deliver projects that others can't finish in 4 weeks in 1-2 days with our new generation workflow. Where would you like to start with our speed?",
    "assist_opt_web": "Fast Website (24-48 Hours)",
    "assist_opt_card": "Digital Business Card",
    "assist_opt_app": "Mobile Application",
    "assist_opt_logo": "Brand Design",
    "assist_opt_content": "Fast Content Creation",
    "assist_opt_price": "Time & Delivery",
    "assist_opt_why": "Why Nexyond?",
    "assist_opt_quality": "Does Speed ​​Affect Quality?",
    "assist_opt_contact": "Contact Us",
    "assist_res_web": "A website is a digital branch of a shop, but we don't keep you waiting for weeks while building it. We launch your Google-compatible, high-conversion site with the latest technologies within 2 days.",
    "assist_res_businesscard": "Meet Digital Business Cards: Add to your contacts in seconds with QR code technology. A prestigious and 10 times faster networking solution that eliminates paper waste.",
    "assist_res_app": "We bring your ideas to iOS and Android platforms at lightning speed. By optimizing complex processes, we get your professional mobile application ready for test drives in days.",
    "assist_res_logo": "You don't need to wait for days for revisions when creating your brand identity. We quickly complete modern, memorable, and industry-leading designs with our next-generation design vision.",
    "assist_res_content": "Your brand needs to be noticed in seconds in the digital world. We get your social media content and SEO strategies ready for publication while your competitors are still in the planning stage. With our 10x production power, you're always one step ahead.",
    "assist_res_fiyat": "Our prices are determined according to the scope of the project, but thanks to our speed, we pass on the 'operational cost' advantage to you. The cost of work that others do in 3 weeks is incomparable to the efficiency we deliver in 2 days.",
    "assist_res_why": "Because we work according to 2026 standards. While traditional agencies waste time with outdated processes, we complete projects 10 times faster with our optimized digital workflows.",
    "assist_res_quality": "Absolutely not. Our speed doesn't come from rushing, but from perfectly optimizing our processes. Every project undergoes a 3-stage quality control check according to our quality standards before delivery.",
    "assist_res_contact": "Now is the perfect time to act. Contact us via nexyond@gmail.com or through the form, and let's get started today!",
    "work_title": "Visionary Projects",
    "work_subtitle": "Concept works prepared in Nexyond lab, setting digital trends.",
    "lab_title": "Our Ready-Made Products",
    "nav_lab": "PRODUCTS",
    "lab_subtitle": "Create your digital presence immediately with our special packages.",
    "lab_solution_01": "QR Digital Menu",
    "lab_solution_02": "QR, NFC Supported Digital Business Card",
    "lab_inspect": "Inspect ↗",
    "lab_menu_title": "QR Digital Menu",
    "lab_menu_desc": "Contactless and fast QR menu systems consisting of 6 different professional packages for your business.",
    "lab_card_title": "Digital Business Card",
    "lab_card_desc": "Take your corporate identity to the digital world with QR or NFC with 3 different modern package options.", "lab_01": "6 PACKAGES",
    "lab_02": "QR Integration",
    "lab_03": "Live Demo",
    "lab_11": "3 PACKAGE",
    "lab_12": "QR & NFC Integration", "lab_13": "Next Generation"    
  },
  "ru": {
    "nav_vision": "ВИДЕНИЕ",
    "nav_services": "УСЛУГИ",
    "nav_process": "ПРОЦЕСС",
    "nav_contact": "КОНТАКТЫ",
    "nav_cta": "Начать",
    "hero_status": "СИСТЕМЫ АКТИВНЫ",
    "hero_title_1": "Ваш бизнес на",
    "hero_title_2": "пике цифровых технологий.",
    "hero_desc": "Веб-сайты, мобильные приложения или цифровые визитки... Мы проектируем и кодируем всё необходимое, чтобы вы опережали конкурентов.",
    "cta_main": "Получить предложение",
    "cta_sec": "Наши услуги",
    "cta_mailto": "Начать (Запросить предложение)",
    "vision_title": "Адаптируйся или исчезни,<br><span class='text-gradient-blue'>развивайся сейчас.</span>",
    "vision_desc_1": "Традиционные методы бизнеса уходят в прошлое. Мы переводим ваш бизнес в цифровой формат со скоростью света, используя возможности ИИ.",
    "vision_desc_2": "Если вас нет в интернете, вас не существует. Nexyond делает вас заметными, доступными и престижными.",
    "vision_point_1": "Магазин 24/7 (Веб-сайт)",
    "vision_point_2": "Реклама на миллионы",
    "vision_point_3": "Безбумажные решения",
    "vision_card_title": "Цифровой сдвиг",
    "vision_card_desc": "Уберите границы. Привлекайте клиентов по всему миру.",
    "services_title": "Что мы делаем?",
    "services_subtitle": "Все цифровые инструменты под одной крышей.",
    "svc_web_title": "Веб-дизайн и разработка",
    "svc_web_desc": "Профессиональная витрина в Google. Быстрые, стильные и адаптивные сайты.",
    "svc_qr_title": "Цифровая визитка (NFC и QR)",
    "svc_qr_desc": "Делитесь данными за секунды. Забудьте о бумажных отходах.",
    "tag_popular": "ПОПУЛЯРНО",
    "svc_app_title": "Мобильное приложение",
    "svc_app_desc": "Ваша идея в кармане клиента. Индивидуальные приложения для iOS и Android.",
    "svc_logo_title": "Логотип и стиль",
    "svc_logo_desc": "Создаем запоминающийся образ, который узнают с первого взгляда.",
    "svc_content_title": "ИИ Контент и Соцсети",
    "svc_content_desc": "Создаем контент и управляем соцсетями с помощью искусственного интеллекта.",
    "svc_auto_title": "E-commerce и автоматизация",
    "svc_auto_desc": "Пусть роботы занимаются рутиной: склад, заказы и авто-сообщения.",
    "svc_gumroad_title": "Готовые цифровые продукты",
    "svc_gumroad_desc": "Сотни продуктов, готовых к немедленному использованию.",
    "svc_gumroad_cta": "Все продукты →",
    "process_title": "Как мы работаем?",
    "step_1_title": "Встреча и идея",
    "step_1_desc": "Мы слушаем вас и определяем ваши потребности.",
    "step_2_title": "Дизайн и создание",
    "step_2_desc": "Готовим дизайн и пишем код после вашего одобрения.",
    "step_3_title": "Запуск и поддержка",
    "step_3_desc": "Сдаем проект и обучаем вас работе с ним.",
    "footer_tagline": "Все цифровые решения для роста вашего бизнеса здесь.",
    "footer_links_title": "Быстрые ссылки",
    "footer_link_services": "Наши услуги",
    "footer_link_process": "Наш процесс",
    "footer_link_contact": "Контакты",
    "assist_header": "Цифровой ассистент Nexyond",
    "assist_initial": "Здравствуйте! Я Nexyond Assistant. Мы выполняем проекты, которые другие не могут завершить за 4 недели, за 1-2 дня благодаря нашему рабочему процессу нового поколения. С чего бы вы хотели начать, учитывая нашу скорость?",
    "assist_opt_web": "Быстрый веб-сайт (24-48 часов)",
    "assist_opt_card": "Цифровая визитная карточка",
    "assist_opt_app": "Мобильное приложение",
    "assist_opt_logo": "Дизайн бренда",
    "assist_opt_content": "Быстрое создание контента",
    "assist_opt_price": "Время и доставка",
    "assist_opt_why": "Почему Nexyond?",
    "assist_opt_quality": "Влияет ли скорость на качество?",
    "assist_opt_contact": "Контакты Мы",
    "assist_res_web": "Веб-сайт — это цифровое отделение магазина, но мы не заставляем вас ждать неделями, пока он создается. Мы запускаем ваш сайт, совместимый с Google и обеспечивающий высокую конверсию, с использованием новейших технологий в течение 2 дней.",
    "assist_res_businesscard": "Познакомьтесь с цифровыми визитными карточками: добавляйте контакты за считанные секунды с помощью технологии QR-кодов. Престижное и в 10 раз более быстрое решение для налаживания деловых связей, которое исключает бумажные отходы.",
    "assist_res_app": "Мы молниеносно воплощаем ваши идеи на платформах iOS и Android. Оптимизируя сложные процессы, мы готовим ваше профессиональное мобильное приложение к тестированию за считанные дни.",
    "assist_res_logo": "Вам не нужно ждать несколько дней для внесения изменений при создании фирменного стиля. Мы быстро создаем современные, запоминающиеся и лучшие в отрасли дизайны с нашим видением дизайна нового поколения.",
    "assist_res_content": "Ваш бренд должен быть замечен за считанные секунды в цифровом мире. Мы подготовим ваш контент для социальных сетей и SEO-стратегии к публикации, пока ваши конкуренты еще находятся в…» Этап планирования. Благодаря нашей десятикратной производственной мощности вы всегда на шаг впереди.",
    "assist_res_fiyat": "Наши цены определяются в зависимости от масштаба проекта, но благодаря нашей скорости мы передаем вам преимущество в «операционных затратах». Стоимость работы, которую другие выполняют за 3 недели, несравнима с эффективностью, которую мы обеспечиваем за 2 дня.",
    "assist_res_why": "Потому что мы работаем по стандартам 2026 года. В то время как традиционные агентства тратят время на устаревшие процессы, мы завершаем проекты в 10 раз быстрее благодаря нашим оптимизированным цифровым рабочим процессам.",
    "assist_res_quality": "Абсолютно нет. Наша скорость достигается не за счет спешки, а за счет идеальной оптимизации наших процессов. Каждый проект проходит трехэтапную проверку качества в соответствии с нашими стандартами качества перед сдачей.",
    "assist_res_contact": "Сейчас самое время действовать. Свяжитесь с нами по электронной почте nexyond@gmail.com или через форму обратной связи, и давайте начнем прямо сегодня!",
    "stat_customers": "Рост клиентов",
    "stat_response": "Часов ответа",
    "stat_projects": "Проектов сдано",
    "stat_satisfaction": "Удовлетворенность",
    "work_title": "Визионерские проекты",
    "work_subtitle": "Концептуальные работы, созданные в Nexyond Lab.",
    "lab_title": "Наши готовые продукты",
    "nav_lab": "ПРОДУКТЫ",
    "lab_subtitle": "Создайте свое цифровое присутствие мгновенно с помощью наших специальных пакетов.",
    "lab_solution_01": "Цифровое меню с QR",
    "lab_solution_02": "Цифровая визитная карточка с поддержкой QR и NFC",
    "lab_inspect": "Проверить ↗",
    "lab_menu_title": "Цифровое меню с QR",
    "lab_menu_desc": "Бесконтактные и быстрые системы меню с QR, состоящие из 6 различных профессиональных пакетов для вашего бизнеса.",
    "lab_card_title": "Цифровая визитная карточка",
    "lab_card_desc": "Перенесите свою корпоративную идентичность в цифровой мир с помощью QR или NFC, выбрав один из 3 современных пакетов.",
    "lab_01": "6 ПАКЕТОВ",
    "lab_02": "Интеграция QR",
    "lab_03": "Демонстрация в реальном времени",
    "lab_11": "3 ПАКЕТА",
    "lab_12": "Интеграция QR-кодов и NFC», «lab_13»: «Следующее поколение"
  },
  "zh": {
    "nav_vision": "愿景",
    "nav_services": "服务",
    "nav_process": "流程",
    "nav_contact": "联系",
    "nav_cta": "立即开始",
    "hero_status": "系统在线",
    "hero_title_1": "将您的业务",
    "hero_title_2": "推向数字化巅峰。",
    "hero_desc": "网站、移动应用或数字名片... 我们设计并编写您在竞争中保持领先所需的一切。",
    "cta_main": "获取报价",
    "cta_sec": "我们的服务",
    "cta_mailto": "立即开始（索取报价）",
    "vision_title": "适者生存，<br><span class='text-gradient-blue'>现在就进化。</span>",
    "vision_desc_1": "传统业务模式正在消失。我们利用人工智能的力量，以光速将您的业务转移到数字化领域。",
    "vision_desc_2": "如果您不在网上，您就不存在。Nexyond 让您变得可见、可及且享有盛誉。",
    "vision_point_1": "24/7 全天候商店（网站）",
    "vision_point_2": "触达数百万人的广告",
    "vision_point_3": "无纸化数字解决方案",
    "vision_card_title": "数字转型",
    "vision_card_desc": "打破物理限制。获取全球客户。",
    "services_title": "我们做什么？",
    "services_subtitle": "您企业所需的所有数字工具尽在一个屋檐下。",
    "svc_web_title": "网站设计与开发",
    "svc_web_desc": "当客户在谷歌上搜索您时，呈现专业的橱窗。快速、时尚且适配手机。",
    "svc_qr_title": "数字名片 (NFC & QR)",
    "svc_qr_desc": "秒速分享信息。告别纸张浪费。",
    "tag_popular": "热门选择",
    "svc_app_title": "移动应用 (App)",
    "svc_app_desc": "将您的创意装进兜里。为 iOS 和 Android 定制的高速应用。",
    "svc_logo_title": "标志与品牌形象",
    "svc_logo_desc": "设计令人难忘的标志，让客户一眼就能认出您。",
    "svc_content_title": "AI 内容与社交媒体",
    "svc_content_desc": "利用人工智能创作专业内容，让您的社交账号焕发活力。",
    "svc_auto_title": "电子商务与自动化",
    "svc_auto_desc": "将繁琐工作交给机器人，实现库存和客户自动跟进。",
    "svc_gumroad_title": "现成数字产品",
    "svc_gumroad_desc": "获取数百个可立即用于业务的数字产品。",
    "svc_gumroad_cta": "查看所有产品 →",
    "process_title": "我们如何工作？",
    "step_1_title": "会面与构思",
    "step_1_desc": "我们倾听您的需求，确定最佳方案。",
    "step_2_title": "设计与构建",
    "step_2_desc": "根据您的认可进行设计和编码。",
    "step_3_title": "交付与支持",
    "step_3_desc": "交付项目并提供持续支持。",
    "footer_tagline": "助力业务增长的所有数字解决方案都在这里。",
    "footer_links_title": "快速链接",
    "footer_link_services": "我们的服务",
    "footer_link_process": "工作流程",
    "footer_link_contact": "联系我们",
    "assist_header": "Nexyond 数字助理",
    "assist_initial": "您好！我是 Nexyond 助理。我们采用新一代工作流程，在 1-2 天内交付其他公司需要 4 周才能完成的项目。您想从哪里开始体验我们的速度？",
    "assist_opt_web": "快速网站（24-48 小时）",
    "assist_opt_card": "电子名片",
    "assist_opt_app": "移动应用",
    "assist_opt_logo": "品牌设计",
    "assist_opt_content": "快速内容创作",
    "assist_opt_price": "时间和交付",
    "assist_opt_why": "为什么选择 Nexyond？",
    "assist_opt_quality": "速度会影响质量吗？",
    "assist_opt_contact": "联系我们",
    "assist_res_web": "网站是商店的数字分支机构，但我们无需让您苦等数周才能完成网站建设。我们采用最新技术，仅需 2 天即可为您上线兼​​容 Google 且转化率极高的网站。",
    "assist_res_businesscard": "体验数字名片：使用二维码技术，几秒钟即可将名片添加到您的联系人。这是一种尊贵且速度提升 10 倍的社交解决方案，彻底告别纸张浪费。",
    "assist_res_app":"我们以闪电般的速度将您的创意移植到 iOS 和 Android 平台。通过优化复杂流程，我们只需几天即可让您的专业移动应用程序准备好进行测试。",
    "assist_res_logo":"创建品牌标识时，您无需等待数天进行修改。凭借我们新一代的设计理念，我们能够快速完成现代、令人印象深刻且行业领先的设计。",
    "assist_res_content":"在数字世界中，您的品牌需要在几秒钟内脱颖而出。当您的竞争对手还在规划阶段时，我们已经准备好您的社交媒体内容和 SEO 策略，随时可以发布。凭借我们 10 倍的制作能力，您始终领先一步。",
    "assist_res_fiyat":"我们的价格根据项目范围而定，但凭借我们的速度，我们将运营成本优势回馈给您。其他公司需要 3 周才能完成的工作，与我们 2 天就能交付的效率相比，简直天壤之别。",
    "assist_res_why":"因为我们按照 2026 年的标准工作。传统机构还在浪费时间使用过时的流程，而我们凭借优化的数字化工作流程，项目完成速度提高了 10 倍。",
    "assist_res_quality":"绝对不是。我们的速度并非来自赶工，而是来自流程的完美优化。每个项目在交付前都会根据我们的质量标准进行三阶段的质量控制检查。",
    "assist_res_contact":"现在是行动的最佳时机。请通过 nexyond@gmail.com 或填写表格联系我们，让我们今天就开始合作吧！",
    "stat_customers": "客户增长",
    "stat_response": "小时响应",
    "stat_projects": "项目交付",
    "stat_satisfaction": "满意度",
    "work_title": "前瞻性项目",
    "work_subtitle": "Nexyond Lab 创作的数字趋势概念作品。",
    "lab_title": "我们的现成产品",
    "nav_lab": "产品",
    "lab_subtitle": "使用我们的特惠套餐，立即打造您的数字化形象。",
    "lab_solution_01": "二维码数字菜单",
    "lab_solution_02": "支持二维码和NFC的数字名片",
    "lab_inspect": "查看 ↗",
    "lab_menu_title": "二维码数字菜单",
    "lab_menu_desc": "包含6种不同专业套餐的非接触式快速二维码菜单系统，满足您的企业需求。",
    "lab_card_title": "数字名片",
    "lab_card_desc": "使用二维码或NFC，通过3种不同的现代套餐选项，将您的企业形象带入数字世界。",
    "lab_01": "6种套餐",
    "lab_02": "二维码集成",
    "lab_03": "在线演示",
    "lab_11": "3种套餐",
    "lab_12": "二维码和NFC集成",
    "lab_13": "下一代"
  },
  "es": {
    "nav_vision": "VISIÓN",
    "nav_services": "SERVICIOS",
    "nav_process": "PROCESO",
    "nav_contact": "CONTACTO",
    "nav_cta": "Empezar",
    "hero_status": "SISTEMAS ACTIVOS",
    "hero_title_1": "Lleve su negocio",
    "hero_title_2": "a la cima digital.",
    "hero_desc": "Sitios web, aplicaciones móviles o tarjetas digitales... Diseñamos y programamos todo lo necesario para que esté por delante de la competencia.",
    "cta_main": "Pedir presupuesto",
    "cta_sec": "Servicios",
    "cta_mailto": "Empezar (Pedir presupuesto)",
    "vision_title": "Adáptate o desaparece,<br><span class='text-gradient-blue'>evoluciona ahora.</span>",
    "vision_desc_1": "Los métodos tradicionales están desapareciendo. Llevamos su negocio al mundo digital a la velocidad de la luz con IA.",
    "vision_desc_2": "Si no está en internet, no existe. Nexyond le hace visible, accesible y prestigioso.",
    "vision_point_1": "Tienda 24/7 (Sitio Web)",
    "vision_point_2": "Publicidad para millones",
    "vision_point_3": "Soluciones sin papel",
    "vision_card_title": "Cambio Digital",
    "vision_card_desc": "Elimine límites físicos. Consiga clientes globales.",
    "services_title": "¿Qué hacemos?",
    "services_subtitle": "Todas las herramientas digitales bajo un mismo techo.",
    "svc_web_title": "Diseño y Desarrollo Web",
    "svc_web_desc": "Un escaparate profesional en Google. Sitios rápidos, elegantes y adaptables.",
    "svc_qr_title": "Tarjeta Digital (NFC y QR)",
    "svc_qr_desc": "Comparta datos en segundos. Adiós al desperdicio de papel.",
    "tag_popular": "MUY POPULAR",
    "svc_app_title": "Aplicación Móvil",
    "svc_app_desc": "Su idea en el bolsillo. Apps personalizadas para iOS y Android.",
    "svc_logo_title": "Logo e Identidad",
    "svc_logo_desc": "Diseñamos una imagen memorable que sus clientes reconozcan al instante.",
    "svc_content_title": "Contenido IA y Redes",
    "svc_content_desc": "Creamos contenido profesional y gestionamos sus redes con IA.",
    "svc_auto_title": "E-commerce y Automatización",
    "svc_auto_desc": "Deje que los robots se encarguen de las tareas repetitivas.",
    "svc_gumroad_title": "Productos Digitales Listos",
    "svc_gumroad_desc": "Cientos de productos listos para usar de inmediato.",
    "svc_gumroad_cta": "Ver productos →",
    "process_title": "¿Cómo trabajamos?",
    "step_1_title": "Idea y Concepto",
    "step_1_desc": "Le escuchamos y determinamos lo que necesita.",
    "step_2_title": "Diseño y Creación",
    "step_2_desc": "Preparamos el diseño y lo programamos tras su aprobación.",
    "step_3_title": "Entrega y Apoyo",
    "step_3_desc": "Entregamos el proyecto y le enseñamos a usarlo.",
    "footer_tagline": "Todas las soluciones digitales para crecer están aquí.",
    "footer_links_title": "Enlaces rápidos",
    "footer_link_services": "Servicios",
    "footer_link_process": "Proceso",
    "footer_link_contact": "Contacto",
    "assist_header": "Asistente Digital Nexyond",
    "assist_initial": "¡Hola! Soy Asistente Nexyond. Entregamos proyectos que otros no pueden terminar en 4 semanas en 1 o 2 días con nuestro flujo de trabajo de nueva generación. ¿Por dónde te gustaría empezar con nuestra velocidad?",
    "assist_opt_web": "Sitio web rápido (24-48 horas)",
    "assist_opt_card": "Tarjeta de presentación digital",
    "assist_opt_app": "Aplicación móvil",
    "assist_opt_logo": "Diseño de marca",
    "assist_opt_content": "Creación rápida de contenido",
    "assist_opt_price": "Tiempo y entrega",
    "assist_opt_why": "¿Por qué Nexyond?",
    "assist_opt_quality": "¿La velocidad afecta la calidad?",
    "assist_opt_contact": "Contacto Nosotros",
    "assist_res_web": "Un sitio web es la sucursal digital de una tienda, pero no te hacemos esperar semanas mientras lo creamos. Lanzamos tu sitio web compatible con Google y de alta conversión con las últimas tecnologías en 2 días.",
    "assist_res_businesscard": "Descubre las Tarjetas de Presentación Digitales: Agrega a tus contactos en segundos con la tecnología de código QR. Una prestigiosa solución de redes 10 veces más rápida que elimina el desperdicio de papel.",
    "assist_res_app": "Llevamos tus ideas a las plataformas iOS y Android a la velocidad del rayo. Al optimizar procesos complejos, preparamos tu aplicación móvil profesional para pruebas en cuestión de días.",
    "assist_res_logo": "No necesitas esperar días para las revisiones al crear tu identidad de marca. Completamos rápidamente diseños modernos, memorables y líderes en la industria con nuestra visión de diseño de última generación.",
    "assist_res_content": "Tu marca necesita hacerse notar en segundos en el mundo digital. Preparamos tu contenido para redes sociales y estrategias de SEO para su publicación mientras tus competidores aún están en el mercado. Planificación. Con nuestra capacidad de producción 10 veces superior, siempre estará un paso por delante.",
    "assist_res_fiyat": "Nuestros precios se determinan según el alcance del proyecto, pero gracias a nuestra rapidez, le ofrecemos la ventaja del costo operativo. El costo del trabajo que otros realizan en 3 semanas es incomparable con la eficiencia que entregamos en 2 días.",
    "assist_res_why": "Porque trabajamos según los estándares 2026. Mientras que las agencias tradicionales pierden tiempo con procesos obsoletos, nosotros completamos proyectos 10 veces más rápido con nuestros flujos de trabajo digitales optimizados.",
    "assist_res_quality": "Para nada. Nuestra velocidad no se debe a las prisas, sino a la optimización perfecta de nuestros procesos. Cada proyecto se somete a un control de calidad de 3 etapas según nuestros estándares de calidad antes de la entrega.",
    "assist_res_contact": "Ahora es el momento perfecto para actuar. Contáctenos a través de nexyond@gmail.com o a través del formulario, ¡y comencemos hoy mismo!",
    "stat_customers": "Crecimiento",
    "stat_response": "Horas respuesta",
    "stat_projects": "Proyectos",
    "stat_satisfaction": "Satisfacción",
    "work_title": "Proyectos Visionarios",
    "work_subtitle": "Trabajos conceptuales creados en Nexyond Lab.",
    "lab_title": "Nuestros productos listos para usar",
    "nav_lab": "PRODUCTOS",
    "lab_subtitle": "Cree su presencia digital al instante con nuestros paquetes especiales.",
    "lab_solution_01": "Menú digital QR",
    "lab_solution_02": "Tarjeta de presentación digital compatible con QR y NFC",
    "lab_inspect": "Inspeccionar ↗",
    "lab_menu_title": "Menú digital QR",
    "lab_menu_desc": "Sistemas de menú QR rápidos y sin contacto con 6 paquetes profesionales diferentes para su negocio.",
    "lab_card_title": "Tarjeta de presentación digital",
    "lab_card_desc": "Lleve su identidad corporativa al mundo digital con QR o NFC con 3 opciones de paquetes modernos diferentes.", "lab_01": "6 PAQUETES",
    "lab_02": "Integración QR",
    "lab_03": "Demostración en vivo",
    "lab_11": "3 PAQUETES",
    "lab_12": "Integración QR y NFC", "lab_13": "Próxima generación"
  },
  "it": {
    "nav_vision": "VISIONE",
    "nav_services": "SERVIZI",
    "nav_process": "PROCESSO",
    "nav_contact": "CONTATTO",
    "nav_cta": "Inizia",
    "hero_status": "SISTEMI ATTIVI",
    "hero_title_1": "Porta il tuo business",
    "hero_title_2": "al vertice digitale.",
    "hero_desc": "Siti web, app mobili o biglietti da visita digitali... Progettiamo e programmiamo tutto ciò di cui hai bisogno per superare la concorrenza.",
    "cta_main": "Chiedi un preventivo",
    "cta_sec": "Servizi",
    "cta_mailto": "Inizia (Chiedi preventivo)",
    "vision_title": "Adattati o svanisci,<br><span class='text-gradient-blue'>evolvi ora.</span>",
    "vision_desc_1": "I metodi tradizionali stanno scomparendo. Portiamo la tua azienda nel digitale alla velocità della luce con l'IA.",
    "vision_desc_2": "Se non sei online, non esisti. Nexyond ti rende visibile, accessibile e prestigioso.",
    "vision_point_1": "Negozio 24/7 (Sito Web)",
    "vision_point_2": "Pubblicità per milioni",
    "vision_point_3": "Soluzioni senza carta",
    "vision_card_title": "Svolta Digitale",
    "vision_card_desc": "Rimuovi i limiti fisici. Ottieni clienti globali.",
    "services_title": "Cosa facciamo?",
    "services_subtitle": "Tutti gli strumenti digitali sotto lo stesso tetto.",
    "svc_web_title": "Design e Sviluppo Web",
    "svc_web_desc": "Una vetrina professionale su Google. Siti veloci, eleganti e adattabili.",
    "svc_qr_title": "Biglietto Digitale (NFC e QR)",
    "svc_qr_desc": "Condividi dati in pochi secondi. Basta sprechi di carta.",
    "tag_popular": "MOLTO POPOLARE",
    "svc_app_title": "Applicazione Mobile",
    "svc_app_desc": "La tua idea in tasca. App personalizzate per iOS e Android.",
    "svc_logo_title": "Logo e Identità",
    "svc_logo_desc": "Progettiamo un'immagine memorabile che i clienti riconoscono subito.",
    "svc_content_title": "Contenuti IA e Social",
    "svc_content_desc": "Creiamo contenuti professionali e gestiamo i tuoi social con l'IA.",
    "svc_auto_title": "E-commerce e Automazione",
    "svc_auto_desc": "Lascia che i robot si occupino dei compiti ripetitivi.",
    "svc_gumroad_title": "Prodotti Digitali Pronti",
    "svc_gumroad_desc": "Centinaia di prodotti pronti all'uso immediato.",
    "svc_gumroad_cta": "Vedi prodotti →",
    "process_title": "Come lavoriamo?",
    "step_1_title": "Idea e Concetto",
    "step_1_desc": "Ti ascoltiamo e determiniamo ciò di cui hai bisogno.",
    "step_2_title": "Design e Creazione",
    "step_2_desc": "Prepariamo il design e lo programmiamo dopo la tua approvazione.",
    "step_3_title": "Consegna e Supporto",
    "step_3_desc": "Consegniamo il progetto e ti insegniamo a usarlo.",
    "footer_tagline": "Tutte le soluzioni digitali per crescere sono qui.",
    "footer_links_title": "Link rapidi",
    "footer_link_services": "Servizi",
    "footer_link_process": "Processo",
    "footer_link_contact": "Contatto",
    "assist_header": "Assistente Digitale Nexyond",
    "assist_initial": "Ciao! Sono l'Assistente Nexyond. Consegniamo progetti che altri non riescono a completare in 4 settimane in 1-2 giorni grazie al nostro flusso di lavoro di nuova generazione. Da dove vorresti iniziare con la nostra velocità?",
    "assist_opt_web": "Sito web veloce (24-48 ore)",
    "assist_opt_card": "Biglietto da visita digitale",
    "assist_opt_app": "Applicazione mobile",
    "assist_opt_logo": "Design del marchio",
    "assist_opt_content": "Creazione di contenuti rapida",
    "assist_opt_price": "Tempi e consegna",
    "assist_opt_why": "Perché Nexyond?",
    "assist_opt_quality": "La velocità influisce sulla qualità?",
    "assist_opt_contact": "Contattaci",
    "assist_res_web": "Un sito web è una filiale digitale di un negozio, ma non ti facciamo aspettare settimane per realizzarla. Lanciamo il tuo sito compatibile con Google e ad alta conversione con le ultime tecnologie entro 2 giorni.",
    "assist_res_businesscard": "Scopri i biglietti da visita digitali: aggiungi i tuoi contatti in pochi secondi con la tecnologia del codice QR. Una soluzione di networking prestigiosa e 10 volte più veloce che elimina lo spreco di carta.",
    "assist_res_app": "Portiamo le tue idee su piattaforme iOS e Android alla velocità della luce. Ottimizzando processi complessi, realizziamo la tua applicazione mobile professionale pronta per i test drive in pochi giorni.",
    "assist_res_logo": "Non devi aspettare giorni per le revisioni quando crei l'identità del tuo marchio. Realizziamo rapidamente design moderni, memorabili e all'avanguardia con la nostra visione di design di nuova generazione.",
    "assist_res_content": "Il tuo marchio deve essere notato in pochi secondi nel mondo digitale. Prepariamo i tuoi contenuti per i social media e le tue strategie SEO per la pubblicazione mentre i tuoi concorrenti sono ancora in fase di pianificazione. Con la nostra potenza di produzione 10 volte superiore, sei sempre al passo con i tempi Un passo avanti.",
    "assist_res_fiyat": "I nostri prezzi sono determinati in base all'entità del progetto, ma grazie alla nostra velocità, trasferiamo a voi il vantaggio dei costi operativi. Il costo del lavoro che altri svolgono in 3 settimane è incomparabile all'efficienza che noi forniamo in 2 giorni.",
    "assist_res_why": "Perché lavoriamo secondo gli standard del 2026. Mentre le agenzie tradizionali perdono tempo con processi obsoleti, noi completiamo i progetti 10 volte più velocemente grazie ai nostri flussi di lavoro digitali ottimizzati.",
    "assist_res_quality": "Assolutamente no. La nostra velocità non deriva dalla fretta, ma dall'ottimizzazione perfetta dei nostri processi. Ogni progetto viene sottoposto a un controllo di qualità in 3 fasi secondo i nostri standard prima della consegna.",
    "assist_res_contact": "Ora è il momento perfetto per agire. Contattaci tramite nexyond@gmail.com o tramite il modulo e iniziamo oggi stesso!",
    "stat_customers": "Crescita",
    "stat_response": "Ore risposta",
    "stat_projects": "Progetti",
    "stat_satisfaction": "Soddisfazione",
    "work_title": "Progetti Visionari",
    "work_subtitle": "Lavori concettuali creati nel Nexyond Lab.",
    "lab_title": "I nostri prodotti pronti all'uso",
    "nav_lab": "PRODOTTI",
    "lab_subtitle": "Crea subito la tua presenza digitale con i nostri pacchetti speciali.",
    "lab_solution_01": "Menù digitale QR",
    "lab_solution_02": "Biglietto da visita digitale con supporto QR e NFC",
    "lab_inspect": "Ispeziona ↗",
    "lab_menu_title": "Menù digitale QR",
    "lab_menu_desc": "Sistemi di menù QR contactless e veloci, composti da 6 diversi pacchetti professionali per la tua attività.",
    "lab_card_title": "Biglietto da visita digitale",
    "lab_card_desc": "Porta la tua identità aziendale nel mondo digitale con QR o NFC con 3 diverse opzioni di pacchetto moderne.", "lab_01": "6 PACCHETTI",
    "lab_02": "Integrazione QR",
    "lab_03": "Demo live",
    "lab_11": "3 PACCHETTI",
    "lab_12": "Integrazione QR e NFC", "lab_13": "Prossima generazione"
  },
  "fr": {
    "nav_vision": "VISION",
    "nav_services": "SERVICES",
    "nav_process": "PROCESSUS",
    "nav_contact": "CONTACT",
    "nav_cta": "Démarrer",
    "hero_status": "SYSTÈMES ACTIFS",
    "hero_title_1": "Portez votre entreprise",
    "hero_title_2": "au sommet du numérique.",
    "hero_desc": "Sites web, applications mobiles ou cartes de visite... Nous concevons tout ce dont vous avez besoin pour devancer la concurrence.",
    "cta_main": "Obtenir un devis",
    "cta_sec": "Services",
    "cta_mailto": "Démarrer (Obtenir un devis)",
    "vision_title": "S'adapter ou disparaître,<br><span class='text-gradient-blue'>évoluez maintenant.</span>",
    "vision_desc_1": "Les méthodes traditionnelles disparaissent. Nous propulsons votre entreprise dans le numérique avec la puissance de l'IA.",
    "vision_desc_2": "Si vous n'êtes pas sur internet, vous n'existez pas. Nexyond vous rend visible, accessible et prestigieux.",
    "vision_point_1": "Boutique 24/7 (Site Web)",
    "vision_point_2": "Publicité pour des millions",
    "vision_point_3": "Solutions sans papier",
    "vision_card_title": "Virage Numérique",
    "vision_card_desc": "Supprimez les limites physiques. Obtenez des clients mondiaux.",
    "services_title": "Ce que nous faisons",
    "services_subtitle": "Tous les outils numériques sous un même toit.",
    "svc_web_title": "Design et Développement Web",
    "svc_web_desc": "Une vitrine professionnelle sur Google. Des sites rapides, élégants et adaptés aux mobiles.",
    "svc_qr_title": "Carte Digitale (NFC & QR)",
    "svc_qr_desc": "Partagez vos données en quelques secondes. Finis les déchets de papier.",
    "tag_popular": "TRÈS POPULAIRE",
    "svc_app_title": "Application Mobile",
    "svc_app_desc": "Votre idée dans la poche. Des apps sur mesure pour iOS et Android.",
    "svc_logo_title": "Logo et Identité",
    "svc_logo_desc": "Nous créons une image mémorable que vos clients reconnaîtront au premier coup d'œil.",
    "svc_content_title": "Contenu IA et Social",
    "svc_content_desc": "Nous créons du contenu pro et gérons vos réseaux avec l'IA.",
    "svc_auto_title": "E-commerce et Automatisation",
    "svc_auto_desc": "Laissez les robots s'occuper des tâches répétitives.",
    "svc_gumroad_title": "Produits Digitaux Prêts",
    "svc_gumroad_desc": "Accédez à des centaines de produits prêts à l'emploi.",
    "svc_gumroad_cta": "Voir les produits →",
    "process_title": "Notre méthode",
    "step_1_title": "Idée et Concept",
    "step_1_desc": "Nous vous écoutons et définissons vos besoins.",
    "step_2_title": "Design et Création",
    "step_2_desc": "Nous préparons le design et codons après votre accord.",
    "step_3_title": "Livraison et Support",
    "step_3_desc": "Nous livrons le projet et vous formons à son utilisation.",
    "footer_tagline": "Toutes les solutions numériques pour croître sont ici.",
    "footer_links_title": "Liens rapides",
    "footer_link_services": "Services",
    "footer_link_process": "Processus",
    "footer_link_contact": "Contact",
    "assist_header": "Assistant numérique Nexyond",
    "assist_initial": "Bonjour ! Je suis l'assistant Nexyond. Grâce à notre flux de travail nouvelle génération, nous réalisons en 1 à 2 jours des projets que d'autres ne peuvent pas terminer en 4 semaines. Par où souhaitez-vous commencer avec notre rapidité ?",
    "assist_opt_web": "Site web rapide (24-48 heures)",
    "assist_opt_card": "Carte de visite numérique",
    "assist_opt_app": "Application mobile",
    "assist_opt_logo": "Création de marque",
    "assist_opt_content": "Création de contenu rapide",
    "assist_opt_price": "Délai et livraison",
    "assist_opt_why": "Pourquoi Nexyond ?",
    "assist_opt_quality": "La rapidité a-t-elle un impact sur la qualité ?",
    "assist_opt_contact": "Contactez-nous",
    "assist_res_web": "Un site web est une extension numérique d'une entreprise Nous créons votre boutique en ligne, mais nous ne vous faisons pas attendre des semaines. Nous lançons votre site optimisé pour Google et à fort taux de conversion, grâce aux dernières technologies, en seulement 2 jours.",
    "assist_res_businesscard": "Découvrez les cartes de visite numériques: ajoutez des contacts à votre répertoire en quelques secondes grâce à la technologie QR code. Une solution de réseautage prestigieuse et 10 fois plus rapide qui élimine le gaspillage de papier.",
    "assist_res_app": "Nous donnons vie à vos idées sur les plateformes iOS et Android à une vitesse fulgurante. En optimisant les processus complexes, nous préparons votre application mobile professionnelle pour les tests en quelques jours.",
    "assist_res_logo": "Plus besoin d'attendre des jours pour les modifications lors de la création de votre identité de marque. Nous réalisons rapidement des designs modernes, mémorables et à la pointe du secteur grâce à notre vision novatrice.",
    "assist_res_content": "Dans l'univers numérique, votre marque doit se faire remarquer en quelques secondes. Nous préparons vos contenus pour les réseaux sociaux et vos stratégies SEO pour publication pendant que vos concurrents sont encore en phase de planification. Grâce à notre puissance de production décuplée, vous avez toujours une longueur d'avance.",
    "assist_res_fiyat" : "Nos prix sont déterminés en fonction de l'envergure du projet, mais grâce à notre rapidité, nous vous faisons bénéficier d'un coût opérationnel avantageux. Le coût d'un travail réalisé en 3 semaines par d'autres est incomparable à l'efficacité que nous offrons en 2 jours.",
    "assist_res_why" : "Parce que nous travaillons selon les standards de 2026. Alors que les agences traditionnelles perdent du temps avec des processus obsolètes, nous réalisons les projets 10 fois plus vite grâce à nos flux de travail numériques optimisés.",
    "assist_res_quality" : "Absolument pas. Notre rapidité ne provient pas de la précipitation, mais de l'optimisation parfaite de nos processus. Chaque projet fait l'objet d'un contrôle qualité en 3 étapes, conformément à nos normes, avant sa livraison.",
    "assist_res_contact" : "C'est le moment idéal pour agir. Contactez-nous à l'adresse nexyond@gmail.com ou via le formulaire, et commençons dès aujourd'hui !",
    "stat_customers": "Croissance",
    "stat_response": "Heures réponse",
    "stat_projects": "Projets",
    "stat_satisfaction": "Satisfaction",
    "work_title": "Projets Visionnaires",
    "work_subtitle": "Travaux conceptuels créés au Nexyond Lab.",
    "lab_title": "Nos produits prêts à l'emploi",
    "nav_lab": "PRODUITS",
    "lab_subtitle": "Créez immédiatement votre présence numérique grâce à nos offres spéciales.",
    "lab_solution_01": "Menu numérique QR",
    "lab_solution_02": "Carte de visite numérique compatible QR et NFC",
    "lab_inspect": "Inspecter ↗",
    "lab_menu_title": "Menu numérique QR",
    "lab_menu_desc": "Systèmes de menus QR sans contact et rapides, composés de 6 offres professionnelles différentes pour votre entreprise.",
    "lab_card_title": "Carte de visite numérique",
    "lab_card_desc": "Faites passer votre identité d'entreprise dans le monde numérique grâce au QR ou au NFC avec 3 offres modernes différentes.", "lab_01": "6 OFFRES",
    "lab_02": "Intégration QR",
    "lab_03": "Démonstration en direct",
    "lab_11": "3 OFFRES",
    "lab_12": "Intégration QR et NFC",
    "lab_13": "Prochaine génération"
  },
  "de": {
    "nav_vision": "VISION",
    "nav_services": "SERVICES",
    "nav_process": "PROZESS",
    "nav_contact": "KONTAKT",
    "nav_cta": "Starten",
    "hero_status": "SYSTEME AKTIV",
    "hero_title_1": "Bringen Sie Ihr",
    "hero_title_2": "Business an die Spitze.",
    "hero_desc": "Websites, Apps oder digitale Visitenkarten... Wir entwerfen alles, was Sie brauchen, um der Konkurrenz voraus zu sein.",
    "cta_main": "Angebot anfordern",
    "cta_sec": "Dienstleistungen",
    "cta_mailto": "Starten (Angebot anfordern)",
    "vision_title": "Anpassen oder verblassen,<br><span class='text-gradient-blue'>jetzt weiterentwickeln.</span>",
    "vision_desc_1": "Traditionelle Methoden verschwinden. Wir bringen Ihr Unternehmen mit KI-Power in Lichtgeschwindigkeit ins Digitale.",
    "vision_desc_2": "Wer nicht online ist, existiert nicht. Nexyond macht Sie sichtbar, erreichbar und prestigeträchtig.",
    "vision_point_1": "24/7 Shop (Website)",
    "vision_point_2": "Werbung für Millionen",
    "vision_point_3": "Papierlose Lösungen",
    "vision_card_title": "Digitaler Wandel",
    "vision_card_desc": "Grenzen aufheben. Weltweit Kunden gewinnen.",
    "services_title": "Was wir tun",
    "services_subtitle": "Alle digitalen Tools unter einem Dach.",
    "svc_web_title": "Webdesign & Entwicklung",
    "svc_web_desc": "Ein professionelles Schaufenster bei Google. Schnelle und moderne Websites.",
    "svc_qr_title": "Digitale Visitenkarte (NFC & QR)",
    "svc_qr_desc": "Daten in Sekunden teilen. Schluss mit Papierverschwendung.",
    "tag_popular": "SEHR BELIEBT",
    "svc_app_title": "Mobile App",
    "svc_app_desc": "Ihre Idee in der Tasche. Maßgeschneiderte Apps für iOS und Android.",
    "svc_logo_title": "Logo & Identität",
    "svc_logo_desc": "Wir entwerfen ein einprägsames Image, das Ihre Kunden sofort wiedererkennen.",
    "svc_content_title": "KI-Content & Social Media",
    "svc_content_desc": "Wir erstellen Profi-Inhalte und verwalten Ihre Kanäle mit KI.",
    "svc_auto_title": "E-Commerce & Automatisierung",
    "svc_auto_desc": "Lassen Sie Roboter die Routineaufgaben erledigen.",
    "svc_gumroad_title": "Digitale Fertigprodukte",
    "svc_gumroad_desc": "Hunderte Produkte zur sofortigen Nutzung.",
    "svc_gumroad_cta": "Alle Produkte →",
    "process_title": "Wie wir arbeiten",
    "step_1_title": "Idee & Konzept",
    "step_1_desc": "Wir hören zu und bestimmen Ihren Bedarf.",
    "step_2_title": "Design & Bau",
    "step_2_desc": "Wir entwerfen und codieren nach Ihrer Freigabe.",
    "step_3_title": "Start & Support",
    "step_3_desc": "Wir liefern das Projekt und führen Sie ein.",
    "footer_tagline": "Alle digitalen Lösungen für Wachstum sind hier.",
    "footer_links_title": "Quick Links",
    "footer_link_services": "Services",
    "footer_link_process": "Prozess",
    "footer_link_contact": "Kontakt",
    "assist_header": "Nexyond Digital Assistant",
    "assist_initial": "Hallo! Ich bin Nexyond Assistant. Mit unserem Workflow der neuen Generation liefern wir Projekte, für die andere 4 Wochen brauchen, in 1-2 Tagen. Wo möchten Sie mit unserer Geschwindigkeit beginnen?",
    "assist_opt_web": "Schnelle Website (24-48 Stunden)",
    "assist_opt_card": "Digitale Visitenkarte",
    "assist_opt_app": "Mobile App",
    "assist_opt_logo": "Brand Design",
    "assist_opt_content": "Schnelle Content-Erstellung",
    "assist_opt_price": "Zeit & Lieferung",
    "assist_opt_why": "Warum Nexyond?",
    "assist_opt_quality": "Beeinflusst Geschwindigkeit die Qualität?",
    "assist_opt_contact": "Kontaktieren Sie uns",
    "assist_res_web": "Eine Website ist die digitale Filiale eines Shops, Aber wir lassen Sie nicht wochenlang warten, während wir Ihre Website erstellen. Wir launchen Ihre Google-kompatible, konversionsstarke Website mit den neuesten Technologien innerhalb von 2 Tagen.",
    "assist_res_businesscard": "Lernen Sie digitale Visitenkarten kennen: Fügen Sie Ihre Kontakte in Sekundenschnelle mit QR-Code-Technologie hinzu. Eine prestigeträchtige und 10-mal schnellere Netzwerklösung, die Papierverschwendung vermeidet.",
    "assist_res_app": "Wir bringen Ihre Ideen blitzschnell auf iOS- und Android-Plattformen. Durch die Optimierung komplexer Prozesse stellen wir Ihre professionelle mobile Anwendung innerhalb weniger Tage für Testläufe bereit.",
    "assist_res_logo": "Sie müssen bei der Erstellung Ihrer Markenidentität nicht tagelang auf Überarbeitungen warten. Wir erstellen schnell moderne, einprägsame und branchenführende Designs mit unserer Designvision der nächsten Generation.",
    "assist_res_content": "Ihre Marke muss in der digitalen Welt in Sekundenschnelle wahrgenommen werden. Wir erstellen Ihre Social-Media-Inhalte und SEO-Strategien zur Veröffentlichung, während Ihre Konkurrenten noch in der Planungsphase sind. Mit unserer 10-fachen Produktionsleistung sind Sie immer einen Schritt voraus.",
    "assist_res_fiyat": "Unsere Preise richten sich nach dem Projektumfang. Dank unserer Schnelligkeit geben wir Ihnen den Kostenvorteil direkt weiter. Die Kosten für Arbeiten, die andere in drei Wochen erledigen, sind mit unserer Effizienz von nur zwei Tagen nicht zu vergleichen.",
    "assist_res_why": "Weil wir nach den Standards von 2026 arbeiten. Während traditionelle Agenturen mit veralteten Prozessen Zeit verschwenden, schließen wir Projekte mit unseren optimierten digitalen Workflows zehnmal schneller ab.",
    "assist_res_quality": "Ganz und gar nicht. Unsere Schnelligkeit resultiert nicht aus Hektik, sondern aus der perfekten Optimierung unserer Prozesse. Jedes Projekt durchläuft vor der Auslieferung eine dreistufige Qualitätskontrolle gemäß unseren hohen Qualitätsstandards.",
    "assist_res_contact": "Jetzt ist der perfekte Zeitpunkt zum Handeln. Kontaktieren Sie uns per E-Mail unter nexyond@gmail.com oder über das Formular – und legen wir noch heute los!",
    "stat_customers": "Wachstum",
    "stat_response": "Stunden Antwort",
    "stat_projects": "Projekte",
    "stat_satisfaction": "Zufriedenheit",
    "work_title": "Visionäre Projekte",
    "work_subtitle": "Konzeptarbeiten aus dem Nexyond Lab.",
    "lab_title": "Unsere fertigen Produkte",
    "nav_lab": "PRODUKTE",
    "lab_subtitle": "Erstellen Sie sofort Ihre digitale Präsenz mit unseren Spezialpaketen.",
    "lab_solution_01": "Digitales QR-Menü",
    "lab_solution_02": "Digitale Visitenkarte mit QR- und NFC-Unterstützung",
    "lab_inspect": "Ansehen ↗",
    "lab_menu_title": "Digitales QR-Menü",
    "lab_menu_desc": "Kontaktlose und schnelle QR-Menüsysteme mit 6 verschiedenen professionellen Paketen für Ihr Unternehmen.",
    "lab_card_title": "Digitale Visitenkarte",
    "lab_card_desc": "Bringen Sie Ihre Corporate Identity mit QR oder NFC in die digitale Welt – mit 3 verschiedenen modernen Paketoptionen.",
    "lab_01": "6 PAKETE",
    "lab_02": "QR-Integration",
    "lab_03": "Live-Demo",
    "lab_11": "3-PAKET",
    "lab_12": "QR- und NFC-Integration",
    "lab_13": "Weiter Generation"
  },
  "ar": {
    "nav_vision": "الرؤية",
    "nav_services": "الخدمات",
    "nav_process": "آلية العمل",
    "nav_contact": "اتصل بنا",
    "nav_cta": "ابدأ الآن",
    "hero_status": "الأنظمة نشطة",
    "hero_title_1": "ارتقِ بعملك إلى",
    "hero_title_2": "القمة الرقمية.",
    "hero_desc": "مواقع إلكترونية، تطبيقات جوال، أو بطاقات عمل رقمية... نصمم ونبرمج كل ما تحتاجه لتسبق منافسيك.",
    "cta_main": "احصل على عرض",
    "cta_sec": "خدماتنا",
    "cta_mailto": "ابدأ الآن (طلب عرض سعر)",
    "vision_title": "تكيّف أو تراجع،<br><span class='text-gradient-blue'>تطور الآن.</span>",
    "vision_desc_1": "الأساليب التقليدية تتلاشى. نحن ننقل عملك إلى العالم الرقمي بسرعة الضوء باستخدام قوة الذكاء الاصطناعي.",
    "vision_desc_2": "إذا لم تكن موجوداً على الإنترنت، فأنت غير موجود. نكسيوند تجعلك مرئياً، متاحاً ومرموقاً.",
    "vision_point_1": "متجر مفتوح 24/7 (موقع إلكتروني)",
    "vision_point_2": "إعلانات تصل للملايين",
    "vision_point_3": "حلول رقمية بلا ورق",
    "vision_card_title": "التحول الرقمي",
    "vision_card_desc": "ألغِ الحدود الجغرافية. اكتسب عملاء عالميين.",
    "services_title": "ماذا نفعل؟",
    "services_subtitle": "جميع الأدوات الرقمية التي يحتاجها عملك تحت سقف واحد.",
    "svc_web_title": "تصميم وتطوير المواقع",
    "svc_web_desc": "واجهة احترافية تظهر لعملائك على جوجل. مواقع سريعة وأنيقة ومتوافقة مع الجوال.",
    "svc_qr_title": "بطاقة العمل الرقمية (NFC & QR)",
    "svc_qr_desc": "شارك معلوماتك في ثوانٍ. وداعاً لهدر الورق.",
    "tag_popular": "الأكثر طلباً",
    "svc_app_title": "تطبيقات الجوال",
    "svc_app_desc": "فكرتك في جيب عملائك. تطبيقات مخصصة لنظامي iOS و Android.",
    "svc_logo_title": "الشعار والهوية البصرية",
    "svc_logo_desc": "نصمم صورة لا تُنسى يتعرف عليها عملاؤك من النظرة الأولى.",
    "svc_content_title": "محتوى الذكاء الاصطناعي",
    "svc_content_desc": "نصمم محتوى احترافياً وندير حساباتك باستخدام الذكاء الاصطناعي.",
    "svc_auto_title": "التجارة الإلكترونية والأتمتة",
    "svc_auto_desc": "دع الروبوتات تنجز المهام الروتينية لعملك.",
    "svc_gumroad_title": "منتجات رقمية جاهزة",
    "svc_gumroad_desc": "مئات المنتجات الجاهزة للاستخدام الفوري لعملك.",
    "svc_gumroad_cta": "تصفح المنتجات ←",
    "process_title": "كيف نعمل؟",
    "step_1_title": "اللقاء والفكرة",
    "step_1_desc": "نستمع إليك ونحدد احتياجاتك بدقة.",
    "step_2_title": "التصميم والبناء",
    "step_2_desc": "نجهز التصميم ونبرمجه بعد موافقتك.",
    "step_3_title": "التسليم والدعم",
    "step_3_desc": "نسلمك المشروع وندربك على استخدامه.",
    "footer_tagline": "جميع الحلول الرقمية لتنمية عملك هنا.",
    "footer_links_title": "روابط سريعة",
    "footer_link_services": "خدماتنا",
    "footer_link_process": "آلية عملنا",
    "footer_link_contact": "اتصل بنا",
    "assist_header": "المساعد الرقمي من Nexyond",
    "assist_initial": "مرحباً! أنا مساعد Nexyond. نُنجز المشاريع التي يعجز الآخرون عن إنجازها في 4 أسابيع خلال يوم أو يومين فقط بفضل سير عملنا المتطور. ما هي الخطوة التي ترغب في البدء بها مع سرعتنا؟",
    "assist_opt_web": "موقع إلكتروني سريع (24-48 ساعة)",
    "assist_opt_card": "بطاقة عمل رقمية",
    "assist_opt_app": "تطبيق جوال",
    "assist_opt_logo": "تصميم علامة تجارية",
    "assist_opt_content": "إنشاء محتوى سريع",
    "assist_opt_price": "الوقت والتسليم",
    "assist_opt_why": "لماذا Nexyond؟",
    "assist_opt_quality": "هل تؤثر السرعة على الجودة؟",
    "assist_opt_contact": "تواصل معنا",
    "assist_res_web": "الموقع الإلكتروني هو فرع رقمي لمتجرك، لكننا لا نجعلك تنتظر أسابيع أثناء بنائه. نطلق موقعك المتوافق مع جوجل، ذو معدل التحويل العالي، باستخدام أحدث التقنيات في غضون يومين فقط.",
    "assist_res_businesscard": "تعرّف على بطاقات العمل الرقمية: أضف جهات اتصالك في ثوانٍ باستخدام تقنية رمز الاستجابة السريعة (QR code). حلٌّ مرموق للتواصل أسرع بعشر مرات، ويُغنيك عن استخدام الورق.",
    "assist_res_app": "نُحوّل أفكارك إلى منصات iOS وAndroid بسرعة فائقة. من خلال تحسين العمليات المعقدة، نُجهّز تطبيقك الاحترافي للهواتف المحمولة للتجربة في غضون أيام.",
    "assist_res_logo": "لا داعي للانتظار أيامًا لإجراء التعديلات عند إنشاء هوية علامتك التجارية. نُنجز بسرعة تصاميم عصرية لا تُنسى ورائدة في مجالها، بفضل رؤيتنا التصميمية المتطورة.",
    "assist_res_content": "يجب أن تبرز علامتك التجارية في ثوانٍ في العالم الرقمي. نُجهّز محتوى وسائل التواصل الاجتماعي واستراتيجيات تحسين محركات البحث (SEO) للنشر بينما لا يزال منافسوك في انتظارها. مرحلة التخطيط. بفضل قدرتنا الإنتاجية التي تفوق عشرة أضعاف، ستكون دائمًا متقدمًا بخطوة.",
    "assist_res_fiyat": "تُحدد أسعارنا وفقًا لنطاق المشروع، ولكن بفضل سرعتنا، ننقل إليك ميزة التكلفة التشغيلية. تكلفة العمل الذي يُنجزه الآخرون في 3 أسابيع لا تُقارن بالكفاءة التي نقدمها في يومين فقط.",
    "assist_res_why": "لأننا نعمل وفقًا لمعايير 2026. بينما تُهدر الوكالات التقليدية الوقت في عمليات قديمة، نُنجز المشاريع أسرع بعشر مرات بفضل سير العمل الرقمي المُحسّن لدينا.",
    "assist_res_quality": "بالتأكيد لا. سرعتنا لا تأتي من التسرع، بل من تحسين عملياتنا بشكل مثالي. يخضع كل مشروع لفحص جودة من 3 مراحل وفقًا لمعايير الجودة لدينا قبل التسليم.",
    "assist_res_contact": "الآن هو الوقت الأمثل للعمل. تواصلوا معنا عبر البريد الإلكتروني nexyond@gmail.com أو من خلال النموذج، ولنبدأ اليوم!",
    "stat_customers": "نمو العملاء",
    "stat_response": "ساعات الرد",
    "stat_projects": "مشاريع منجزة",
    "stat_satisfaction": "نسبة الرضا",
    "work_title": "مشاريع رؤيوية",
    "work_subtitle": "أعمال مفاهيمية من مختبر نكسيوند.",
    "lab_title": "منتجاتنا الجاهزة",
    "nav_lab": "منتجات",
    "lab_subtitle": "أنشئ حضورك الرقمي فورًا مع باقاتنا الخاصة.",
    "lab_solution_01": "قائمة رقمية بتقنية QR",
    "lab_solution_02": "بطاقة عمل رقمية تدعم تقنيتي QR وNFC",
    "lab_inspect": "فحص ↗",
    "lab_menu_title": "قائمة رقمية بتقنية QR",
    "lab_menu_desc": "أنظمة قوائم QR سريعة وبدون تلامس، تتكون من 6 باقات احترافية مختلفة لعملك.",
    "lab_card_title": "بطاقة عمل رقمية",
    "lab_card_desc": "انقل هوية شركتك إلى العالم الرقمي باستخدام تقنية QR أو NFC مع 3 خيارات باقات عصرية مختلفة.",
    "lab_01": "6 باقات",
    "lab_02": "تكامل QR",
    "lab_03": "عرض توضيحي مباشر",
    "lab_11": "3 باقات",
    "lab_12": "QR & دمج تقنية الاتصال قريب المدى (NFC)",
    "lab_13": "الجيل القادم"
  },
  "pt": {
    "nav_vision": "VISÃO",
    "nav_services": "SERVIÇOS",
    "nav_process": "PROCESSO",
    "nav_contact": "CONTATO",
    "nav_cta": "Começar",
    "hero_status": "SISTEMAS ATIVOS",
    "hero_title_1": "Leve seu Negócio ao",
    "hero_title_2": "Topo do Digital.",
    "hero_desc": "Site, aplicativo móvel ou cartão de visita digital... Projetamos e codificamos tudo o que você precisa para ficar à frente de seus concorrentes.",
    "cta_main": "Obter Proposta",
    "cta_sec": "Nossos Serviços",
    "cta_mailto": "Começar Agora (Obter Proposta)",
    "vision_title": "Não fique no tradicional,<br><span class='text-gradient-blue'>Foque no Futuro.</span>",
    "vision_desc_1": "Os métodos tradicionais de comércio estão desaparecendo. Seus clientes agora procuram você no Google ou nas redes sociais. Levamos seus negócios para o digital na velocidade da luz com o poder da IA.",
    "vision_desc_2": "Se você não está na internet, você não existe para seus clientes. Como Nexyond, tornamos você visível, acessível e prestigiado no mundo digital.",
    "vision_point_1": "Loja Aberta 24/7 (Website)",
    "vision_point_2": "Anúncios que Alcançam Milhões",
    "vision_point_3": "Soluções Digitais Sem Papel",
    "vision_card_title": "Mudança Digital",
    "vision_card_desc": "Remova limites físicos. Obtenha clientes globalmente.",
    "services_title": "O Que Fazemos?",
    "services_subtitle": "Todas as ferramentas digitais sob o mesmo teto.",
    "svc_web_title": "Design e Desenvolvimento Web",
    "svc_web_desc": "Sites rápidos, modernos e focados em conversão que ficam perfeitos em qualquer dispositivo.",
    "svc_qr_title": "Cartão de Visita Digital (NFC & QR)",
    "svc_qr_desc": "Compartilhe seus dados em segundos. Chega de desperdício de papel.",
    "tag_popular": "MUITO POPULAR",
    "svc_app_title": "Aplicativo Móvel",
    "svc_app_desc": "Sua ideia no bolso. Aplicativos personalizados para iOS e Android.",
    "svc_logo_title": "Logo e Identidade",
    "svc_logo_desc": "Projetamos uma imagem memorável que seus clientes reconhecerão instantaneamente.",
    "svc_content_title": "Conteúdo IA e Social",
    "svc_content_desc": "Criamos conteúdo profissional e gerenciamos suas redes com IA.",
    "svc_auto_title": "E-commerce e Automação",
    "svc_auto_desc": "Deixe que os robôs cuidem das tarefas repetitivas.",
    "svc_gumroad_title": "Produtos Digitais Prontos",
    "svc_gumroad_desc": "Centenas de produtos prontos para uso imediato.",
    "svc_gumroad_cta": "Ver todos os produtos →",
    "process_title": "Como Trabalhamos?",
    "step_1_title": "Ideia e Conceito",
    "step_1_desc": "Nós ouvimos você e determinamos o que você precisa.",
    "step_2_title": "Design e Criação",
    "step_2_desc": "Preparamos o design e o codificamos após sua aprovação.",
    "step_3_title": "Entrega e Suporte",
    "step_3_desc": "Entregamos o projeto e ensinamos como usá-lo.",
    "footer_tagline": "Todas as soluções digitais para crescer estão aqui.",
    "footer_links_title": "Links Rápidos",
    "footer_link_services": "Serviços",
    "footer_link_process": "Processo",
    "footer_link_contact": "Contato",
    "assist_header": "Assistente Digital Nexyond",
    "assist_initial": "Olá! Sou o Assistente Nexyond. Entregamos projetos que outros não conseguem concluir em 4 semanas em 1 a 2 dias com o nosso fluxo de trabalho de nova geração. Por onde gostaria de começar com a nossa velocidade?",
    "assist_opt_web": "Site Rápido (24-48 Horas)",
    "assist_opt_card": "Cartão de Visita Digital",
    "assist_opt_app": "Aplicação Móvel",
    "assist_opt_logo": "Design de Marca",
    "assist_opt_content": "Criação Rápida de Conteúdo",
    "assist_opt_price": "Tempo e Entrega",
    "assist_opt_why": "Porquê Nexyond?",
    "assist_opt_quality": "A velocidade afeta o seu negócio? Qualidade?",
    "assist_opt_contact": "Fale Connosco",
    "assist_res_web": "Um website é uma filial digital de uma loja, mas não o deixamos à espera semanas enquanto o construímos. Lançamos o seu site compatível com o Google e de alta conversão com as tecnologias mais recentes em até 2 dias.",
    "assist_res_businesscard": "Conheça os Cartões de Visita Digitais: Adicione-os aos seus contactos em segundos com a tecnologia de código QR. Uma solução de networking prestigiada e 10 vezes mais rápida que elimina o desperdício de papel.",
    "assist_res_app": "Levamos as suas ideias para as plataformas iOS e Android a uma velocidade relâmpago. Ao otimizar processos complexos, deixamos a sua aplicação móvel profissional pronta para testes em poucos dias.",
    "assist_res_logo": "Não precisa de esperar dias por revisões ao criar a identidade da sua marca. Concluímos rapidamente designs modernos, memoráveis ​​e líderes do setor com a nossa visão de design de última geração.",
    "assist_res_content": "A sua marca precisa de ser notada em segundos No mundo digital. Preparamos o seu conteúdo de redes sociais e as suas estratégias de SEO para publicação enquanto os seus concorrentes ainda estão na fase de planeamento. Com a nossa capacidade de produção 10 vezes superior, está sempre um passo à frente.",
    "assist_res_fiyat": "Os nossos preços são determinados de acordo com o âmbito do projeto, mas graças à nossa rapidez, passamos a vantagem do 'custo operacional' para si. O custo do trabalho que outros fazem em 3 semanas é incomparável à eficiência que entregamos em 2 dias.",
    "assist_res_why": "Porque trabalhamos de acordo com as normas de 2026. Enquanto as agências tradicionais perdem tempo com processos obsoletos, nós concluímos projetos 10 vezes mais rápido com os nossos fluxos de trabalho digitais otimizados.",
    "assist_res_quality": "Nem pensar. A nossa velocidade não vem da pressa, mas sim da otimização perfeita dos nossos processos. Cada projeto passa por uma verificação de controlo de qualidade em 3 etapas, de acordo com os nossos padrões de qualidade, antes da entrega.",
    "assist_res_contact": "Agora é o momento perfeito para agir. Contacte-nos pelo e-mail nexyond@gmail.com ou através do formulário, e vamos começar já hoje!",
    "stat_customers": "Crescimento",
    "stat_response": "Horas resposta",
    "stat_projects": "Projetos",
    "stat_satisfaction": "Satisfação",
    "work_title": "Projetos Visionários",
    "work_subtitle": "Trabalhos conceituais criados no Nexyond Lab.",
    "lab_title": "Os Nossos Produtos Prontos",
    "nav_lab": "PRODUTOS",
    "lab_subtitle": "Crie a sua presença digital imediatamente com os nossos pacotes especiais.",
    "lab_solution_01": "Menu Digital com QR Code",
    "lab_solution_02": "Cartão de Visita Digital com Suporte a QR Code e NFC",
    "lab_inspect": "Inspecionar ↗",
    "lab_menu_title": "Menu Digital com QR Code",
    "lab_menu_desc": "Sistemas de menu com QR Code rápidos e contactless, compostos por 6 pacotes profissionais diferentes para o seu negócio.",
    "lab_card_title": "Cartão de Visita Digital",
    "lab_card_desc": "Leve a identidade da sua empresa para o mundo digital com QR Code ou NFC, com 3 opções de pacotes modernos diferentes.",
    "lab_01": "6 PACOTES",
    "lab_02": "Integração com QR Code",
    "lab_03": "Demonstração ao Vivo",
    "lab_11": "3 PACOTES",
    "lab_12": "Integração de QR e NFC",
    "lab_13": "Next Generation"
    },
  "ja": {
    "nav_vision": "ビジョン",
    "nav_services": "サービス",
    "nav_process": "プロセス",
    "nav_contact": "お問い合わせ",
    "nav_cta": "今すぐ開始",
    "hero_status": "システム稼働中",
    "hero_title_1": "あなたのビジネスを",
    "hero_title_2": "デジタルの頂点へ。",
    "hero_desc": "ウェブサイト、モバイルアプリ、デジタル名刺... 競合他社に差をつけるために必要なすべてを設計・開発します。",
    "cta_main": "見積もりを依頼",
    "cta_sec": "サービス内容",
    "cta_mailto": "今すぐ開始（見積もり依頼）",
    "vision_title": "伝統にとらわれず、<br><span class='text-gradient-blue'>未来に焦点を。</span>",
    "vision_desc_1": "従来のビジネス手法は姿を消しつつあります。AIの力であなたのビジネスを光速でデジタル化します。",
    "vision_desc_2": "インターネット上に存在しないことは、顧客にとって存在しないことと同じです。Nexyondは、デジタル世界であなたを信頼される存在にします。",
    "vision_point_1": "24時間365日営業（ウェブサイト）",
    "vision_point_2": "数百万人へ届く広告",
    "vision_point_3": "ペーパーレスなデジタルソリューション",
    "vision_card_title": "デジタルシフト",
    "vision_card_desc": "物理的な限界を取り払い、世界中から顧客を獲得しましょう。",
    "services_title": "事業内容",
    "services_subtitle": "ビジネスに必要なすべてのデジタルツールを1か所に。",
    "svc_web_title": "ウェブ開発",
    "svc_web_desc": "高速でモダンな、成約率を重視したサイトをあらゆるデバイス向けに構築します。",
    "svc_qr_title": "デジタル名刺 (NFC & QR)",
    "svc_qr_desc": "QRコードで情報を瞬時に共有。紙の無駄をなくします。",
    "tag_popular": "大人気",
    "svc_app_title": "モバイルアプリ",
    "svc_app_desc": "アイデアをポケットに。iOSとAndroid向けのカスタムアプリを開発します。",
    "svc_logo_title": "ロゴ＆ブランドアイデンティティ",
    "svc_logo_desc": "顧客がひと目で認識できる、記憶に残るイメージをデザインします。",
    "svc_content_title": "AIコンテンツ＆SNS運用",
    "svc_content_desc": "AIを活用してプロフェッショナルなコンテンツを作成し、SNSを管理します。",
    "svc_auto_title": "Eコマース＆自動化",
    "svc_auto_desc": "ルーチン業務はロボットに任せましょう。",
    "svc_gumroad_title": "デジタル製品",
    "svc_gumroad_desc": "すぐにビジネスに活用できる何百もの製品にアクセスできます。",
    "svc_gumroad_cta": "製品一覧を見る →",
    "process_title": "進め方",
    "step_1_title": "ヒアリングとアイデア",
    "step_1_desc": "お客様のニーズを聞き、最適な解決策を決定します。",
    "step_2_title": "デザインと開発",
    "step_2_desc": "承認を得た後、デザインとコーディングを行います。",
    "step_3_title": "納品とサポート",
    "step_3_desc": "プロジェクトを納品し、使い方のトレーニングを行います。",
    "footer_tagline": "ビジネス成長のためのすべてのデジタルソリューションがここに。",
    "footer_links_title": "クイックリンク",
    "footer_link_services": "サービス",
    "footer_link_process": "プロセス",
    "footer_link_contact": "お問い合わせ",
    "assist_header": "Nexyondデジタルアシスタント",
    "assist_initial": "こんにちは！Nexyondアシスタントです。他社では4週間で完了できないプロジェクトを、新世代のワークフローで1～2日で納品いたします。当社のスピードについて、まずはどこからお考えですか？",
    "assist_opt_web": "高速ウェブサイト（24～48時間）",
    "assist_opt_card": "デジタル名刺",
    "assist_opt_app": "モバイルアプリケーション",
    "assist_opt_logo": "ブランドデザイン",
    "assist_opt_content": "高速コンテンツ作成",
    "assist_opt_price": "納期",
    "assist_opt_why": "なぜNexyondを選ぶのか？",
    "assist_opt_quality": "スピードは品質に影響しますか？",
    "assist_opt_contact": "お問い合わせ",
    "assist_res_web": "ウェブサイトとはショップのデジタルブランチを構築する際に、何週間もお待たせすることはありません。最新技術を駆使し、Google対応でコンバージョン率の高いサイトを2日以内に立ち上げます。",
    "assist_res_businesscard": "デジタル名刺のご紹介：QRコード技術で数秒で連絡先に追加できます。紙の無駄を省き、10倍高速化する、信頼性の高いネットワーキングソリューションです。",
    "assist_res_app": "お客様のアイデアをiOSおよびAndroidプラットフォームに瞬時に反映します。複雑なプロセスを最適化することで、プロフェッショナルなモバイルアプリケーションを数日でテスト運用開始できます。",
    "assist_res_logo": "ブランドアイデンティティを作成する際に、修正に何日も待つ必要はありません。次世代のデザインビジョンに基づき、モダンで記憶に残る、業界をリードするデザインを迅速に完成させます。",
    "assist_res_content": "デジタルの世界では、お客様のブランドは数秒で認知される必要があります。競合他社がまだ企画段階にある間に、ソーシャルメディアコンテンツとSEO戦略を公開できるよう準備します。10倍の制作力で、常に一歩先を行きます。",
    "assist_res_fiyat": "料金はプロジェクトの範囲に応じて決定されますが、スピード重視の対応により、運用コストのメリットをお客様に還元しています。他社が3週間かけて行う作業コストと、当社が2日で提供する効率性は比べものになりません。",
    "assist_res_why": "私たちは2026年の基準に基づいて業務を行っています。従来の代理店が時代遅れのプロセスで時間を無駄にしているのに対し、当社は最適化されたデジタルワークフローにより、10倍の速さでプロジェクトを完了します。",
    "assist_res_quality": "いいえ、そうではありません。当社のスピードは、急ぐからではなく、プロセスを完璧に最適化することから生まれています。すべてのプロジェクトは、納品前に当社の品質基準に基づいた3段階の品質管理チェックを受けます。",
    "assist_res_contact": "今こそ行動を起こす絶好のタイミングです。nexyond@gmail.com またはフォームからご連絡ください。今すぐ始めましょう！",
    "stat_customers": "顧客成長",
    "stat_response": "レスポンス時間",
    "stat_projects": "完了プロジェクト",
    "stat_satisfaction": "満足度",
    "work_title": "ビジョナリープロジェクト",
    "work_subtitle": "Nexyond Labで作成されたコンセプトワーク。",
    "lab_title": "既製品",
    "nav_lab": "製品",
    "lab_subtitle": "特別パッケージですぐにデジタルプレゼンスを構築できます。",
    "lab_solution_01": "QRデジタルメニュー",
    "lab_solution_02": "QR・NFC対応デジタル名刺",
    "lab_inspect": "検査↗",
    "lab_menu_title": "QRデジタルメニュー",
    "lab_menu_desc": "6種類のプロフェッショナルパッケージで構成された、非接触で高速なQRメニューシステムです。",
    "lab_card_title": "デジタル名刺",
    "lab_card_desc": "3種類の最新パッケージオプションで、QRまたはNFCを活用したデジタル世界への企業アイデンティティを構築できます。",
    "lab_01": "6種類のパッケージ",
    "lab_02": "QR統合",
    "lab_03": "ライブデモ",
    "lab_11": "3種類のパッケージ",
    "lab_12": "QRとNFC統合",
    "lab_13": "次世代"
    },
  "hi": {
    "nav_vision": "दृष्टिकोण",
    "nav_services": "सेवाएं",
    "nav_process": "प्रक्रिया",
    "nav_contact": "संपर्क",
    "nav_cta": "अभी शुरू करें",
    "hero_status": "सिस्टम सक्रिय है",
    "hero_title_1": "अपने व्यवसाय को",
    "hero_title_2": "डिजिटल शिखर पर ले जाएं।",
    "hero_desc": "वेबसाइट, मोबाइल ऐप या डिजिटल बिजनेस कार्ड... हम वह सब कुछ डिजाइन और कोड करते हैं जिसकी आपको आवश्यकता है।",
    "cta_main": "कोटेशन प्राप्त करें",
    "cta_sec": "हमारी सेवाएं",
    "cta_mailto": "अभी शुरू करें (कोटेशन प्राप्त करें)",
    "vision_title": "पारंपरिक न रहें,<br><span class='text-gradient-blue'>भविष्य पर ध्यान दें।</span>",
    "vision_desc_1": "व्यापार के पुराने तरीके गायब हो रहे हैं। हम AI की शक्ति के साथ आपके व्यवसाय को डिजिटल की ओर ले जाते हैं।",
    "vision_desc_2": "यदि आप इंटरनेट पर नहीं हैं, तो आप नहीं हैं। Nexyond के रूप में, हम आपको डिजिटल दुनिया में दृश्यमान बनाते हैं।",
    "vision_point_1": "24/7 खुली दुकान (वेबसाइट)",
    "vision_point_2": "लाखों तक पहुँचने वाले विज्ञापन",
    "vision_point_3": "कागज रहित डिजिटल समाधान",
    "vision_card_title": "डिजिटल बदलाव",
    "vision_card_desc": "भौतिक सीमाओं को हटाएं। दुनिया भर से ग्राहक प्राप्त करें।",
    "services_title": "हम क्या करते हैं?",
    "services_subtitle": "आपके व्यवसाय के लिए सभी डिजिटल उपकरण एक ही छत के नीचे।",
    "svc_web_title": "वेब विकास",
    "svc_web_desc": "तेज, आधुनिक और कन्वर्जन-केंद्रित साइटें जो सभी उपकरणों पर चलती हैं।",
    "svc_qr_title": "डिजिटल बिजनेस कार्ड (NFC & QR)",
    "svc_qr_desc": "सेकंड में जानकारी साझा करें। कागज की बर्बादी खत्म करें।",
    "tag_popular": "बेहद लोकप्रिय",
    "svc_app_title": "मोबाइल ऐप",
    "svc_app_desc": "विचार आपकी जेब में। iOS और Android के लिए कस्टम ऐप।",
    "svc_logo_title": "लोगो और ब्रांड पहचान",
    "svc_logo_desc": "एक यादगार छवि डिजाइन करें जिसे ग्राहक तुरंत पहचान सकें।",
    "svc_content_title": "AI सामग्री और सोशल मीडिया",
    "svc_content_desc": "AI के साथ पेशेवर सामग्री बनाएं और अपने सोशल मीडिया का प्रबंधन करें।",
    "svc_auto_title": "ई-कॉमर्स और स्वचालन",
    "svc_auto_desc": "रूटिन कार्यों को रोबोट पर छोड़ दें।",
    "svc_gumroad_title": "डिजिटल उत्पाद",
    "svc_gumroad_desc": "सैकड़ों तैयार उत्पादों तक पहुंच प्राप्त करें।",
    "svc_gumroad_cta": "सभी उत्पाद देखें →",
    "process_title": "हम कैसे काम करते हैं?",
    "step_1_title": "विचार और योजना",
    "step_1_desc": "हम आपकी आवश्यकताओं को सुनते हैं और समाधान निर्धारित करते।",
    "step_2_title": "डिजाइन और विकास",
    "step_2_desc": "आपकी मंजूरी के बाद हम कोडिंग करते हैं।",
    "step_3_title": "लॉन्च और सपोर्ट",
    "step_3_desc": "हम प्रोजेक्ट वितरित करते हैं और प्रशिक्षण प्रदान करते हैं।",
    "footer_tagline": "व्यवसाय बढ़ाने के सभी डिजिटल समाधान यहाँ हैं।",
    "footer_links_title": "त्वरित लिंक",
    "footer_link_services": "सेवाएं",
    "footer_link_process": "प्रक्रिया",
    "footer_link_contact": "संपर्क",
    "assist_header": "नेक्सियॉन्ड डिजिटल असिस्टेंट",
    "assist_initial": "नमस्ते! मैं नेक्सियॉन्ड असिस्टेंट हूँ। हम अपने नए जेनरेशन वर्कफ़्लो से ऐसे प्रोजेक्ट्स 1-2 दिन में डिलीवर करते हैं जिन्हें दूसरे 4 हफ़्ते में पूरा नहीं कर पाते। आप हमारी स्पीड के साथ कहाँ से शुरू करना चाहेंगे?",
    "assist_opt_web": "तेज़ वेबसाइट (24-48 घंटे)",
    "assist_opt_card": "डिजिटल बिज़नेस कार्ड",
    "assist_opt_app": "मोबाइल एप्लीकेशन",
    "assist_opt_logo": "ब्रांड डिज़ाइन",
    "assist_opt_content": "तेज़ कंटेंट क्रिएशन",
    "assist_opt_price": "टाइम और डिलीवरी",
    "assist_opt_why": "नेक्सियॉन्ड क्यों?",
    "assist_opt_quality": "क्या स्पीड क्वालिटी पर असर डालती है?",
    "assist_opt_contact": "कॉन्टैक्ट करें हम",
    "assist_res_web": "एक वेबसाइट किसी दुकान की डिजिटल ब्रांच होती है, लेकिन हम इसे बनाते समय आपको हफ़्तों तक इंतज़ार नहीं करवाते। हम 2 दिनों के अंदर लेटेस्ट टेक्नोलॉजी के साथ आपकी Google-कम्पैटिबल, हाई-कन्वर्ज़न साइट लॉन्च करते हैं।",
    "assist_res_businesscard": "डिजिटल बिज़नेस कार्ड से मिलें: QR कोड टेक्नोलॉजी से कुछ ही सेकंड में अपने कॉन्टैक्ट्स में जोड़ें। एक शानदार और 10 गुना तेज़ नेटवर्किंग सॉल्यूशन जो कागज़ की बर्बादी को खत्म करता है।",
    "assist_res_app": "हम आपके आइडियाज़ को iOS और Android प्लेटफ़ॉर्म पर बिजली की स्पीड से लाते हैं। मुश्किल प्रोसेस को ऑप्टिमाइज़ करके, हम आपके प्रोफ़ेशनल मोबाइल एप्लिकेशन को कुछ ही दिनों में टेस्ट ड्राइव के लिए तैयार कर देते हैं।",
    "assist_res_logo": "अपनी ब्रांड पहचान बनाते समय आपको रिवीजन के लिए दिनों तक इंतज़ार करने की ज़रूरत नहीं है। हम अपने नेक्स्ट-जेनरेशन डिज़ाइन विज़न के साथ मॉडर्न, यादगार और इंडस्ट्री-लीडिंग डिज़ाइन जल्दी से पूरे करते हैं।",
    "assist_res_content": "डिजिटल दुनिया में आपके ब्रांड को कुछ ही सेकंड में नोटिस किया जाना चाहिए। हम आपके सोशल मीडिया कंटेंट और SEO स्ट्रेटेजी को पब्लिकेशन के लिए तैयार करते हैं, जबकि आपके कॉम्पिटिटर अभी भी प्लानिंग स्टेज में है। हमारी 10x प्रोडक्शन पावर के साथ, आप हमेशा एक कदम आगे रहते हैं।",
    "assist_res_fiyat": "हमारी कीमतें प्रोजेक्ट के स्कोप के हिसाब से तय होती हैं, लेकिन हमारी स्पीड की वजह से, हम 'ऑपरेशनल कॉस्ट' का फ़ायदा आपको देते हैं। दूसरे लोग जो काम 3 हफ़्ते में करते हैं, उसकी कॉस्ट उस एफिशिएंसी के सामने बहुत कम है जो हम 2 दिन में डिलीवर करते हैं।",
    "assist_res_why": "क्योंकि हम 2026 स्टैंडर्ड के हिसाब से काम करते हैं। जहाँ ट्रेडिशनल एजेंसियां ​​पुराने प्रोसेस में समय बर्बाद करती हैं, वहीं हम अपने ऑप्टिमाइज़्ड डिजिटल वर्कफ़्लो के साथ प्रोजेक्ट को 10 गुना तेज़ी से पूरा करते हैं।",
    "assist_res_quality": "बिल्कुल नहीं। हमारी स्पीड जल्दबाज़ी से नहीं, बल्कि हमारे प्रोसेस को पूरी तरह से ऑप्टिमाइज़ करने से आती है। हर प्रोजेक्ट डिलीवरी से पहले हमारे क्वालिटी स्टैंडर्ड के हिसाब से 3-स्टेज क्वालिटी कंट्रोल चेक से गुज़रता है।",
    "assist_res_contact": "अभी काम करने का सही समय है। nexyond@gmail.com या फ़ॉर्म के ज़रिए हमसे संपर्क करें, और आज ही शुरू करें!",
    "stat_customers": "ग्राहक वृद्धि",
    "stat_response": "प्रतिक्रिया समय",
    "stat_projects": "प्रोजेक्ट्स",
    "stat_satisfaction": "संतुष्टि",
    "work_title": "विस्तृत प्रोजेक्ट्स",
    "work_subtitle": "Nexyond Lab द्वारा बनाए गए कार्य।",
    "lab_title": "हमारे रेडी-मेड प्रोडक्ट्स",
    "nav_lab": "उत्पादों",
    "lab_subtitle": "हमारे स्पेशल पैकेज के साथ तुरंत अपनी डिजिटल पहचान बनाएं।",
    "lab_solution_01": "QR डिजिटल मेन्यू",
    "lab_solution_02": "QR, NFC सपोर्टेड डिजिटल बिज़नेस कार्ड",
    "lab_inspect": "इंस्पेक्ट ↗",
    "lab_menu_title": "QR डिजिटल मेन्यू",
    "lab_menu_desc": "आपके बिज़नेस के लिए 6 अलग-अलग प्रोफेशनल पैकेज वाले कॉन्टैक्टलेस और फास्ट QR मेन्यू सिस्टम।",
    "lab_card_title": "डिजिटल बिज़नेस कार्ड",
    "lab_card_desc": "3 अलग-अलग मॉडर्न पैकेज ऑप्शन के साथ QR या NFC के साथ अपनी कॉर्पोरेट पहचान को डिजिटल दुनिया में ले जाएं।",
    "lab_01": "6 पैकेज",
    "lab_02": "QR इंटीग्रेशन",
    "lab_03": "लाइव डेमो",
    "lab_11": "3 पैकेज",
    "lab_12": "QR और NFC इंटीग्रेशन",
    "lab_13": "नेक्स्ट जेनरेशन"
    }
} 

async function loadTranslations() {
    try {
        // translationsData değişkeni zaten script.js içinde en üstte tanımlı
        dictionary = translationsData; 
        setLanguage(currentLang); 
    } catch (error) {
        console.error("Çeviri hatası:", error);
    }
}

// 2. Proje fonksiyonu (Fetch SİLİNDİ)
async function loadProjects() {
    try {
        // projectDataRaw içindeki projects dizisini alıyoruz
        projectsData = projectDataRaw.projects; 
        renderProjects();
        showSlide(0);
    } catch (error) {
        console.error("Proje yükleme hatası:", error);
    }
}

// function renderProjects() {
//     const container = document.getElementById('project-container');
//     const dotsContainer = document.getElementById('project-dots');
//     if (!container || !dotsContainer) return;
    
//     container.innerHTML = '';
//     dotsContainer.innerHTML = '';

//     projectsData.forEach((project, index) => {
//         const slide = document.createElement('div');
//         slide.className = `project-slide absolute inset-0 transition-all duration-700 opacity-0 scale-95 pointer-events-none`;
//         slide.innerHTML = `
//             <div class="relative h-full w-full rounded-3xl overflow-hidden border border-white/5">
//                 <img src="${project.img_url}" class="w-full h-full object-cover" alt="Project">
//                 <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
//                     <h3 class="text-2xl md:text-4xl font-bold mb-3">${currentLang === 'tr' ? project.name_tr : project.name_en}</h3>
//                     <p class="text-gray-300 max-w-xl text-sm md:text-base">${currentLang === 'tr' ? project.desc_tr : project.desc_en}</p>
//                 </div>
//             </div>
//         `;
//         container.appendChild(slide);

//         const dot = document.createElement('button');
//         dot.className = `project-dot w-2 h-2 rounded-full bg-white/20 transition-all duration-300`;
//         dot.onclick = () => showSlide(index);
//         dotsContainer.appendChild(dot);
//     });
// }

function renderProjects() {
    const container = document.getElementById('project-container');
    const dotsContainer = document.getElementById('project-dots');
    if (!container || !dotsContainer) return;
    
    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    projectsData.forEach((project, index) => {
        const nameKey = `name_${currentLang}`;
        const descKey = `desc_${currentLang}`;
        const projectName = project[nameKey] || project['name_en'];
        const projectDesc = project[descKey] || project['desc_en'];

        const slide = document.createElement('div');
        slide.className = `project-slide absolute inset-0 transition-all duration-700 opacity-0 scale-95 pointer-events-none`;
        slide.innerHTML = `
            <div class="relative h-full w-full rounded-3xl overflow-hidden border border-white/5">
                <img src="${project.img_url}" class="w-full h-full object-cover" alt="Project">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <h3 class="text-2xl md:text-4xl font-bold mb-3">${projectName}</h3>
                    <p class="text-gray-300 max-w-xl text-sm md:text-base">${projectDesc}</p>
                </div>
            </div>
        `;
        container.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = `project-dot w-2 h-2 rounded-full bg-white/20 transition-all duration-300`;
        dot.onclick = () => showSlide(index);
        dotsContainer.appendChild(dot);
    });

    // --- KRİTİK EKLEME BURASI ---
    // Projeler render edildikten hemen sonra ilk slaytı gösteriyoruz
    setTimeout(() => {
        showSlide(currentProjectSlide); 
    }, 50); 
}

function setLanguage(lang) {
    if (!dictionary[lang]) return;
    currentLang = lang;
    const data = dictionary[lang];

    const label = document.getElementById('current-lang-label');
    if(label) label.textContent = lang;

    const langCodes = ['tr', 'en', 'zh', 'hi', 'es', 'ar', 'pt', 'fr', 'ru', 'ja', 'de', 'it'];
    
    langCodes.forEach(code => {
        const desktopBtn = document.getElementById('lang-' + code);
        if(desktopBtn) {
            desktopBtn.classList.remove('text-blue-500', 'bg-white/10', 'font-bold');
            desktopBtn.classList.add('text-gray-400');
        }
        
        const mobileBtn = document.getElementById('mobile-lang-' + code);
        if(mobileBtn) {
            mobileBtn.classList.remove('border-blue-500', 'text-blue-500', 'bg-blue-500/10');
            mobileBtn.classList.add('border-white/5', 'text-white', 'bg-white/5');
        }
    });

    const activeDesktop = document.getElementById('lang-' + lang);
    if(activeDesktop) {
        activeDesktop.classList.add('text-blue-500', 'bg-white/10', 'font-bold');
        activeDesktop.classList.remove('text-gray-400');
    }

    const activeMobile = document.getElementById('mobile-lang-' + lang);
    if(activeMobile) {
        activeMobile.classList.add('border-blue-500', 'text-blue-500', 'bg-blue-500/10');
        activeMobile.classList.remove('border-white/5', 'bg-white/5');
    }

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (data[key]) {
            if (key === 'vision_title' || key === 'hero_title_2') {
                el.innerHTML = data[key];
            } else {
                el.textContent = data[key];
            }
        }
    });

    renderProjects();
    resetAssistant();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.project-dot');
    if (!slides.length) return;

    slides.forEach((s, i) => {
        s.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
        s.classList.remove('opacity-100', 'scale-100');
        dots[i].classList.remove('bg-blue-500', 'w-6');
        dots[i].classList.add('bg-white/20');
        dots[i].style.width = "8px";
    });

    currentProjectSlide = (index + slides.length) % slides.length;
    slides[currentProjectSlide].classList.replace('opacity-0', 'opacity-100');
    slides[currentProjectSlide].classList.replace('scale-95', 'scale-100');
    slides[currentProjectSlide].classList.remove('pointer-events-none');
    
    dots[currentProjectSlide].classList.replace('bg-white/20', 'bg-blue-500');
    dots[currentProjectSlide].style.width = "24px";
    resetProjectInterval();
}

function nextProject() { showSlide(currentProjectSlide + 1); }
function prevProject() { showSlide(currentProjectSlide - 1); }
function resetProjectInterval() {
    if (projectInterval) clearInterval(projectInterval);
    projectInterval = setInterval(nextProject, 8000);
}

function toggleMenu() { document.getElementById('mobile-menu').classList.toggle('translate-x-full'); }

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50 && nav) nav.classList.add('glass');
    else if(nav) nav.classList.remove('glass');
});

const assistantModal = document.getElementById('assistant-modal');
const chatWindow = document.getElementById('chat-window');

function toggleAssistant() {
    assistantModal.classList.toggle('open');
    if(assistantModal.classList.contains('open')) resetAssistant();
}

function resetAssistant() {
    if (!dictionary[currentLang]) return;
    const msg = dictionary[currentLang]['assist_initial'];
    chatWindow.innerHTML = `<div class="chat-message message-bot">${msg}</div>`;
}

function handleOptionClick(optionKey) {
    if (!dictionary[currentLang]) return;
    const userText = dictionary[currentLang]['assist_opt_' + optionKey];
    const respText = dictionary[currentLang]['assist_res_' + optionKey];
    
    const uMsg = document.createElement('div');
    uMsg.className = 'chat-message message-user ml-auto max-w-[85%]';
    uMsg.textContent = userText;
    chatWindow.appendChild(uMsg);

    const bMsg = document.createElement('div');
    bMsg.className = 'chat-message message-bot mr-auto max-w-[85%]';
    bMsg.innerHTML = optionKey === 'contact' ? `${respText} <br><br> <a href="mailto:nexyond@gmail.com" class="text-blue-400 underline">nexyond@gmail.com</a>` : respText;
    chatWindow.appendChild(bMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function animateCounters() {
    const counters = [{id:'count1',t:87},{id:'count2',t:24},{id:'count3',t:150},{id:'count4',t:98}];
    counters.forEach(c => {
        let curr = 0;
        const el = document.getElementById(c.id);
        if(!el) return;
        const itv = setInterval(() => {
            curr += c.t/50;
            if(curr >= c.t) { el.textContent = c.t + '+'; clearInterval(itv); }
            else el.textContent = Math.floor(curr);
        }, 40);
    });
}

const canvas = document.getElementById('bg-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let width, height, particles = [];

function resize() {
    if(!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(100, 116, 139, 0.3)';
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}

function initParticles() {
    if(!canvas) return;
    particles = [];
    for (let i = 0; i < Math.min(window.innerWidth / 10, 100); i++) particles.push(new Particle());
}

function animate() {
    if(!ctx) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, idx) => {
        p.update(); p.draw();
        for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const d = Math.sqrt((p.x-p2.x)**2 + (p.y-p2.y)**2);
            if (d < 150) {
                ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - d/1500})`;
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => { resize(); initParticles(); });

// Uygulama Başlangıcı
// document.addEventListener('DOMContentLoaded', () => {
//     loadTranslations(); // Çevirileri yükle
//     loadProjects();     // Projeleri yükle
//     animateCounters();
//     resize(); 
//     initParticles(); 
//     animate();
// });

document.addEventListener('DOMContentLoaded', async () => {
    // Önce verileri yükle
    await loadTranslations();
    await loadProjects();

    // Sonra görselleri başlat
    if (typeof animateCounters === "function") animateCounters();
    resize(); 
    initParticles(); 
    animate();

    // Menü fonksiyonun adını script içinde bulamadım, 
    // eğer bir menü açma fonksiyonun varsa adını buraya ekle
    console.log("Nexyond başarıyla başlatıldı!");
});