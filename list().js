const repeated = arr => {
    let repeated = []
    let temp
    for (let i = 0; i < arr.length; i++) {
        for (j = i+1; j < arr.length; j++) {
          if(arr[i] === arr[j])
            repeated.push(arr[i])
            } 
      
        }
            return Array.from(new Set(repeated));;
    }
    
    console.log(repeated([7,7,7,7,7,2,2,32,17,94,7,14543654,-1,2]))
    
    
    //ARRAY.FROM CONSULTADO DE https://gomakethings.com/removing-duplicates-from-an-array-with-vanilla-javascript/ 
    