const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

const readmePath = path.join(__dirname, 'README.md');
const template = `
# My Project

This README was last updated at {{date}}.
`;

const output = mustache.render(template, { date: new Date().toISOString() });

fs.writeFileSync(readmePath, output, 'utf8');
