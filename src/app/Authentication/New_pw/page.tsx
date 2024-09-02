import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewPassword = () => {
  return (
    <section className='flex flex-col justify-center items-center py-10 md:py-5 community relative md:h-[90vh] md-max:min-h-screen  md:max-h-[700px]'>
      <header className='text-center text-white z-20 flex flex-col justify-center items-center space-y-2'>
        <h1 className='text-4xl font-bold'>New Password</h1>
        <p className=' text-center'>set up a new password for you account</p>
      </header>
      <main className='flex justify-evenly  w-full'>
        <div className='p-5 py-10 max-md:px-10 w-full z-20 flex-1'>
          <form className=' flex flex-col gap-4 text-white max-w-[400px] mx-auto bg-opacity-50 backdrop-blur-md p-7 rounded-lg'>
            <div className=' text-left space-y-2'>
              <Label htmlFor='password' className=''>
                Enter New Password
              </Label>
              <Input
                type='password'
                placeholder='Enter new Password'
                className=' outline-none border-none focus-visible:ring-0 bg-black   bg-opacity-50 backdrop-blur-md'
              />
            </div>
            <div className=' text-left space-y-2 relative'>
              <Label htmlFor='Re-Enter New Password' className=''>
                Re-Enter New Password
              </Label>
              <Input
                type='password'
                placeholder='Enter Password'
                className=' outline-none border-none focus-visible:ring-0 bg-black  bg-opacity-50 backdrop-blur-md'
              />
            </div>
            <div />
            <Button size='lg' className='text-white col-span-2'>
              Submit
            </Button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default NewPassword;
