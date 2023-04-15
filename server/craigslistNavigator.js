const puppeteer = require("puppeteer");

//REGEX functions
const extractPrice = function (string) {
  var m = /(?<=class="priceinfo">)(.*?)(?=<)/.exec(string);
  if (m) {
    return m[1];
  } else {
    return "No price was found for some reason.";
  }
};

const extractTitle = function (string) {
  var regex = /(?<=class="titlestring")(.*?)(?<=div)/.exec(string);
  if (regex) {
    return /(?<=html"\>)(.*)(?=<\/)/.exec(regex[1])[1];
  } else {
    return "No title was found for some reason.";
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

const extractURL = function (string) {
  var regex = /(?<=href=)(.*?)(?=>)/.exec(string);
  if (regex) {
    return regex[0];
  } else {
    console.log("No URL was found for some reason.");
  }
};

async function scraper() {
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

  const scrape = function () {
    let results = [];
    let yearXPrice = [];

    posts.map((post, index) => {
      let price = extractPrice(post);
      let title = extractTitle(post);
      let year = extractYear(title);
      let url = extractURL(post);

      //populates array for year/price plotting with chartjs
      //should move this logic into the front end later maybe?
      if (year) {
        yearXPrice.push({
          x: Number(year),
          y: Number(price.slice(1).replace(",", "")),
        });
      }

      //populates array with all data only if title includes miata
      if (title.toLowerCase().includes("miata")) {
        results.push({ year, price, title, url });
      }
    });

    // console.log(results);
    return yearXPrice;
  };

  let uniqArr = scrape(posts).filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.x === value.x && t.y === value.y)
  );

  await browser.close();
  return uniqArr;
}

scraper();

module.exports = {
  scraper: scraper,
};

// OLD CODE FOR GRABBING TEXT CONTENT ASYNCHRONOUSLY WITH PUPPETEER BELOW
// const postTitles = await page.evaluate(() =>
//   Array.from(
//     document.querySelectorAll('[class*="titlestring"]'),
//     (element) => element.textContent
//   )
// );

// const postPrices = await page.evaluate(() =>
//   Array.from(document.querySelectorAll('[class*="priceinfo"]'), (element) => {
//     return element.textContent;
//   })
// );
