const mongo = require("mongodb").MongoClient;
const url = "mongodb://"+process.env.usuario+":"+process.env.password+"@ds133746.mlab.com:33746/parcialweb";
const DB="parcialweb";
const COL="historico";

const insert = (a)=>{
  return new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
        if (err) throw err;
        const db = client.db(DB);
        const col = db.collection(COL);
        col.insert(a,(err) => {
          if (err) throw err;
          client.close();
          resolve();
        });
    })
  })
}

const get = (a={}) => {
  return new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      try {
        if (err) throw err;
        const db = client.db(DB);
        const col = db.collection(COL);
        col.find(a).toArray((err, result) => {
          if (err) throw err;
          client.close();
          resolve(result);
        });
      }
      catch (err) {
        reject(err);
      }
    })
  })
};

const deleteA = (a={}) => {
  return new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      try {
        if (err) throw err;
        const db = client.db(DB);
        const col = db.collection(COL);
        col.remove(a, (err) => {
          if (err) throw err;
          client.close();
          resolve();
        });
      }
      catch (err) {
        reject(err);
      }
    })
  })
};

module.exports = { insert:insert, get:get, delete:deleteA };