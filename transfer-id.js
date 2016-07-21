var hooks = require('hooks');

hooks.after("Posts > Posts > Submit one post", function (transaction, done) {
	id = JSON.parse(transaction.real.body)['id'];
	hooks.log('The id is:'+id);
	replaceID('./recieve-id.apib', id)
	done();
});

function replaceID(file, newid) {
	var patt = /[0]{6}/g;
	var fs = require('fs');
	var data = fs.readFileSync(file,'utf8');
	var result = data.replace(patt, newid);
	fs.writeFileSync(file, result, 'utf8');
}