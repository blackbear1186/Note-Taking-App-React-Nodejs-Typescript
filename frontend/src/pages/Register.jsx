import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const {name, email, password, passwordConfirm} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== passwordConfirm){
           toast.error('passwords do not match')
        }
    }
  return (
    <div className='text-center'>
        <section className='flex flex-col'>
            <h1 className='flex justify-center'>
                <FaUser className=''/> Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className='text-center'>
            <form onSubmit={onSubmit}>

                <div>
                <input type='text' 
                className='mb-4 rounded w-52'
                id='name'
                value={name}
                // name is the same as state
                name='name'
                onChange={onChange}
                placeholder='Enter your name' 
                required/>
                </div>

                <div>
                <input type='email' 
                className='mb-4 rounded w-52'
                id='email'
                value={email}
                // name is the same as state
                name='email'
                onChange={onChange}
                placeholder='Enter your email' 
                required/>
                </div>

                <div>
                <input type='password' 
                className='mb-4 rounded w-52'
                id='password'
                value={password}
                // name is the same as state
                name='password'
                onChange={onChange}
                placeholder='Enter your password' 
                required/>
                </div>

                <div>
                <input type='password' 
                id='passwordConfirm'
                className='mb-4 rounded w-52'
                value={passwordConfirm}
                // name is the same as state
                name='passwordConfirm'
                onChange={onChange}
                placeholder='Confirm password' 
                required/>
                </div>

                <button className='bg-blue-500 hover:bg-blue-700 font-bold rounded h-10 w-52'
                >Create Account</button>
            </form>

        </section>
    </div>
  )
}

export default Register
