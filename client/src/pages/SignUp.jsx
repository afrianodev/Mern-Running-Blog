import { Label, TextInput, Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col sm:flex-row sm:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
          <Link to='/' className='text-sm sm:text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-black to-zinc-600 rounded-lg text-white'>PIPERUN</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>This is a run blog, you can sign up or use google to sign up...</p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
              type='text'
              placeholder='username'
              id='username' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
              type='text'
              placeholder='email'
              id='email' />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
              type='text'
              placeholder='password'
              id='password' />
            </div>
            <Button type='submit' className='bg-black'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-700'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
