# Вебинар 8

**Ссылка:** https://ru-claude-code-08-07c0.javarush-university.workers.dev/#slide-1

## Содержание

### Уровень 12

- [Лекция 1 — Tools и permissions для subagent](level12/lecture1/index.html)
- [Лекция 2 — Scoped skills, MCP и memory](level12/lecture2/index.html)

Материалы уровня будут добавляться по мере разбора следующих лекций вебинара 8.

## План вебинара

- tools и least privilege — права под результат роли, а не «на всякий случай»;
- scoped skills, MCP и память — контур знаний агента;
- context isolation и worktree isolation — что именно защищаем;
- output contract — как принимать, возвращать и отклонять результат;
- оценка агента, failure modes и жизненный цикл до честного deprecated.

Сквозной пример — `.claude/agents/tester.md`: собрать агента, ограничить права, изолировать работу, принять результат и довести от шумной v0.1 до командной v0.3.

## Практика

Практика вебинара — `file2md`: агент, который извлекает markdown из PDF, HTML и Excel через Python-скрипты. Она будет добавлена отдельной capstone-страницей после разбора лекций.

## Статус

- Создана папка вебинара 8 и уровень 12.
- Добавлена ссылка на презентацию вебинара.
- Добавлена лекция 1 уровня 12: L1/L2-права, least privilege, tools для tester/reviewer и проверка changed files.
- Добавлена лекция 2 уровня 12: четыре слоя capability, scoped skills, MCP, memory и контур знаний tester/migration assistant.
- Следующий шаг — следующие лекции уровня 12, затем контрольные вопросы и практика.
