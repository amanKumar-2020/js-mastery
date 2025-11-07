function createCounter(initialValue = 0, step = 1) {
  let count = initialValue;
  function increment() {
    count+=step;
    console.log(count);
    
  }
  let decrement=(() => {
    count-=step;
    console.log(count);
    
  });
  let reset =(()=>{
    count=initialValue;
  })
  let getValue = (()=>{
    console.log(count);
    
  })

  return {increment , decrement ,getValue ,reset}
}

let number = createCounter(10)
console.log(number);
 number.increment()
 number.decrement()
 number.reset()
