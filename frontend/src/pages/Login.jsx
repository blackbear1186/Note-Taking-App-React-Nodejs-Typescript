import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

  
    }
  return (
    <div className='text-center'>
        <section className='flex flex-col'>
            <h1 className='flex justify-center'>
                <FaSignInAlt className=''/> Login
            </h1>
            <p>Please login into Take Note</p>
        </section>
        <section className='text-center'>
            <form onSubmit={onSubmit}>

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

                <button className='bg-blue-500 hover:bg-blue-700 font-bold rounded h-10 w-52'
                >Create Account</button>
            </form>

        </section>
    </div>
  )
}

export default Login
