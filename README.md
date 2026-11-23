# The One-Line Laugh

Entry for the make.fun bounty **The One-Line Laugh**
(`u-ronigrv-the-one-line-laugh-7ccca46f`): one funny line, at most
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
