import React from 'react'
import Buttons from '../buttons/Buttons'
import { useTelegram } from '../hooks/useTelegram'

function Header() {
 const { user, onClose} = useTelegram()

  return (

    <div className={'header'}>
        <Buttons onClick={onClose}>Закрыть</Buttons>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>

    )
}

export default Header