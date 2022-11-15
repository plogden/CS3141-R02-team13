module.exports = (sequelize, DataTypes) => {
	const Locations = sequelize.define(
		"Locations",
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
			name: {
				type: DataTypes.STRING,
				field: "name",
				allowNull: false,
				searchable: true,
				alias: "Name",
				aliasValue: "name",
			},
			coordinates: {
				type: DataTypes.GEOMETRY("POINT"),
				field: "coordinates",
				allowNull: false,
				searchable: true,
				alias: "Coordinates",
				aliasValue: "coordinates",
			},
			vehicle_required: {
				type: DataTypes.ENUM({
					values: [
						"Any",
						"Light Off-Road",
						"Moderate Off-Road",
						"Heavy Off-Road",
					],
				}),
				field: "vehicle_required",
				allowNull: false,
				searchable: true,
				alias: "Vehicle Required",
				aliasValue: "vehicle_required",
			},
		},
		{
			tableName: "Locations",
			timestamps: false,
		}
	);

	Locations.associate = function (models) {
		Locations.hasOne(models.Location_Types, {
			foreignKey: "location_id",
		});
	};

	return Locations;
};
