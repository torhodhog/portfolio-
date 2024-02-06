'use client';

import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
  return (
   <form className='flex flex-col gap-y-4'>
      <div className='relative flex items-center'>
         <Input type='name' id='name' placeholder='Name'/>
         <User  className='absolute right-6' size={20}/>
      </div> 
      <div className='relative flex items-center'>
         <Input type='email' id='email' placeholder='Email'/>
         <MailIcon  className='absolute right-6' size={20}/>
      </div> 
      <div className='relative flex items-center'>
         <Textarea type='melding' id='melding' placeholder='Skriv din melding her.'/>
         <MessageSquare  className='absolute top-4 right-6' size={20}/>
      </div> 
      <Button className='flex items-center max-w-[166px] gap-x-1'>La oss snakke 
      <ArrowRightIcon size={20} />
      </Button>
   </form>
  )
}

export default Form
