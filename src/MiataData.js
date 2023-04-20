const MiataData = [
  {
    "x": 2010,
    "y": 5500,
    "url": "\"https://miami.craigslist.org/mdc/cto/d/lehigh-acres-2010-mazda-miata-mx5/7612156492.html\""
  },
  {
    "x": 1994,
    "y": 600,
    "url": "\"https://miami.craigslist.org/mdc/pts/d/boca-raton-1994-mazda-miata-for-parts/7604359358.html\""
  },
  {
    "x": 2012,
    "y": 16227,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/fort-lauderdale-2012-mazda-mx-miata-mx5/7612042178.html\""
  },
  {
    "x": 2003,
    "y": 12500,
    "url": "\"https://miami.craigslist.org/mdc/cto/d/miami-mazda-miata-2003/7611475671.html\""
  },
  {
    "x": 2007,
    "y": 8985,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/coral-springs-2007-mazda-miata-mx5-black/7610715410.html\""
  },
  {
    "x": 2007,
    "y": 12499,
    "url": "\"https://miami.craigslist.org/mdc/ctd/d/hallandale-2007-mazda-mx5-mx-mx-miata/7610681236.html\""
  },
  {
    "x": 2019,
    "y": 24995,
    "url": "\"https://miami.craigslist.org/mdc/ctd/d/miami-2019-mazda-mx-miata-mx5-grand/7609273957.html\""
  },
  {
    "x": 2011,
    "y": 20300,
    "url": "\"https://miami.craigslist.org/mdc/ctd/d/miami-beach-2011-mazda-mx-miata-grand/7608967629.html\""
  },
  {
    "x": 1995,
    "y": 9000,
    "url": "\"https://miami.craigslist.org/mdc/cto/d/miami-1995-mazda-mx-miata-edition/7608705447.html\""
  },
  {
    "x": 1996,
    "y": 10990,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/fort-lauderdale-speed1996-mazda-miata/7604893282.html\""
  },
  {
    "x": 2022,
    "y": 31490,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/fort-lauderdale-2022-mazda-mx-miata-mx5/7604643364.html\""
  },
  {
    "x": 2002,
    "y": 13900,
    "url": "\"https://miami.craigslist.org/brw/cto/d/pompano-beach-2002-mazda-miata/7604281647.html\""
  },
  {
    "x": 2018,
    "y": 26000,
    "url": "\"https://miami.craigslist.org/mdc/cto/d/miami-2018-mazda-mx5-miata/7603669578.html\""
  },
  {
    "x": 2001,
    "y": 650,
    "url": "\"https://miami.craigslist.org/brw/pts/d/fort-lauderdale-mazda-miata-mx-vvt-18l/7601804351.html\""
  },
  {
    "x": 2016,
    "y": 19982,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/fort-lauderdale-2016-mazda-mx-miata-mx5/7601289571.html\""
  },
  {
    "x": 2015,
    "y": 15998,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/pompano-beach-2015-mazda-cx-grand/7610662140.html\""
  },
  {
    "x": 2016,
    "y": 16998,
    "url": "\"https://miami.craigslist.org/brw/ctd/d/pompano-beach-2016-mazda-cx-sport-4dr/7610661923.html\""
  },
  {
    "x": 2013,
    "y": 10800,
    "url": "\"https://miami.craigslist.org/brw/cto/d/pompano-beach-2013-ford-mustang-v6/7607957562.html\""
  },
  {
    "x": 2015,
    "y": 10900,
    "url": "\"https://miami.craigslist.org/pbc/ctd/d/lake-worth-2015-hyundai-veloster-reflex/7604557689.html\""
  }
]

export default MiataData.filter(
  (value, index, self) =>
    index === self.findIndex((t) => t.x === value.x && t.y === value.y)
);


