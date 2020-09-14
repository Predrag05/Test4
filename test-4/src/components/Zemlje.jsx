import React from 'react'
import { v1 as uuidv1 } from 'uuid';

const Zemlje = ({countries}) => {
    return (
      countries.map(el => {
        return <img key={uuidv1} src={el.flag} alt={`flag of ${el.name}`} />
      })
    )
  }

  export default Zemlje