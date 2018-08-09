const mjml = require('mjml');
const fs = require('fs');
const nunjucks = require('nunjucks');

const template = fs.readFileSync('./index.mjml', 'utf8');


// Nunjucks first
const interpolated = nunjucks.renderString(template, { event: { title: 'My Flyer Event'} });
const mjmlResult = mjml(interpolated);
// console.log(interpolated);
// console.log(mjmlResult.html);

// MJML first
const mjmlResult2 = mjml(template);
const interpolated2 = nunjucks.renderString(mjmlResult2.html, { event: { title: 'My Flyer Event'} });
// console.log(mjmlResult2.html);
// console.log(interpolated2);


console.log(mjmlResult.html.length);
console.log(interpolated2.length);

// Either order has the same output
console.log(interpolated2 === mjmlResult.html);
