exports.up = function(knex, promise) {
	return Promise.all([
		knex.schema.createTableIfNotExists('census_tracts', function (table) {
			table.increments('id').unsigned().primary();
			table.bigInteger('census_tract_id').nullable();
			table.string('county').nullable();
			table.decimal('drinking_water').nullable();
			table.decimal('pm_2point5').nullable();
			table.decimal('diesel_pm').nullable();
			table.decimal('groundwater_threats').nullable();
			table.decimal('solid_waste').nullable();
			table.decimal('hazardous_waste').nullable();
			table.decimal('zip_code').nullable();
			table.string('city').nullable();
		})
	]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('censusTracts')
  ]);
};