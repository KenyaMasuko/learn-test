function test(title, callback) {
	try {
		callback();
		console.log(`✅ ${title}`);
	} catch (error) {
		console.log(`❌ ${title}`);
		console.log(error);
	}
}

function expect(result) {
	return {
		toBe(expected) {
			if (result !== expected) {
				throw new Error(`${result} is not equal to ${expected}`);
			}
		},
	};
}

global.test = test;
global.expect = expect;
