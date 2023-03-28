import React from 'react'

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role='alert'>
        {PaymentResponse.message}
      </div>
    </div>
  )
}

export default Alert
