import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://miami.craigslist.org/search/sss?query=miata#search=1~gallery~0~0"
  );

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  //line to screenshot page for troubleshooting purposes
  // await page.screenshot({ path: "./screenshot.jpg", type: "jpeg", fullPage: true });

  //needs to wait for page to load enough to have selectors on DOM lol.
  await page.waitForSelector(`[class*="titlestring"]`);

  //get text
  // const text = await (await element.getProperty("textContent")).jsonValue();

  const post = await page.$eval('[class*="gallery-card"]', (element) => {
    return element.innerHTML;
  });

  const posts = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll('[class*="gallery-card"]'),
      (element) => {
        return element.innerHTML;
      }
    )
  );

  const extractPrice = function (string) {
    var m = /(?<=class="priceinfo">)(.*?)(?=<)/.exec(string);
    if (m) {
      return m[1];
    } else {
      return "price not found";
    }
  };

  const extractTitle = function (string) {
    var regex = /(?<=class="titlestring")(.*?)(?=<)/.exec(string);

    //  var regex = /(?<=html>")(.*?)/.exec(string);
    if (regex) {
      return /(?<=html"\>)(.*)/.exec(regex[1])[1];
    } else {
      return "title not found";
    }
  };

  const extractYear = function (string) {
    var m = /\d{4}/.exec(string);
    if (m) {
      return m[0];
    } else {
      return false;
    }
  };

  let completeArr = []
  let titles = posts.map((post) => {
    let price = extractPrice(post);
    let title = extractTitle(post);
    let year = extractYear(title);
    if (year) {
      completeArr.push(year, price);
    } else {
      console.log(`Following post doesn't have a year: ${title}.`)
    }
  })

  console.log(completeArr)



  const postTitles = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll('[class*="titlestring"]'),
      (element) => element.textContent
    )
  );

  const postPrices = await page.evaluate(() =>
    Array.from(document.querySelectorAll('[class*="priceinfo"]'), (element) => {
      return element.textContent;
    })
  );

  await browser.close();
})();
