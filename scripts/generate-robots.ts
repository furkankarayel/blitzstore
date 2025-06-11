import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

function generateRobotsTxt() {
    const robotsTxt = `User-agent: *
Allow: /

# Disallow legal and policy pages
Disallow: /impressum
Disallow: /agb
Disallow: /datenschutz

# Sitemap location
Sitemap: ${process.env.PUBLIC_SHOP_URL}/sitemap.xml
`;

    fs.writeFileSync('.vercel/output/static/robots.txt', robotsTxt);
}

generateRobotsTxt(); 