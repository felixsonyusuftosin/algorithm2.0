/**
 * @file 
 * QuickSort
*/
const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

const getPivot = (arr) => Math.round( (arr.length -1)/2 )
const qsort = ( arr ) => { 

performance.mark('A');
  if ( arr.length < 2) return arr
  const pivot = getPivot(arr)
  const less = []
  const greater = []
  const newArr = [ ...arr.slice(0, pivot), ...arr.slice(pivot+ 1, arr.length )]
  for ( let i = 0; i < newArr.length; i++) { 
    newArr[i] > arr[pivot] ? greater.push(newArr[i]) : less.push(newArr[i])
  }



  return [...qsort(less), arr[pivot], ...qsort(greater) ] 
}

const callex = ( ) => {
performance.mark('A'); 
const a = [12,3,45,6,8,5,43,5646,7,76,67,76,76,76,77,67,6,76,7,67,6,76,7,6,8,4,343,4,5,665,6,43,677,84,7]

qsort(a)
// console.log(qsort([12,3,45,6,8,5,43,5646,7,76,67,76,76,76,77,67,6,76,7,67,6,76,7,6,8,4,343,4,5,665,6,43,677,84,7]) )
performance.mark('B'); 
performance.measure('A to B', 'A', 'B');
}
  
callex()

