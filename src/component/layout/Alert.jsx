import { error } from 'daisyui/src/colors';
import React, {startTransition, useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
    const {alert} = useContext(AlertContext);

    return alert ? (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle'> {alert.msg}</i>
        </div>
      ) : null
}

export default Alert