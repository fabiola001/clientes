//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (DataTypes, DataTypes) => {
    // usamos el DataTypes.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
    // Usamos type.DataTypes para definir el tipo de datos de cada atributo de la entidad 
    const Cliente = DataTypes.define("cliente", {
        id_cliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.STRING
        }, 
    });
    return Cliente;
};