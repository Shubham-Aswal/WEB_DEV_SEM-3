import React,{memo, useMemo} from 'react'

const Child = (prop) => {
    let data = useMemo(()=>{
         let val =0
    for(let i =0;i<1000000000;i++){
            val += i

        }
        return val
    },[])
   console.log("child")
  return (
    <div>
        value : 
        {
            data
        }
      
    </div>
  )
}

export default memo(Child)
