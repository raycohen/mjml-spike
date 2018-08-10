const mjml = require('mjml');
const fs = require('fs');
const nunjucks = require('nunjucks');

const template = fs.readFileSync('./index.mjml', 'utf8');

// Nunjucks first - Nunjucks is happy to take any string and output any string
const interpolated = nunjucks.renderString(template, { event: { title: 'My Flyer Event'} });

// MJML second - mjml is going to validate that you're composing the various
// mj-elements properly, do some validation on values of properties passed to
// those elements, etc
const mjmlResult = mjml(interpolated);

console.log(mjmlResult.html);
