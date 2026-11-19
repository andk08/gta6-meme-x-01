# gta6-meme-x-01 — agent notes

Entry for make.fun's "Post a GTA 6 meme on X" ($500, top 50 share it).
Entries close 2026-11-23T14:00:00Z; the result is due 2026-12-08.

## What the entry is

The post itself is the entry. A WANTED poster for Rockstar Games:
five wanted stars, a lineup mugshot of the Roman numeral VI, charges
("CRIME: 13 YEARS OF WAITING", "LAST SEEN: VICE CITY, LEONIDA") and
the make.fun ghost as the bounty hunter who collected the $100 reward.
The picture is `meme.png`; the draft post text is in `POST_TEXT.md`.

## The post

- Post from the public X account `@blacteamy0108`, kept public until
  the results are out.
- Post between the opening (2026-11-19T14:00:00Z) and the deadline.
- Text carries the bounty link, the play code
  `makefun-mascot-wreath-corridor` and #GTA6.
- `meme.png` is the first (and only) picture.
- Put the post's address in `POST.json` after posting.

## The program

`main.ts` (Node 22, standard library only) reads `POST.json`, checks
it names an https post address, and writes it to the output directory
byte for byte. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this meme

The dev board's top 10 is dominated by official-document memes
(invoice, parking citation, boarding pass, passport, bank statement)
with the "my AI agent paid it on make.fun" twist. A WANTED poster is
a document format none of them used, and it is GTA's own iconography:
five wanted stars plus VI reads as GTA in one second, no line items
to read. The reward twist fits make.fun itself — a bounty site — with
the ghost as the bounty hunter who collected it.
