# JR_AI_UNI_SUM

Учебные конспекты курса **Claude Code** от JavaRush: вебинары → уровни → лекции.

Для каждой лекции есть текстовый конспект `summary.txt` и HTML-версия `index.html`. В конце каждой лекции — короткая практика на 15–25 минут. Отдельно лежат практики вебинаров и контрольные вопросы по уровням.

## Что внутри

- **Вебинар 1** — уровни 1–2, 10 лекций, практика вебинара, 30 контрольных вопросов.
- **Вебинар 2** — уровень 3 (5 лекций), уровень 4 (лекция 1), практики «калькулятор» и «симуляции», контрольные вопросы уровня 3.

## Навигация

- [Вебинар 1](src/main/webinar1/README.md)
- [Вебинар 2](src/main/webinar2/README.md)
- [Структура и правила ведения конспектов](src/main/README.md)
- [Skill для работы с лекциями](.opencode/skills/claude-code-lectures/SKILL.md)

## Публикация

Основной вариант — **GitHub Pages**. Репозиторий уже публичный, workflow готов; осталось один раз включить Pages в настройках.

Дополнительно остаётся **Netlify** — как альтернатива, если понадобится другой хостинг.

В репозитории уже есть `netlify.toml`:

```toml
[build]
  command = "true"
  publish = "src/main"
```

Подключение:

1. Открыть [app.netlify.com](https://app.netlify.com/) → **Add new site** → **Import an existing project**.
2. Выбрать GitHub и разрешить Netlify доступ к репозиторию `JR_AI_UNI_SUM`.
3. Оставить build command пустым, publish directory — `src/main` (подхватится из `netlify.toml`).
4. Нажать **Deploy**.

После деплоя Netlify выдаст публичный URL вида `https://<name>.netlify.app/`. Репозиторий при этом может оставаться приватным.

Если не хочется подключать GitHub: можно перетащить на [Netlify Drop](https://app.netlify.com/drop) zip-архив с содержимым `src/main` — тогда сайт тоже будет публичным, но обновлять его придётся вручную.

## GitHub Pages

Сайт публикуется через [`.github/workflows/pages.yml`](.github/workflows/pages.yml):

https://zhemchuzhnyi.github.io/JR_AI_UNI_SUM/

Нужно один раз выбрать **Settings → Pages → Build and deployment → Source: GitHub Actions**, после чего запустить workflow **Deploy lecture notes to GitHub Pages** в разделе Actions.

## Структура

```text
src/main/
  webinar1/
    level1/lecture1..5/
    level2/lecture1..5/
    practice/
  webinar2/
    level3/lecture1..5/
    level4/lecture1/
    practice/
      1-calculator/
      2-simulations/
```

Локальная папка `lecture1` соответствует URL `lecture01`. На сайте номер лекции может отображаться на единицу меньше; в репозитории используется локальная нумерация.

## Практики

- В конце каждой лекции — короткое упражнение с целью, шагами и самопроверкой.
- Для Git, permissions и работы с секретами используются только учебные репозитории и фейковые данные.
- Практики вебинаров — отдельные capstone-задания, они не заменяют практику в конце лекции.

## Контрольные вопросы

- [Вебинар 1 — 30 вопросов](src/main/webinar1/CONTROL_QUESTIONS.md)
- [Вебинар 2, уровень 3 — 15 вопросов](src/main/webinar2/level3/CONTROL_QUESTIONS.md)
