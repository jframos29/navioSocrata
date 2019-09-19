const express = require('express');
const router = express.Router();
const db = require("./db");


router.get("/obtenerHistorico", function (req, res, next) {
  db.get().then((result) => {
    res.send(result);
  })
});


router.post("/enviarHistorico", function (req, res, next) {
  const pet = req.body;
  try{
  db.insert(pet).then(() => {
    res.send();
  }
  ).catch((err)=>{
  })}
  catch(err){
    throw err;
  }
});

router.get("/borrarHistorico", function (req, res, next) {
  db.delete().then(()=>{
    res.send();
  });
});

module.exports = router;
