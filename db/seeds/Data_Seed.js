const knex = require('knex')(require('../../knexfile'));
const CalRawData = require('../../CalEnviroScreenRawData.json');

exports.seed = function(knex, Promise) {
	// return knex('census_tracts').insert([{
	// 	census_tract_id: 2,
	// 	drinking_water: 5
	// }])
	return Promise.all(Promise.each (CalRawData, (obj) => {
	  let zip_city = obj['Location 1'].split('\n')[0];
	  let zipcode = Number(zip_city.slice(-5));
	  if (!zipcode) {
	  	zipcode = Number(zip_city.slice(-2));
	  }
	  let city = zip_city.slice(0,zip_city.length-6);

	  let params = [
	    obj['Census Tract'],
	    obj['California County'],
	    obj['Drinking Water'],
	    obj['Drinking Water Pctl'],
	    obj['PM2.5'],
	    obj['PM2.5 Pctl'],
	    obj['Diesel PM'],
	    obj['Diesel PM Pctl'],
	    obj['Groundwater Threats'],
	    obj['Groundwater Threats Pctl'],
	    obj['Solid Waste'],
	    obj['Solid Waste Pctl'],
	    obj['Haz. Waste'],
	    obj['Haz. Waste Pctl'],
	    zipcode,
	    city
	  ];
	  for (var i = 0; i < params.length; i++) {
	  	if (params[i] === "NaN" || params[i] === "NA" || params[i] === NaN) {
	  		params[i] = null
	  	}
	  }
	  	return knex('census_tracts').insert([{
			census_tract_id: params[0],
			county: params[1],
			drinking_water: params[2],
			drinking_water_percentile: params[3],
			pm_2point5: params[4],
			pm_2point5_percentile: params[5],
			diesel_pm: params[6],
			diesel_pm_percentile: params[7],
			groundwater_threats: params[8],
			groundwater_threat_percentile: params[9],
			solid_waste: params[10],
			solid_waste_percentile: params[11],
			hazardous_waste: params[12],
			hazardous_waste_percentile: params[13],
			zip_code: params[14],
			city: params[15]
		}])

	}))

}


