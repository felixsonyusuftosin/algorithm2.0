/**
 * @file 
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

  const firstCase = '741784427485714875845728754957214752857454857484842874285885708542754074752'.split('')
  const secondCase = [100,99,88,34,12,0,45,12,24,25,4,0, 75, 999, 88]
  const thirdCase = [1]
  const fourthCase = [67, 23, 33, 12, 1000, -12, -12, -23.3333, 0.345, 0.987]
  const fifthCase = [ ]

  console.log( 
    `

   FourthCase : : =>   ${qsort(fourthCase)} \n


     `
  )

    
  

