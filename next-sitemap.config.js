/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://molefrog.com",
  generateRobotsTxt: true,
  output: "export",
  autoLastmod: false,
  generateIndexSitemap: false,
  exclude: ["/notes/lido-staking-widget-ux"],
  // ...other options
};
