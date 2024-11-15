const heading = document.createElement('h1');
heading.textContent = 'Страница запущена';
document.body.appendChild(heading);

// Получаем значение Referer
const referrer = document.referrer;

const text = document.createElement('pre');
text.textContent = `userAgent = ${navigator.userAgent};

vendor = ${navigator.vendor}`;  

console.log(navigator)

// // Проверяем, содержит ли реферер ссылку на Telegram
// if (referrer.includes('telegram.org') || referrer.includes('t.me')) {
//   text.textContent = 'Переход выполнен из Telegram';  
// } else {
//   text.textContent = 'Переход выполнен из браузера';  
// }

document.body.appendChild(text);
