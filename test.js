
const {Whl} = require('./index.js')

const textile = '3,2,⚛♽⚖,⚛♽⚖'
const whl = new Whl(textile)
setInterval(() => {
	console.log('tick')
	console.log(whl.drp())
	whl.tck()
}, 1000)
