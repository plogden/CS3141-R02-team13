module.exports = (sequelize, DataTypes) => {
    const TestTable = sequelize.define(
        "TestTable",
        {
            id: {
                type: DataTypes.INTEGER,
                field: "id",
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                searchable: true,
                alias: "ID",
                aliasValue: "id",
            },
            description: {
                type: DataTypes.STRING,
                field: "description",
                allowNull: true,
                searchable: true,
                alias: "Description",
                aliasValue: "description",
            },
        },
        {
            tableName: "TestTable",
            timestamps: false,
        },
    );

    return TestTable;
};
