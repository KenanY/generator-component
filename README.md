# generator-component

[![Build Status](https://secure.travis-ci.org/KenanY/generator-component.png?branch=master)](https://travis-ci.org/KenanY/generator-component)
[![Dependency Status](https://gemnasium.com/KenanY/generator-component.png)](https://gemnasium.com/KenanY/generator-component)

An opinionated Yeoman generator for [components](https://github.com/component).

## Getting started

``` bash
$ npm install yo -g
$ npm install generator-component
$ yo component
```

## Options

<table>
  <tr>
    <th>Flag</th>
    <th>Effect</th>
  </tr>
  <tr>
    <td><code>--skip-install</code></td>
    <td>Skips the automatic execution of `npm install` after scaffolding has finished.</td>
  </tr>
</table>

## Release notes

### 1.1.0

- `name` fields in `package.json` and `component.json` are now automatically
filled in
- Prevent Yeoman's default behavior of executing `bower install`
- Scaffold `README.md`
- Quotes now surround node versions in `.travis.yml`
- `--skip-install` flag