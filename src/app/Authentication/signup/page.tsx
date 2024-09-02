import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  return (
    <section className='flex flex-col justify-center items-center py-10 md:py-5 community relative'>
      <header className='text-center text-white z-20'>
        <h1 className='text-4xl font-bold'>Sign Up</h1>
        <p className='py-3'>Create an account to start your membership.</p>
      </header>
      <div className='p-5 py-10 w-full z-20'>
        <form className='grid grid-cols-2 text-white gap-5 max-w-screen-sm mx-auto bg-opacity-50 backdrop-blur-md p-5 rounded-lg'>
          <div className=' text-left space-y-2'>
            <Label htmlFor='FullName' className=''>
              Full Name
            </Label>
            <Input
              placeholder='i.e john Smith'
              className=' outline-none border-none focus-visible:ring-0 bg-black   bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2'>
            <Label htmlFor='Email' className=''>
              Email
            </Label>
            <Input
              placeholder='i.e john@gmail.com'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2'>
            <Label htmlFor='Password' className=''>
              Enter Password
            </Label>
            <Input
              placeholder='Enter Password'
              type='password'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2'>
            <Label htmlFor='Re-enter password' className=''>
              Re-Enter Password
            </Label>
            <Input
              placeholder='Re-enter password'
              type='password'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className='max-sm:col-span-2 text-left space-y-2'>
            <Label htmlFor='phonenumber' className=''>
              Phone Number
            </Label>
            <Input
              placeholder='(+234) 1234 5678'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className='max-sm:col-span-2 text-left space-y-2'>
            <Label htmlFor='gender' className=''>
              Gender
            </Label>
            <Input
              placeholder='Select Gender'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2'>
            <Label htmlFor='Country' className=''>
              Country
            </Label>
            <Input
              placeholder='Enter Country'
              className=' outline-none border-none focus-visible:ring-0 bg-black   bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2'>
            <Label htmlFor='state' className=''>
              State
            </Label>
            <Input
              placeholder='Enter State'
              className=' outline-none border-none focus-visible:ring-0 bg-black   bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div />
          <div className='remeberme flex justify-start text-foreground w-full col-span-2 gap-x-3'>
            <label htmlFor='remeber me'>
              <input type='checkbox' />
            </label>
            Remember Me
          </div>
          <Button
            aria-label='sign up button to topline'
            size='lg'
            className='text-white col-span-2'
          >
            Sign Up
          </Button>
          <Link
            href={"/Authentication/signin"}
            className='col-span-2 text-center py-4 cursor-pointer hover:underline '
          >
            Do have an account? {"  "}
            <span className='text-foreground px-1'>Sign in to TopLine</span>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Signup;
