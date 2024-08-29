import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Signin = () => {
  return (
    <section className='flex flex-col justify-center items-center py-10 md:py-5 community relative'>
      <header className='text-center text-white z-20'>
        <h1 className='text-4xl font-bold'>Sign In</h1>
        <p className='py-3'>Create an account to start your membership.</p>
      </header>
      <div className='p-5 py-10 w-full z-20'>
        <form className='grid grid-cols-2 text-white gap-5 max-w-screen-sm mx-auto bg-opacity-50 backdrop-blur-md p-5 rounded-lg'>
          <div className=' text-left space-y-2'>
            <Label htmlFor='FullName' className=''>
              Full Name
            </Label>
            <Input
              placeholder='First Name'
              className=' outline-none border-none focus-visible:ring-0 bg-black   bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div className=' text-left space-y-2'>
            <Label htmlFor='FullName' className=''>
              Full Name
            </Label>
            <Input
              placeholder='First Name'
              className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
            />
          </div>
          <div />
          <Button size='lg' className='text-white col-span-2'>
            Sign In
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Signin;