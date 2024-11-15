const heading = document.createElement('h1');
heading.textContent = 'Страница запущена';
document.body.appendChild(heading);

// Получаем значение Referer
const referrer = document.referrer;

const isTelegram = Boolean(window.Telegram || window.Telegram?.WebView);

const text = document.createElement('pre');
text.textContent = `userAgent = ${navigator.userAgent};

vendor = ${navigator.vendor}

isTelegram = ${isTelegram}

appName = ${navigator.appName}
`;  

console.log(navigator)
console.log(window?.opener)

// // Проверяем, содержит ли реферер ссылку на Telegram
// if (referrer.includes('telegram.org') || referrer.includes('t.me')) {
//   text.textContent = 'Переход выполнен из Telegram';  
// } else {
//   text.textContent = 'Переход выполнен из браузера';  
// }

document.body.appendChild(text);
