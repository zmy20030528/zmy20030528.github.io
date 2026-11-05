let language = 'en';
const button = document.getElementById('language');
function setLanguage(lang) {
 language = lang;
 document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
 document.querySelectorAll('[data-en][data-zh]').forEach(el => el.textContent = el.dataset[lang]);
 button.textContent = lang === 'en' ? 'EN / 中文' : 'English / 中文';
 button.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : '切换到英文');
 document.title = lang === 'en' ? 'Zhang Mingyang | Academic Homepage' : '张铭洋 | 个人学术主页';
}
button.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
setLanguage('en');
