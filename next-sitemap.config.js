/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://molefrog.com",
  generateRobotsTxt: true,
  output: "export",
  autoLastmod: false,
  generateIndexSitemap: false,
  exclude: ["/notes/lido-staking-widget-ux"],
  additionalPaths: async (config) => {
    const etc = [
      "/etc/pid-neural-network/",
      "/etc/stateful-animations/",
      "/etc/rye-js/",
      "/etc/knife/",
    ];

    return etc.map((path) => ({
      loc: path,
      changefreq: "monthly",
      priority: 0.6,
    }));
  },
};
