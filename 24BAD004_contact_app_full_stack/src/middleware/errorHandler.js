const notFound = (req, res) => {
  res.status(404).json({ success: false, message: "Route not found: " + req.method + " " + req.originalUrl });
};

const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: "Validation failed", errors });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({ success: false, message: field + " already exists" });
  }

  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ success: false, message: "Invalid JSON in request body" });
  }

  console.error(err);
  res.status(500).json({ success: false, message: "Internal server error" });
};

module.exports = { notFound, errorHandler };