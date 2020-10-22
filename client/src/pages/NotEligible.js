import React from 'react'
import {Link} from 'react-router-dom'

const NotEligible = () => {
    return (
        <div>
            Only CYF Graduates Can Login, Please see out graduates <Link to='/'>here</Link>
        </div>
    )
}

export default NotEligible
