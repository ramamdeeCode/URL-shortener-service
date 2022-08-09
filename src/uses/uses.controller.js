const uses = require("../data/uses-data");

const list = (req, res) => {
  const { urlId } = req.param;
  res.json({
    data: uses.filter(
      urlId ? (use) => use.urlId === Number(urlId) : () => true
    ),
  });
};

//check if given use exists
const checkUsesExist = (req, res, next) => {
  const { useId } = req.params;
  const foundUse = uses.find((use) => use.id === Number(useId));
  if (foundUse) {
    res.locals.use = foundUse;
    next();
  } else {
    next({ status: 404, message: `Use id not found ${useId}` });
  }
};

//read single use
const read = (req, res) => {
  res.json({ data: res.locals.use });
};

//delete use
const destroy = (req, res) => {
  const { useId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  const deletedUseId = uses.splice(index, 1);
  res.sendStatus(204);
};

module.exports = {
  read: [checkUsesExist, read],
  delete: [checkUsesExist, destroy],
  list,
};
