# Структура конспектов Claude Code

Этот файл фиксирует структуру, по которой мы ведём конспекты. Его нужно обновлять при добавлении новых вебинаров, уровней и лекций.

## Короткая формула

`webinarN/levelN/lectureN` → `summary.txt` + `index.html` → в конце практика на 15–25 минут → практики вебинара отдельно → контрольные вопросы отдельно.

## Базовая структура

```text
src/main/
  index.html          # главная страница сайта
  webinar1/
    README.md
    CONTROL_QUESTIONS.md
    CONTROL_QUESTIONS.html
    level1/
      README.md
      lecture1/
        summary.txt
        index.html
      ...
    level2/
      README.md
      lecture1/
      ...
    practice/
      index.html
      summary.txt
  webinar2/
    README.md
    level3/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
      ...
    level4/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
      lecture2/
      lecture3/
      lecture4/
      lecture5/
    practice/
      index.html
      1-calculator/
        summary.txt
        index.html
      2-simulations/
        summary.txt
        index.html
  webinar3/
    README.md
    COVERAGE.md
    level5/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
        summary.txt
        index.html
      lecture2/
        summary.txt
        index.html
      lecture3/
        summary.txt
        index.html
      lecture4/
        summary.txt
        index.html
      lecture5/
        summary.txt
        index.html
    level6/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
        summary.txt
        index.html
      lecture2/
        summary.txt
        index.html
      lecture3/
        summary.txt
        index.html
      lecture4/
        summary.txt
        index.html
      lecture5/
        summary.txt
        index.html
    practice/
      summary.txt
      index.html
      locales.json
  webinar4/
    README.md
    COVERAGE.md
    level7/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
        summary.txt
        index.html
      lecture2/
        summary.txt
        index.html
      lecture3/
        summary.txt
        index.html
      lecture4/
        summary.txt
        index.html
      lecture5/
        summary.txt
        index.html
    level8/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
        summary.txt
        index.html
      lecture2/
        summary.txt
        index.html
      lecture3/
        summary.txt
        index.html
      lecture4/
        summary.txt
        index.html
      lecture5/
        summary.txt
        index.html
    practice/
      summary.txt
      index.html
      haiku-50-starter.zip
      starter/
        index.html
        server.js
        ...
  webinar5/
    README.md
    COVERAGE.md
    level9/
      README.md
      CONTROL_QUESTIONS.md
      CONTROL_QUESTIONS.html
      lecture1/
        summary.txt
        index.html
      lecture2/
        summary.txt
        index.html
      lecture3/
        summary.txt
        index.html
      lecture4/
        summary.txt
        index.html
      lecture5/
        summary.txt
        index.html
    practice/
      summary.txt
      index.html
  webinar6/
    README.md
    level10/
      README.md
      lecture1/
        summary.txt
        index.html
      lecture2/
        summary.txt
        index.html
      lecture3/
        summary.txt
        index.html
      lecture4/
        summary.txt
        index.html
```

## Правила

- Каждая лекция живёт в папке `webinarN/levelN/lectureN/`.
- У каждой лекции обязательно есть два синхронизированных файла: `summary.txt` и `index.html`.
- Локальная папка `lecture1` соответствует первой лекции уровня. В URL курса JavaRush она может называться `lecture01` (zero-padding), но в файловой структуре используем `lecture1`.
- В конце каждой лекции, обычно после раздела «Что запомнить» и перед футером, должна быть практика по этой лекции.
- Практика оформляется в обоих файлах:
  - в `summary.txt` — заголовок `## Практика (15–25 минут)`;
  - в `index.html` — секция `<section><h2>Практика (15–25 минут)</h2>...</section>`.
- Практика должна быть короткой: 15–25 минут, конкретные шаги, команды или промпты, критерии самопроверки.
- Для Git, permissions, секретов и других потенциально опасных действий используем только учебный scratch-проект и фейковые данные.
- Полное эталонное решение в лекцию не добавляем: практика должна оставаться практикой.
- Практики вебинара — отдельные capstone-задания в `webinarN/practice/`. Они не заменяют практику в конце каждой лекции и не дублируются в лекциях.
- Контрольные вопросы уровня живут отдельно: `webinar1/CONTROL_QUESTIONS.md`, `webinar2/level3/CONTROL_QUESTIONS.md`, `webinar2/level4/CONTROL_QUESTIONS.md`, `webinar3/level5/CONTROL_QUESTIONS.md`, `webinar3/level6/CONTROL_QUESTIONS.md`, `webinar4/level7/CONTROL_QUESTIONS.md`, `webinar4/level8/CONTROL_QUESTIONS.md`, `webinar5/level9/CONTROL_QUESTIONS.md`.

## Шаблон практики

```text
## Практика (15–25 минут)

**Цель:** ...

**Что сделать:**
1. ...
2. ...
3. ...

**Проверка:**
- ...
- ...
```

HTML-аналог:

```html
<section>
  <h2>Практика (15–25 минут)</h2>
  <p><strong>Цель:</strong> ...</p>
  <h3>Что сделать</h3>
  <ol>
    <li>...</li>
  </ol>
  <h3>Проверка</h3>
  <ul>
    <li>...</li>
  </ul>
</section>
```

## Текущее наполнение

- **Вебинар 1:** уровни 1–2, 10 лекций, практика вебинара, 30 контрольных вопросов. Аудит покрытия: [вебинар 1](webinar1/COVERAGE.md).
- **Вебинар 2:** уровень 3 — 5 лекций, уровень 4 — 5 лекций, практики `1-calculator` и `2-simulations`, 15 и 26 контрольных вопросов. Аудит покрытия: [вебинар 2](webinar2/COVERAGE.md).
- **Вебинар 3:** уровень 5 — 5 лекций (operational model, context selection, context budget, context pollution, session lifecycle) и 22 вопроса; уровень 6 — 5 лекций (длинные задачи, checkpoints/rewind, Git-first recovery, worktree, handoff и fresh reviewer) и 22 вопроса; практика — справочник локалей. Аудит покрытия: [вебинар 3](webinar3/COVERAGE.md).
- **Вебинар 4:** уровень 7 — лекции 1–5 (discovery, evidence-based Q&amp;A, `CODEBASE_INVENTORY.md`, dependency map, runtime flow и точки входа), 20 контрольных вопросов; уровень 8 — лекции 1–5 (карта API и интеграций; IDE, терминал и логи; subagents; AI-assisted documentation; docs-as-code review), 23 контрольных вопроса; практика — Haiku 50 (аудит чужого проекта и генератор хайку). Аудит покрытия: [вебинар 4](webinar4/COVERAGE.md).
- **Вебинар 5:** уровень 9 — лекции 1–5 (extension taxonomy; slash-команды; переход от prompt к skill; `SKILL.md`, метаданные и права; dynamic context и supporting files), 25 контрольных вопросов; практика — `/prompt-improve`. Аудит покрытия: [вебинар 5](webinar5/COVERAGE.md).
- **Вебинар 6:** уровень 10 — лекции 1–4 (plugin как упаковка workflow; выбор по категориям; scope, namespace и lifecycle; проверка авторства, capability surface и поддерживаемости); материалы дополняются.
- **Публикация:** главная страница сайта — `src/main/index.html`; сайт публикуется через GitHub Pages (`.github/workflows/pages.yml`).

## Добавление новой лекции

1. Создать `webinarN/levelN/lectureN/`.
2. Добавить `summary.txt` и `index.html` в едином стиле.
3. В конце обоих файлов добавить практику по шаблону.
4. Обновить `README.md` соответствующего вебинара и `levelN/README.md`, если он есть.
5. Проверить HTML-валидность и ссылки.
