// sitemap.js

const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

async function generateSitemap() {
  // Your Next.js pages, add them to this array
  const pages = [
    { url: "/", changefreq: "daily", priority: 1 },
  ];

  const smStream = new SitemapStream({ hostname: "https://siteocean.in" });

  pages.forEach((page) => {
    smStream.write(page);
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream).then((data) =>
    data.toString()
  );

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
