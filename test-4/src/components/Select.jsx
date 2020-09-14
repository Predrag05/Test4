import React from 'react'

const Select = () => {
    return (
        <select onChange={(e => {
            if(e.target.value = ''){console.log('izaberi zemlju')}
            else
            {console.log(e.target.value)}
        })}>
            <option>Evropa</option>
            <option>Azija</option>
            <option>Amerika</option>
            <option>Afrika</option>
            <option>Okeanija</option>
            <option>Ledeno doba</option>
        </select>
    )
}
export default Select