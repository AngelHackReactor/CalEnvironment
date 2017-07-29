const knex = require('knex')(require('../../knexfile'));
const CalRawData = require('../../CalEnviroScreenRawData.json');

exports.seed = function(knex, Promise) {
	// return knex('census_tracts').insert([{
	// 	census_tract_id: 2,
	// 	drinking_water: 5
	// }])
	CalRawData.forEach ((obj) => {
	  let zip_city = obj['Location 1'].split('\n')[0];
	  let zipcode = Number(zip_city.slice(-5));
	  let city = zip_city.slice(0,zip_city.length-6);

	  let params = [
	    obj['Census Tract'],
	    obj['California County'],
	    obj['Drinking Water'],
	    obj['PM2.5'],
	    obj['Diesel PM'],
	    obj['Groundwater Threats'],
	    obj['Solid Waste'],
	    obj['Haz. Waste'],
	    zipcode,
	    city
	  ];

	  return knex('census_tracts').insert([{
			census_tract_id: params[0],
			county: params[1],
			drinking_water: params[2],
			pm_2point5: params[3],
			diesel_pm: params[4],
			groundwater_threats: params[5],
			solid_waste: params[6],
			hazardous_waste: params[7],
			zip_code: params[8],
			city: params[9]
		}])
	  });  
}


