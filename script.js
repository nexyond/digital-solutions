const translations = {
    en: {
        title: "Nexyond | Digital Solutions",
        nav: {
            services: "Services",
            softwares: "Software & Tools",
            products: "Digital Products",
            ai_models: "Our AI Models",
            contact: "Contact"
        },
        hero: {
            title_part1: "Beyond the ",
            title_part2: "Next.",
            subtitle: "We build the future today with Software, Design, and Artificial Intelligence.",
            cta: "Get Started"
        },
        services: {
            title: "What We Do",
            item1_title: "Software & Mobile Application",
            item1_desc: "Scalable, high-performance custom solutions for iOS, Android, and Web.",
            item2_title: "UI/UX Design",
            item2_desc: "User-centric, aesthetic, and functional interface designs.",
            item3_title: "Brand Design",
            item3_desc: "Logo, Business Card, and Corporate Identity work.",
            item4_title: "Artificial Intelligence Solutions",
            item4_desc: "Prompt engineering, AI character development, and automation systems."
        },
        softwares: {
            title: "Software & Tools",
            item1_title: "QR Code Generator",
            item1_desc: "Quickly convert any text or link into a customizable QR code.",
            item2_title: "AI Text Summarizer",
            item2_desc: "Effortlessly condense long articles or documents into concise summaries.",
 
            item3_title: "Unit Converter",
            item4_title: "Color Palette Generator",
            item5_title: "Image Resizer & Compressor",
            item6_title: "Code Formatter & Beautifier",
            item7_title: "JSON / XML Viewer & Formatter",
            item8_title: "URL Encoder & Decoder",
            item9_title: "Base 64 Encoder & Decoder",
            item10_title: "Text Case Converter",
            item11_title: "Password Strength Tester"
        },
        products: {
            title: "Digital Store",
            subtitle: "Latest E-Books, Prompt Libraries, and Design Resources.",
            cta: "View All on Gumroad ->"
        },
        product: {
            tag_photoset: "Photo Sets",
            tag_aistory: "AI Story Pack",
            tag_aiprompt: "AI Prompt Pack"
        },
        ai_models: {
            title: "Our AI Models",
            miray_desc: "Fashion & Travel & Cosplay",
            husamettin_desc: "Mathematics Teacher"
        },
        footer: {
            tagline: "Digital Solutions & Future Labs",
            email: "Email",
            copyright: "&copy; 2025 Nexyond Digital Solutions. All rights reserved."
        }
    },
    tr: {
        title: "Nexyond | Dijital Çözümler",
        nav: {
            services: "Hizmetler",
            softwares: "Yazılımlar & Araçlar",
            products: "Dijital Ürünler",
            ai_models: "Yapay Zeka Modellerimiz",
            contact: "İletişim"
        },
        hero: {
            title_part1: "Bir Sonrakinin ",
            title_part2: "Ötesi.",
            subtitle: "Yazılım, Tasarım ve Yapay Zeka ile geleceği bugünden inşa ediyoruz.",
            cta: "Hemen Başlayın"
        },
        services: {
            title: "Neler Yapıyoruz",
            item1_title: "Yazılım & Mobil Uygulama",
            item1_desc: "iOS, Android ve Web için ölçeklenebilir, yüksek performanslı özel çözümler.",
            item2_title: "UI/UX Tasarım",
            item2_desc: "Kullanıcı odaklı, estetik ve işlevsel arayüz tasarımları.",
            item3_title: "Marka Tasarımı",
            item3_desc: "Logo, Kartvizit ve Kurumsal Kimlik çalışmaları.",
            item4_title: "Yapay Zeka Çözümleri",
            item4_desc: "Prompt mühendisliği, yapay zeka karakter geliştirme ve otomasyon sistemleri."
        },
        softwares: {
            title: "Yazılımlar & Araçlar",
            item1_title: "QR Kod Oluşturucu",
            item1_desc: "Herhangi bir metni veya bağlantıyı hızlıca özelleştirilebilir bir QR koda dönüştürün.",
            item2_title: "YZ Metin Özetleyici",
            item2_desc: "Uzun makaleleri veya belgeleri zahmetsizce kısa özetlere yoğunlaştırın.",
            item3_title: "Birim Çevirici",
            item4_title: "Renk Paleti Oluşturucu",
            item5_title: "Görsel Boyutlandırıcı & Sıkıştırıcı",
            item6_title: "Kod Biçimlendirici & Güzelleştirici",
            item7_title: "JSON / XML Görüntüleyici & Biçimlendirici",
            item8_title: "URL Kodlayıcı & Çözücü",
            item9_title: "Base 64 Kodlayıcı & Çözücü",
            item10_title: "Metin Büyüklük/Küçüklük Dönüştürücü",
            item11_title: "Şifre Güç Testi"
        },
        products: {
            title: "Dijital Mağaza",
            subtitle: "En Yeni E-Kitaplar, Prompt Kütüphaneleri ve Tasarım Kaynakları.",
            cta: "Gumroad'da Tümünü Gör ->"
        },
        product: {
            tag_photoset: "Fotoğraf Setleri",
            tag_aistory: "YZ Hikaye Paketi",
            tag_aiprompt: "YZ Komut Paketi"
        },
        ai_models: {
            title: "Yapay Zeka Modellerimiz",
            miray_desc: "Moda & Seyahat & Cosplay",
            husamettin_desc: "Matematik Öğretmeni"
        },
        footer: {
            tagline: "Dijital Çözümler & Gelecek Laboratuvarları",
            email: "E-posta",
            copyright: "&copy; 2025 Nexyond Dijital Çözümler. Tüm hakları saklıdır."
        }
    }
};

let currentLang = 'en';

function getTranslation(key, lang) {
    const keys = key.split('.');
    let result = translations[lang];
    for (let i = 0; i < keys.length; i++) {
        if (!result || !result.hasOwnProperty(keys[i])) {
            return null;
        }
        result = result[keys[i]];
    }
    return result;
}

function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        if (translation) {
            if (element.parentElement && element.parentElement.tagName === 'H1' && key === 'hero.title_part1') {
                const nextSpan = element.querySelector('span[data-i18n="hero.title_part2"]');
                if (nextSpan) {
                    element.innerHTML = translation + nextSpan.outerHTML;
                } else {
                    element.textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });

    document.getElementById('lang-tr').classList.remove('text-white', 'hover:text-white');
    document.getElementById('lang-en').classList.remove('text-white', 'hover:text-white');
    document.getElementById('lang-tr').classList.add('hover:text-white', 'text-gray-400');
    document.getElementById('lang-en').classList.add('hover:text-white', 'text-gray-400');

    if (lang === 'tr') {
        document.getElementById('lang-tr').classList.add('text-white');
        document.getElementById('lang-tr').classList.remove('text-gray-400');
    } else {
        document.getElementById('lang-en').classList.add('text-white');
        document.getElementById('lang-en').classList.remove('text-gray-400');
    }
    
    currentLang = lang;
    document.documentElement.lang = lang;
}

function setLanguage(lang) {
    translatePage(lang);
    if (document.getElementById('mobile-menu').classList.contains('translate-x-0')) {
        toggleMenu();
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('-translate-x-full')) {
        menu.classList.remove('-translate-x-full');
    } else {
        menu.classList.add('-translate-x-full');
    }
}

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
});
