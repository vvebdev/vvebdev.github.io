const heading = document.createElement('h1');
heading.textContent = 'Страница запущена';
document.body.appendChild(heading);

function getAllCookiesAsString() {
  const cookies = document.cookie.split(';');
  let cookieString = '';

  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim(); // Убираем лишние пробелы
      if (cookie) { // Добавляем только непустые значения
          cookieString += `${cookie}; `; // Объединяем куки через точку с запятой и пробел
      }
  }

  return cookieString.trimEnd(); // Удаляем последний пробел и точку с запятой
}


// Получаем значение Referer
const referrer = document.referrer;

const isTelegram = Boolean(window.Telegram || window.Telegram?.WebView);

const text = document.createElement('pre');
text.textContent = `userAgent = ${navigator.userAgent};

vendor = ${navigator.vendor}

isTelegram = ${isTelegram}

appName = ${navigator.appName}

document = ${JSON.stringify(document)}
document?.referrer = ${JSON.stringify(document?.referrer)}

cookies = ${getAllCookiesAsString()}
`;  

console.log('navigator', navigator)

// // Проверяем, содержит ли реферер ссылку на Telegram
// if (referrer.includes('telegram.org') || referrer.includes('t.me')) {
//   text.textContent = 'Переход выполнен из Telegram';  
// } else {
//   text.textContent = 'Переход выполнен из браузера';  
// }

document.body.appendChild(text);
