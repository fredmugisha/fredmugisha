const os =require('os')

// Information about current system
const user = os.userInfo();
console.log(user);

// methodes return the system  uptime in seconds

console.log(`The System Uptime is ${os.uptime()} in seconds`)

const currentOS ={
  name :os.type(),
  release :os.release(),
  totalMemory :os.totalmem(),
  totalFreememory :os.freemem()
}
console.log(currentOS);
