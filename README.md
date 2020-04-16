
<p >
<a href="https://www.npmjs.com/package/markdown-metadata-parser"><img src="https://img.shields.io/npm/v/markdown-metadata-parser.svg?style=flat" alt="npm version"></a>
</p>

## Installation

```bash
yarn add markdown-metadata-parser
```

or

```bash
npm install markdown-metadata-parser --save
```

## Usage

```Javascript
var parser = require('markdown-metadata-parser');

var md = `
---
title: The title
name: The name
order: 100 
---

# This is a markdown title
`

var metadata = parser.parseMarkdownMetadata(mardown);
```