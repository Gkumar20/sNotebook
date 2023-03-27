import React from 'react'

function Alert(props) {
    return (
        <div>
 
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type==="danger"?"Error":props.alert.type}</strong> :<strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

export default Alert