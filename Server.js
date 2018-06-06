var Sequelize = require('sequelize');
var connection = new Sequelize('sqlfun', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

const Dolphin = connection.define('dolphins', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  color: {
    type: Sequelize.STRING
  },
  birth_date: {
    type: Sequelize.DATE
  },
  height: {
    type: Sequelize.INTEGER
  }
});

// Dolphin.findAll().then(dolphins => {
//   console.log(dolphins)
// }, err => {
//   console.error(err)
// });


// const dolphin = Dolphin.build({ name: 'hi',color:"red",height:12,birth_date:new Date() });

// dolphin.save().then((data)=>{
//   console.log(data);
// } , (err)=>{
//   console.error(err)
// })

// Dolphin.create({ name: 'Roy', color: "gray", height: 11, birth_date: new Date()}).then((data) => {
//     console.log(data);
//   }, (err) => {
//     console.error(err)
//   })

// Dolphin.update({ name: "Amiti" },
//   {
//     where: {
//       name: "hi"
//     }
//   }).then((data) => {
//     console.log(data); // rows affected
//   }, (err) => {
//     console.error(err)
//   });

// var n =   Math.floor(Math.random() * (100 - 10) + 10);
// console.log(n);
 

// for(let i=0; i<=n; i++) {

//    Dolphin.create({ name: "Dolphin" + i, color: "gold", height: 12, birth_date: 2015}).then((data) => {
//        console.log(data);
//      }, (err) => {
//        console.error(err)
//      })
// }

// Dolphin.update({ name: "shark" },
//   {
//     where: {
//       name: "Dolphin1"
//     }
//   }).then((data) => {
//     console.log(data); // rows affected
//   }, (err) => {
//     console.error(err)
//   });

// Dolphin.destroy({
//     where: {
//         name:Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + 'olp' + '%')
//     }  
// }).then((data) => {
//     console.log(data)
// })

Dolphin.findAll().then(dolphins => {
  console.log(dolphins)
}, err => {
  console.error(err)
});


  




