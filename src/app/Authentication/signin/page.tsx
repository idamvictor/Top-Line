import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Signin = () => {
 
  return (
    <section className='flex flex-col justify-center items-center py-10 md:py-5 community relative h-[90vh]  md:max-h-[700px]'>
      <header className='text-center text-white z-20 md:hidden flex flex-col justify-center items-center space-y-2'>
      <div className='logo bg-foreground h-20 w-20 rounded-full flex justify-center items-center'>
        <svg
          width='50'
          height='50'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' '
        >
          <path
            d='M10.8046 13.4684H9.43484V4.14225H0.109375V2.77246H10.8046V13.4684Z'
            fill='white'
          />
          <path
            d='M0.108995 0.0332031H17.3904V1.40348H0.108995V0.0332031Z'
            fill='white'
          />
          <path
            d='M8.06555 13.4681H6.69576V6.88173H0.109863V5.51172H8.06555V13.4681Z'
            fill='white'
          />
        </svg>
      </div>
        <h1 className='text-4xl font-bold'>Welcome Back!</h1>
      </header>
      <main className='flex justify-evenly  w-full'>
        <div className="flex-1 z-20 flex justify-center items-center max-md:hidden">
        <HeaderLogo/>
        </div>

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
            <Link href={'/Authentication/reset_password'} className='absolute right-0 text-foreground hover:underline cursor-pointer font-bold'>Forgot password?</Link>
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
  );
}
const HeaderLogo=()=>{
  return(
    <div className=" max-w-[500px] mx-auto flex flex-col justify-center items-center gap-y-3 text-white">
        <div className='logo bg-foreground h-20 w-20 rounded-full flex justify-center items-center'>
        <svg
          width='50'
          height='50'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' '
        >
          <path
            d='M10.8046 13.4684H9.43484V4.14225H0.109375V2.77246H10.8046V13.4684Z'
            fill='white'
          />
          <path
            d='M0.108995 0.0332031H17.3904V1.40348H0.108995V0.0332031Z'
            fill='white'
          />
          <path
            d='M8.06555 13.4681H6.69576V6.88173H0.109863V5.51172H8.06555V13.4681Z'
            fill='white'
          />
        </svg>
      </div>
      <h1 className='text-5xl font-bold'>
        Welcome Back!
      </h1>
      <p className='text-center'>
        {"Access your account to unlock the full potential of our comprehensive educational platform. Whether you’re here for mentorship, signal services, capital management, or cryptocurrency exchange, everything you need is just a click away"}
      </p>
    </div>
  
  )
}
export default Signin;