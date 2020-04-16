var parser = require('../lib');

var md = `
---
title: The title
name: The name
order: 100 
---

# This is a markdown title
`
var metadata = parser.parseMarkdownMetadata(md);
