const wordsInput = document.querySelector('#words');
const language = document.querySelector('#language');
const generate = document.querySelector('#generate');
const clear = document.querySelector('#clear');
const wasabi = document.querySelector('#wasabi');
const wasabiLevel = document.querySelector('#wasabi-level');
const haiku = document.querySelector('#haiku');
const error = document.querySelector('#error');
const historyList = document.querySelector('#history');

const STORAGE_KEY = 'haiku50.history';
let level = 0;

function readHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function renderHistory() {
  const items = readHistory();
  historyList.innerHTML = '';
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = `${item.language}: ${item.words.join(', ')} — ${item.haiku.replace(/\n/g, ' / ')}`;
    historyList.append(li);
  }
}

wasabi.addEventListener('click', () => {
  level = (level + 1) % 7;
  wasabiLevel.textContent = String(level);
});

clear.addEventListener('click', () => {
  wordsInput.value = '';
  haiku.textContent = 'Здесь появится хайку.';
  error.textContent = '';
  wordsInput.focus();
});

generate.addEventListener('click', async () => {
  error.textContent = '';
  const words = wordsInput.value.split(',').map((word) => word.trim()).filter(Boolean);
  if (words.length < 3 || words.length > 7) {
    error.textContent = 'Нужно от 3 до 7 ключевых слов.';
    return;
  }

  generate.disabled = true;
  try {
    const response = await fetch('/generate-haiku', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ words, language: language.value, wasabiLevel: level })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Сервер недоступен');
    haiku.textContent = data.haiku;
    const history = readHistory();
    history.unshift({ words, language: language.value, haiku: data.haiku });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 100)));
    renderHistory();
  } catch (e) {
    error.textContent = e.message || 'Не удалось сгенерировать хайку.';
  } finally {
    generate.disabled = false;
  }
});

renderHistory();
