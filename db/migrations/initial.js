exports.up = function(knex, promise) {
	return Promise.all([
		knex.schema.createTableIfNotExists('census_tracts', function (table) {
			table.increments('id').unsigned().primary();
			table.integer('census_tract_id').nullable();
			table.string('county').nullable();
			table.integer('drinking_water').nullable();
			table.integer('pm_2point5').nullable();
			table.integer('diesel_pm').nullable();
			table.integer('groundwater_threats').nullable();
			table.integer('solid_waste').nullable();
			table.integer('hazardous_waste').nullable();
			table.integer('zip_code').nullable();
			table.string('city').nullable();
		})
	]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('censusTracts')
  ]);
};