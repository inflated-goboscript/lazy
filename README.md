# lazy.gs

> utility macros and functions to reduce boilerplate 

This is a utility library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

...

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/lazy`

add lazy to your `inflator.toml` config:
```toml
[dependencies]
# ...
lazy = "https://github.com/FAReTek1/lazy"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/lazy`
2. `cd lazy`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
