const defaultRequest = (req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "istek adresi tanimsiz" }));
  res.end();
};
module.exports = defaultRequest;
