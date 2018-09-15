const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  { arr: [], result: [] });
});

router.post('/', function(req, res, next) {
	const x = Number(req.body.x);
	const maxE = Number(req.body.maxE);
	const size = Number(req.body.size);
	let i,j, mask, sum, itog, arr, result, z;
	arr=[];
	result=[];
	for (i=0; i<size; i+=1){
		z = Math.floor(Math.random()*(maxE+1))
		arr=[...arr, z];
	};
//	arr=[5,5,3,2,2,2,2,2,2,2,5,5,3,2,2,2,2,2,2,2];
	for (i = 1; i<=2**size; i+=1){
//		mask = i;
		sum = 0;
		itog=[];
		for (j = 0; j < i; j+=1) {
			if ((i & (2**j)) === 2**j) {
				itog=[...itog, arr[j]];
				sum +=arr[j];
				if (sum>=x) {continue};
			}
		}
		if (sum === x) {result=[...result, itog];}
	}
  res.render('index', { arr: arr, result: result });
});

module.exports = router;
