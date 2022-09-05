# qr-common-uri

[![npm](https://img.shields.io/npm/v/qr-common-uri.svg)](https://www.npmjs.com/package/qr-common-uri)

QR codes can contain plain text as well as a variety of standardized [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)'s. Each URI's scheme can open commonly used applications on desktop and mobile devices.

A couple examples:

- `mailto:...` - opens the devices email client with auto-populated fields.
- `tel:...` - opens the devices phone app with the number specified either pre-filled or calling.

The format and parameters of each scheme isn't clear and the documentation of which is a bit scattered especially schemes valid for use in QR codes. This package provides utility functions for generating these URIs without having to research their formats and valid parameters.

Many of the functions in this package reference schemes from https://github.com/zxing/zxing/wiki/Barcode-Contents.

## Install

#### npm

```bash
npm install qr-common-uri
```

#### yarn

```bash
yarn add qr-common-uri
```

#### pnpm

```bash
pnpm install qr-common-uri
```
