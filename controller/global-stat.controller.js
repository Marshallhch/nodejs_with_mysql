const { GlobalStat } = require("../database"); // GlobalStat 가져오기
const { wrapWithErrorHandler } = require("../util");

// finding data
async function getAll(req, res) {
  const result = await GlobalStat.findAll();
  res.status(200).json({ result });
}

// insert or update data
async function insertOrUpdate(req, res) {
  const { cc, date } = req.body;
  if (!cc || !date) {
    res.status(400).json({ error: "cc and date are required" });
    return;
  }

  // counting numbers of data that fit the conditions(contry code and date)
  const count = await GlobalStat.count({ where: { cc, date } });

  if (count === 0) {
    await GlobalStat.create(req.body);
  } else {
    await GlobalStat.update(req.body, { where: { cc, date } });
  }

  res.status(200).json({ result: "success" });
}

// delete data
async function remove(req, res) {
  const { cc, date } = req.body;
  if (!cc || !date) {
    res.status(400).json({ error: "cc and date are required" });
    return;
  }

  await GlobalStat.destroy({
    where: {
      cc,
      date,
    },
  });

  res.status(200).json({ result: "success" });
}

module.exports = wrapWithErrorHandler({
  getAll,
  insertOrUpdate,
  remove,
});
