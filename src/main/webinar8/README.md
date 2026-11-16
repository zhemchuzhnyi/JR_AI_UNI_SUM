# Вебинар 8

**Ссылка:** https://ru-claude-code-08-07c0.javarush-university.workers.dev/#slide-1

## Содержание

### Уровень 12

- [Лекция 1 — Tools и permissions для subagent](level12/lecture1/index.html)
- [Лекция 2 — Scoped skills, MCP и memory](level12/lecture2/index.html)
- [Лекция 3 — Context isolation и worktree isolation](level12/lecture3/index.html)
- [Лекция 4 — Output contract агента](level12/lecture4/index.html)
- [Лекция 5 — Lifecycle и evaluation subagent’а](level12/lecture5/index.html)

Материалы уровня будут добавляться по мере разбора следующих лекций вебинара 8.

## План вебинара

- tools и least privilege — права под результат роли, а не «на всякий случай»;
- scoped skills, MCP и память — контур знаний агента;
- context isolation и worktree isolation — что именно защищаем;
- output contract — как принимать, возвращать и отклонять результат;
- оценка агента, failure modes и жизненный цикл до честного deprecated.

Сквозной пример — `.claude/agents/tester.md`: собрать агента, ограничить права, изолировать работу, принять результат и довести от шумной v0.1 до командной v0.3.

## Практика

- [Агент file2md: PDF, HTML и Excel → markdown](practice/index.html)

Capstone-задание: собрать агента, три Python-скрипта, `requirements.txt`, README с двумя интерфейсами и четыре демо-прогона.

## Статус

- Создана папка вебинара 8 и уровень 12.
- Добавлена ссылка на презентацию вебинара.
- Добавлена лекция 1 уровня 12: L1/L2-права, least privilege, tools для tester/reviewer и проверка changed files.
- Добавлена лекция 2 уровня 12: четыре слоя capability, scoped skills, MCP, memory и контур знаний tester/migration assistant.
- Добавлена лекция 3 уровня 12: context isolation, worktree isolation, `isolation: worktree`, `claude --worktree` и выбор изоляции под боль.
- Добавлена лекция 4 уровня 12: output contract, evidence, `[hypothesis]`, приёмка результата и контракты reviewer/tester.
- Добавлена лекция 5 уровня 12: evaluation, failure modes, маленькие кейсы, версии, CHANGELOG и deprecation.
- Добавлена практика вебинара 8: агент `file2md`, три скрипта, requirements, README и четыре демо-прогона.
- Уровень 12 собран: 5 лекций и практика file2md.
- Следующий шаг — контрольные вопросы по уровню 12 и аудит покрытия.
