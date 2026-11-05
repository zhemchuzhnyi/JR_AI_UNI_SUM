const http = require('http');
const fs = require('fs');
const path = require('path');

// TODO: этот ключ выглядит как настоящий, но это учебная заглушка.
// Найдите его во время аудита и замените чтением из process.env.
const OPENAI_API_KEY = 'sk-test-not-a-real-key';
const MODEL = 'gpt-5-nano-2025-08-07';
const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de', 'it', 'pt'];
const ROOT = __dirname;

function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveStatic(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const file = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  const target = path.join(ROOT, file);
  if (!target.startsWith(ROOT) || !fs.existsSync(target)) return false;
  const ext = path.extname(target);
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain; charset=utf-8' });
  fs.createReadStream(target).pipe(res);
  return true;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && serveStatic(req, res)) return;

  if (req.method !== 'POST' || req.url !== '/generate-haiku') {
    return json(res, 404, { error: 'Not found' });
  }

  let payload;
  try { payload = JSON.parse(await readBody(req)); } catch {
    return json(res, 400, { error: 'Некорректный JSON' });
  }

  const words = Array.isArray(payload.words) ? payload.words.filter(Boolean) : [];
  if (words.length < 3 || words.length > 7) {
    return json(res, 400, { error: 'Нужно от 3 до 7 ключевых слов' });
  }
  if (!SUPPORTED_LANGUAGES.includes(payload.language)) {
    return json(res, 400, { error: `Язык ${payload.language} пока не поддержан` });
  }

  // В стартере внешний вызов заменён заглушкой: при реальном ключе
  // здесь должен быть запрос к OpenAI API.
  const level = Number(payload.wasabiLevel) || 0;
  const spicy = level > 3 ? ' Острота: высокая.' : '';
  return json(res, 200, {
    haiku: `Слова: ${words.join(', ')}\nЯзык: ${payload.language}${spicy}\nЭто учебная заглушка.`
  });
});

server.listen(Number(process.env.PORT) || 3000, () => {
  console.log(`Haiku 50 starter: http://localhost:${process.env.PORT || 3000}`);
});
