import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setIsLogged, setUserName } from '../../store/actions/Actions'
import '../../styles/login.scss'

const Login = () => {

    const name = useSelector(state => state.mainPage.userName)

    const dispatch = useDispatch()

    const history = useHistory()

    let onChangeName = (event) => {
        let value = event.target.value
        dispatch(setUserName(value))
    }
    let onSubmit = () => {
        if (name.length >= 1) {
            history.push('/')
            dispatch(setIsLogged(true))
        }
        else {}
    }

    return (
        <div className='Login'>
            <div>
                <span className='Login__title'>SignIn</span>
            </div>
            <div>
                <input onChange={onChangeName} className='Login__input' placeholder="What's your name?"
                value={name} autoFocus/>
            </div>
            <div>
                <button onClick={onSubmit} className='Login__submit'>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default Login