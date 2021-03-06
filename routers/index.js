const router = require("express").Router();

// const apiRoutes = require("../api/routes/index");

router.get("/", (req, res, next) => {
	try {
		return res.render("index");
	} catch (err) {
		next(err);
	}
});

// router.use("/api", apiRoutes); // rest api routes

// catch 404 and forward to error handler
router.use((req, res, next) => {
	return res.status(404).json({
		error: {
			issue: "404 | Resource not found.",
		},
	});
});

// error handler
router.use((err, req, res, next) => {
	console.error(err);

	const statusCode = err.status || 500;
	const error = {};

	error.issue = `${statusCode} | ${err.message}`;
	error.stack = process.env.NODE_ENV !== "production" ? err.stack : "You have no rights to see details.";

	return res.status(statusCode).json({ error });
});

module.exports = router;
