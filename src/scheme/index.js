const Sequelize = require('sequelize');

const { 
  DB_SCHEMA,
  DB_USER,
  DB_PASSWORD,
  DB_ENDPOINT,
  DB_DIALECT,
  DB_PORT } = process.env

/** Constante con la instancia de Sequelize asociada a la base de datos */
const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PASSWORD, {
  host: DB_ENDPOINT,
  dialect: DB_DIALECT,
  port: DB_PORT,
  ssl: true
});

const Model = require('./model')(sequelize, Sequelize)

sequelize.sync(/* { force: true } */);

async function find(email, password) {
  return new Promise((resolve, reject) => {
    (Model.findAll({
      where: {
        email: email,
        password: password
      }
    }).then(r => {
      resolve(r[0])
    })
      .catch((e) => {
        reject(e)
      })
    )
  })
}

async function findOne(id) {
  return new Promise((resolve, reject) => {
    (Model.findAll({
      where: {
        id: id
      }
    }).then(r => {
      resolve(r[0])
    })
      .catch((e) => {
        reject(e)
      })
    )
  })
}

async function insert(email, password) {
  return new Promise((resolve, reject) => {
    Model.create({      
      email: email,
      password: password
    }).then(r => {
      resolve(r);
    }).catch(e => {
      reject(e)
    })
  })
}

async function update(email, password) {
  return new Promise((resolve, reject) => {
    Model.update(
      {
        answer: password
      },
      { where: { email: email } }
    ).then(() => {
      resolve(`${email} Actualizado`);
    }).catch(e => {
      reject(e)
    })
  })
}

/* module.exports.sequelize = sequelize
 */
module.exports = { find, insert, update, findOne }