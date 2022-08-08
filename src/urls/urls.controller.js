const urls = require("../data/urls-data");
let lastUrlId = urls.reduce((maxId, url) => Math.max(maxId, url.id), 0);

//check property
const checkProperty = (req, res, next) => {
  const { data: { href } = {} } = req.body;
  if (href) {
    return next();
  }
  next({ status: 400, message: "href" });
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

//read all urls
const list = (req, res) => {
  res.json({ data: urls });
};

module.exports = {
  create: [checkProperty, create],
  list,
};
