# The One-Line Laugh

[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Yetu89/one-line-laugh-01/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Yetu89/one-line-laugh-01/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for the [make.fun](https://make.fun) bounty **The One-Line Laugh**
([bounty page](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)): one funny line, at most
200 characters, any topic. Free entry; top three lines take $2 / $2 / $1.

## The line

> I told my password manager to remember everything, and now neither of us can get into my bank account.

(102 characters, one sentence, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-line-laugh-out node main.ts
```

The program validates the text is 1–200 characters before writing it.

## License

MIT — see [LICENSE](LICENSE).
