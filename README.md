# Reaml Opinionated Starter

An Opinionated Starter for [Reaml](https://github.com/utkarshkukreti/reaml)
which includes some packages I frequently use:

1. [Preact](https://preactjs.com), a lighter, faster replacement for React.
2. [TypeScript](https://www.typescriptlang.org), for when you need to write typesafe code to interop with.
3. [TailwindCSS](https://tailwindcss.com), a utility-first CSS framework.
4. [Relude](https://github.com/reazen/relude), a more powerful standard library for BuckleScript.
5. [PurgeCSS](https://purgecss.com/), to remove unused TailwindCSS classes.

The total size of the generated HTML + JS + CSS of this app is 9kB gzipped.

```
$ cat dist/* | gzip | wc -c
    9443
```

## Setup

    $ yarn install

## Development

This will start `bsb`, `parcel`, `tsc` in watch mode:

    $ yarn start

## Production

This will build HTML/JS/CSS files into `dist/`.

    $ yarn build

## License

MIT
