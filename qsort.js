/**
 * @file 
 * QuickSort
*/

const getPivot = (arr) => Math.round( (arr.length -1)/2 )
const qsort = ( arr ) => { 
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


    
  

