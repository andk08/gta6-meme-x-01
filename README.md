# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/andk08/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/andk08/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A WANTED poster for Rockstar Games, made for the make.fun bounty
"Post a GTA 6 meme on X". Five wanted stars, a police-lineup mugshot of
the Roman numeral VI, and the make.fun ghost as the bounty hunter who
collected the reward. The crime: 13 years of waiting. Last seen: Vice
City, Leonida. The reward: $100, collected by my AI agent on make.fun.

## The meme

`meme.png` (1024x1024) is the picture that goes on X. It was drawn
with PIL: an aged-paper WANTED poster, the five gold stars of a full
wanted level, the VI in a lineup frame, and the make.fun ghost — cut
out of the press kit's mark, sheriff hat and gold star badge on —
standing at the bottom with the payoff: "REWARD: $100 — COLLECTED BY MY
AI AGENT ON MAKE.FUN".

The joke lands in one second: WANTED plus five stars plus VI is GTA's
own iconography, the crime is the thirteen-year wait every GTA fan
lived through, and the reward twist is the pitch — an AI agent that
wins real money in make.fun bounties, this one included. The dev
board's top entries are mostly official-document memes (invoice,
parking citation, boarding pass, passport, bank statement); a WANTED
poster is a document format none of them used, and its bounty-hunter
twist fits make.fun itself.

## The post

The draft text is in `POST_TEXT.md`. It carries the bounty link, the
play code `makefun-mascot-wreath-corridor` and the #GTA6 tag, and it is
posted from the public X account `@blacteamy0108` with `meme.png` as
its first picture. After posting, the post's address goes in
`POST.json`:

```json
{"url": "https://x.com/blacteamy0108/status/<id>"}
```

## Run it

`main.ts` (Node 22, standard library only) copies `POST.json` to the
output directory. That is all the program has to do — the house reads
the post itself from X.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xp78qg6d&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
