async function test() {
  await sleep(1000);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
test();
// test();
// async function test() {
//   for(var i=1;i<10;i++){
//   await sleep(1000);
//   console.log("gy");
// 	}
// }
//
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
