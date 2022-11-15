module.exports = (sequelize, DataTypes) => {
	const Location_Types = sequelize.define(
		"Location_Types",
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
			location_id: {
				type: DataTypes.INTEGER,
				field: "location_id",
				allowNull: false,
				searchable: true,
				alias: "Location ID",
				aliasValue: "location_id",
			},
			name: {
				type: DataTypes.STRING,
				field: "name",
				allowNull: false,
				searchable: true,
				alias: "Name",
				aliasValue: "category",
			},
		},
		{
			tableName: "Location_Types",
			timestamps: false,
		}
	);

	return Location_Types;
};
