# Bun + HTMX + TailwindCSS example app

A simple example app using Bun and it's HTML server along with HTMX for interactivity and Tailwind + DaisyUI for styling.

- [TypeScript](https://www.typescriptlang.org)
- [Bun](https://bun.sh)
- [HTMX](https://htmx.org)
- [Tailwind](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [Docker](https://docker.com)
- [Fly.io](https://fly.io)

Source code can be found in `./src`. JSX components live in `./src/components`.

Components are converted to static strings and served as HTML to the browser. HTMX is used to add interactivity to the page as needed.

TailwindCSS classes can be given to any component and the `bun dev:tailwind` command will regenerate the CSS file when needed.

There is a very dumb/simple static file server in `./src/response.tsx` which takes any file in `./public` and serves it using the `Bun.file` helper. This probably shouldn't be used in any production capacity and instead you should use a static file server for these files, but it's here for demonstration purposes.

## Setup

Clone the repo and make sure you have Bun installed, then:

```sh
bun i
```

## Development

```sh
# Run dev server with hot reload (in one tab)
bun dev:server

# Run production server (in another tab)
bun dev:tailwind
```

Now open up <http://localhost:3000> to see the app running.

If you want a custom port or to enable dev mode, create a `.env` file:

```sh
PORT=3000
NODE_ENV="development"
```

## Production

Build a compiled version of the server for running in Bun and TalwindCSS classes:

```sh
bun build:tailwind
bun build:server
```

Now run the built production bundle:

```sh
bun start
```

## Deployment

This projet includes a Dockerfile and docker-compose.yml file so you can run anywhere Docker is supported.

Using Fly.io, you can deploy this by running:

```sh
flyctl launch
```

On subsequent changes, run:

```sh
flyctl deploy
```

## Credits

Put together by me, [Dana Woodman](https://danawoodman.com).

## License

MIT

Use it however you please. [Tweet me](https://twitter.com/danawoodman) if you do something cool with it 🤓
