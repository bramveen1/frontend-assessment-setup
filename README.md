# Interview setup check

Thanks for coming to our technical interview! This tiny project checks that your laptop is ready.
It uses exactly the same packages as the exercise you'll get on the day (Next.js, React, Bun), so
once this works, setup on the day takes a minute.

Use your own laptop, editor and OS (macOS, Linux and Windows all work), with your usual tools,
including any AI assistant you normally use.

## What you need

- `git`
- [Bun](https://bun.sh/docs/installation) 1.4 or newer. Any of these works:
  - macOS / Linux: `curl -fsSL https://bun.sh/install | bash` or `brew install oven-sh/bun/bun`
  - Windows (PowerShell): `powershell -c "irm bun.sh/install.ps1 | iex"`
  - Anywhere with Node.js: `npm install -g bun`
- Your editor or IDE of choice

You don't need Node.js, a database or Docker.

## Run the check

```bash
bun install
bun test
bun run dev                              # then open http://localhost:3333/ping
```

You're ready when `bun test` reports **3 pass** and the ping page shows "Status: ok".

If anything fails, just email us the error. We'd rather fix it before the interview than during it.

## On the day

Please arrive 15 minutes early. We'll get you on the wifi and you'll clone the exercise repository
then. You don't need to prepare anything else.
