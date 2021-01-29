### Hexlet tests and linter status:
[![Actions Status](https://github.com/Ivankalachikov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Ivankalachikov/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d921f7588f6d20544f12/maintainability)](https://codeclimate.com/github/Ivankalachikov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d921f7588f6d20544f12/test_coverage)](https://codeclimate.com/github/Ivankalachikov/frontend-project-lvl2/test_coverage)
![Linter Status](https://github.com/Ivankalachikov/frontend-project-lvl2/workflows/eslint/badge.svg)
![test Status](https://github.com/Ivankalachikov/frontend-project-lvl2/workflows/tests/badge.svg)

---

## Hexlet. Проект #2 - Вычислитель отличий.

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

**Возможности утилиты:**

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

**Использование в качестве утилиты:**

    gendiff -h

**Использование в качестве библиотеки:**

    import genDiff from '@hexlet/code';
        
    const diff = genDiff(filepath1, filepath2, [format]);
    console.log(diff);

---

**Examples:**

plain json - stylish format
[![asciicast](https://asciinema.org/a/9qI9czpNWsr0R0tUyurJ8Sfkj.svg)](https://asciinema.org/a/9qI9czpNWsr0R0tUyurJ8Sfkj)

plain yml - stylish format
[![asciicast](https://asciinema.org/a/iL76gkCTvXm2B2aG4UJbn2TEt.svg)](https://asciinema.org/a/iL76gkCTvXm2B2aG4UJbn2TEt)

nested json - stylish format
[![asciicast](https://asciinema.org/a/n6AJALbbrJtwweueW98OQnwIC.svg)](https://asciinema.org/a/n6AJALbbrJtwweueW98OQnwIC)

nested json - plain format output
[![asciicast](https://asciinema.org/a/YxAwIZdcAyjdiNeKvfw2uGSNY.svg)](https://asciinema.org/a/YxAwIZdcAyjdiNeKvfw2uGSNY)

nested json - json format output
[![asciicast](https://asciinema.org/a/mnbVPP6ER1rZaOr4N6aZOoM1z.svg)](https://asciinema.org/a/mnbVPP6ER1rZaOr4N6aZOoM1z)
