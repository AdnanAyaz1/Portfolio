const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'public', 'resume.html');
  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.resolve(__dirname, 'public', 'Adnan_Ayaz_Resume.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('PDF generated: public/Adnan_Ayaz_Resume.pdf');
})();
