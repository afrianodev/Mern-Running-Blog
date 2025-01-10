import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice'
import OAuth from '../Components/OAuth'

function SignIn() {
  const [formData, setFormData] = useState({})
  // const [errorMessage, setErrorMessage] = useState(null)
  // const [loading, setLoading] = useState(false)
  const {loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim() })
    console.log(formData)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return setErrorMessage('Please fill out all fields.')
      return dispatch(signInFailure('Please fill out all fields.'))
    }
    try {
      // setLoading(true)
      // setErrorMessage(null)
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (data.success === false) {
        // return setErrorMessage(data.message)
        dispatch(signInFailure(data.message))
      }

      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }

    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col sm:flex-row sm:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
          <Link to='/' className='text-sm sm:text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-black to-zinc-600 rounded-lg text-white'>PIPERUN</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>This is a run blog, you can sign in or use google to sign in...</p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput
              type='text'
              placeholder='email'
              id='email'
              onChange={handleChange} />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
              type='text'
              placeholder='********'
              id='password'
              onChange={handleChange} />
            </div>
            <Button type='submit' className='bg-black' disabled={loading}>
              {
                loading ? (<><Spinner size='sm' /><span className='pl-3'>Loading...</span></>) : 'Sign In'
              }
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-700'>Sign Up</Link>
          </div>
          {
            errorMessage && <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
          }
        </div>
      </div>
    </div>
  )
}

export default SignIn
