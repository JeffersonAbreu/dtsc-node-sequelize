//Lucas Macedo

import { DataTypes, Model } from "sequelize";

class Breed extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome não pode ser nulo!" },
                    notEmpty: { msg: "O nome não pode ser vazio!" }
                }
            }
        }, { sequelize, modelName: "breed", tableName: "breeds" });
    }
    static associate(models) {
        this.belongsTo(models.district, { as: 'dog_size', foreignKey: { name: 'dog_sizeId', allowNull: false, validate: { notNull: { msg: 'O porte do cão deve ser preenchida!' } } } });
    }
}

export { Breed };