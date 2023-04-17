//testing/removing this import by making out own middlewar
const curryFunc = (a)=> (b,c) => {a + b -c} 
const with10 = curryFunc(10);
with10(9,2);
withA = (2,4);

const curryFunc2 = (a)=> (b,c) => {a + b -c}; const with20 = curryFunc2(10); with20(9,2);
//returns:
(b,c) => {a + b -c}