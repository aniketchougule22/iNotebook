import React from 'react'

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-success" role='alert' style={{color: 'black'}}>
        <strong>{props.message}</strong>
      </div>
    </div>
  )
}

export default Alert