const db = require('./');

const Data = db.Model.extend({
	tableName: 'census_tracts'
});

module.exports = {
	getData: (censusId, res) => {
		Data.
		where({census_tract_id: censusId}).fetch()
		.then(data => {
			res.send(data);
		})
	}
}