
const sitemap = require('sitemap');
const hostname = 'https://www.impic.tech';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/members', changefreq: 'monthly', priority: 1 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/registration', changefreq: 'monthly', priority: 0.8 },
  { url: '/project-registration', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
