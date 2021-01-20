const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://j000sh.com');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('.navigation-link');
  await percySnapshot('homepage');
});

