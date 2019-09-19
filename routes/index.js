const express = require("express");
const router = express.Router();
const db = require("./db");


router.get("/obtenerHistorico", function (req, res) {
	db.get().then((result) => {
		res.send(result);
	});
});


router.post("/enviarHistorico", function (req, res) {
	const pet = req.body;
	db.insert(pet).then(() => {
		res.send();
	}
	);
});

router.get("/borrarHistorico", function (req, res) {
	db.delete().then(()=>{
		res.send();
	});
});

module.exports = router;
