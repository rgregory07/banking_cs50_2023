import { useEffect, useState } from 'react'

const Checkbox = ({name, id, onCheck, reset }) => {
    const [checked, setChecked] = useState(false)

    useEffect(()=> {
        setChecked(false)
    }, [reset])
    
  return (
    <input
        type='checkbox'
        namne={name}
        checked={checked}
        onChange={() => {
            setChecked(prev => !prev)
            onCheck(id)
        }
        
    }
        
        />
      
    
  )
}

export default Checkbox
