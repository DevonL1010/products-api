const { Sequelize } = require ('sequelize');
const{ user, database, password } = require ('../config/aws-config.js');


const seq = new Sequelize(database, user, password, {
    dialect: 'postgres',
    host: 'ec2-18-222-212-212.us-east-2.compute.amazonaws.com',
    port: 5432,
    define: {
      timestamps: false
    },
    logging: false
});

////create table for the first time
// seq.authenticate()
// .then(() => seq.sync())
// .catch((error) => console.log(error));

seq.authenticate()
.then(() => console.log('connected!'))
.catch((error) => console.log(error));

module.exports = seq;
