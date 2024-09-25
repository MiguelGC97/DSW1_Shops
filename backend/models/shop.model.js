module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
      
      //Definimos una id para poder manejar mejor los objetos shop
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Incrementa automáticamente
        primaryKey: true // Define el campo como PK
      },

      address: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      }
    });
  
    return Shop;
  }