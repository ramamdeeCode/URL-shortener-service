const urls = require("../data/urls-data");
const uses = require("../data/uses-data");
let lastUrlId = urls.reduce((maxId, url) => Math.max(maxId, url.id), 0);
//function to track urls
const trackUrl = (url) => {
  const newUse = {
    id: uses.length + 1,
    urlId: url.id,
    time: Date.now(),
  };
  uses.push(newUse);
};
//check property
const checkProperty = (req, res, next) => {
  const { data: { href } = {} } = req.body;
  if (href) {
    return next();
  }
  next({ status: 400, message: "href" });
};

//check if given url exists
const checkUrlExist = (req, res, next) => {
  const { urlId } = req.params;
  const foundUrl = urls.find((url) => url.id === Number(urlId));
  if (foundUrl) {
    res.locals.url = foundUrl;
    next();
  } else {
    next({ status: 404, message: `Url id not found ${urlId}` });
  }
};

//create new url
const create = (req, res) => {
  const { data: { href } = {} } = req.body;
  const newUrl = {
    href,
    id: ++lastUrlId,
  };
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
};
// update urls
const update = (req, res) => {
  const url = res.locals.url;
  const { data: { href } = {} } = req.body;

  //update urls
  url.href = href;
  res.json({ data: url });
};
//read all urls
const list = (req, res) => {
  res.json({ data: urls });
};

//read single url
const read = (req, res) => {
  trackUrl(res.locals.url);
  res.json({ data: res.locals.url });
  console.log(uses);
};

module.exports = {
  create: [checkProperty, create],
  read: [checkUrlExist, read],
  update: [checkUrlExist, checkProperty, update, update],
  checkUrlExist,
  list,
};
