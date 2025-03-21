import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ButotnComponent = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = ()=>{
        setIsLoading(true)

        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    }
  return (
    <div>
        <Button variant='primary'>click me</Button>
        {/* button as input type */}
        {/* <input type='button' value='input type btn'/> */}
        <Button as='input' type='button' value='button' variant='dark'/>
        <Button as='input' type='submit' value={'submit'} variant='secondary'/>
        <Button as='input' type='reset' value={'reset'} variant='outline-danger'/>

        <br />
        {'sizing of button'}
        <br />
        <Button variant='primary' size='lg' >large size</Button>
        <Button variant='secondary' size='sm'>small-size</Button>
        <Button variant='danger' size='md'>md-default-size</Button>

        {/* diable and active state in button */}
        <Button variant='danger' onClick={handleChange} disabled={isLoading} active={isLoading}>
            {isLoading ? 'data loading...' :'api called'}
        </Button>

        <br />

        <input type="text" /* aria-label="Search" */ placeholder="🔍" />

    </div>
  )
}

export default ButotnComponent