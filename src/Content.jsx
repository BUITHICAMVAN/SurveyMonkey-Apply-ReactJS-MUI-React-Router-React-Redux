import React, {useEffect, useState} from 'react'

export default function Content() {
    // cac bien la 1 trang thai 
    const [age, setAge] = useState(21);
    //function, array cac gia tri
    // nhan biet content da duoc render hay chua
    
    useEffect (() => {
        setAge(age + 1)
    }, [])

  return (
    <div>Tuoi Van Bui {age}</div>
  )
}
