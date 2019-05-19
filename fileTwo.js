const Hello = require("./fileOne.js")

Hello.add(1,2)
Hello.subtract(2,1)
Hello.multiply(2,2)
Hello.divide(4,2)
Hello.squareRoot(36)

var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem()/1000000000 + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

console.log('up time : ' + ((os.uptime()/60)/60)/24);