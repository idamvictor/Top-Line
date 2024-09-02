import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const ForgortPw = () => {
  return (
    <section className='flex flex-col justify-center items-center py-10 md:py-5 community relative h-[90vh]  md:max-h-[700px]'>
      <header className='text-center text-white z-20 md:hidden flex flex-col justify-center items-center space-y-2'>
        <h1 className='text-4xl font-bold'>Welcome Back!</h1>
      </header>
      <main className='flex justify-evenly  w-full'>
        <div className='p-5 py-10 max-md:px-10 w-full z-20 flex-1'>
        <form className=' flex flex-col gap-4 text-white max-w-[400px] mx-auto bg-opacity-50 backdrop-blur-md p-7 rounded-lg'>
          <div className=' text-left space-y-2'>
            <Label htmlFor='Email' className=''>
              Email
            </Label>
            <Input
              placeholder='i.e john@gmail.com'
              className=' outline-none border-none focus-visible:ring-0 bg-black   bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2 relative'>
            <Label htmlFor='Password' className=''>
              Password
            </Label>
            <small className='absolute right-0 text-foreground hover:underline cursor-pointer font-bold'>Forgot password?</small>
            <Input
              placeholder='Enter Password'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div />
          <div className='remeberme flex justify-start text-foreground w-full gap-x-3'>
            <label htmlFor='remeber me'>
              <input type='checkbox' />
            </label>
            Remember Me
          </div>
          <Button size='lg' className='text-white col-span-2'>
            Sign In
          </Button>
          <Link
            href={"/Authentication/signup"}
            className='col-span-2 text-center py-4 cursor-pointer hover:underline '
          >
            Don’t have an account ?  {"  "}
            <span className='text-foreground px-1'>Create an account</span>
          </Link>
        </form>
      </div>
      </main>
      
    </section>
  )
}

export default ForgortPw;