// 1. HAREKETLİ ARKA PLAN (Devre Kartı Efekti)
document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.animated-bg');
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDelay = `-${Math.random() * 20}s`;
        line.style.opacity = Math.random() * 0.5 + 0.1;
        bg.appendChild(line);
    }
});

// 2. DİL DEĞİŞTİRME SİSTEMİ
let currentLang = 'tr'; // Başlangıç dili Türkçe

const langButton = document.getElementById('langButton');
const elementsToTranslate = document.querySelectorAll('[data-tr]');

// Tüm metinleri mevcut dile göre değiştirir
function updateTextContent(lang) {
    
    // Burası değişti: Dil Butonunu istenen formatta güncelle
    if (lang === 'tr') {
        langButton.textContent = '$changeLanguage >> ENGLISH';
    } else {
        langButton.textContent = '$dilDegistir >> TÜRKÇE';
    }
    
    // HTML dil etiketini güncelle
    document.documentElement.lang = lang;

    // title etiketini güncelle
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = lang === 'tr' ? 'Nexyond | Geleceğin Çözümleri' : 'Nexyond | Future Solutions';
    }

    // data-tr veya data-en attribute'u olan tüm elementleri güncelle
    elementsToTranslate.forEach(element => {
        const newText = element.getAttribute(`data-${lang}`);
        if (newText) {
            // ** içerikleri korumak için innerHTML kullanıyoruz
            element.innerHTML = newText;
        }
    });
}

// Dili değiştiren fonksiyon
window.toggleLanguage = function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateTextContent(currentLang);
}

// Sayfa yüklendiğinde metinleri başlangıç diline göre ayarla
updateTextContent(currentLang);
