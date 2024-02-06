import {Button} from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
         <div className='flex flex-col items-center'>
            <h2 className='h2 max-x-xl text-center mb-8'>Vil lære enda mer om meg? Ta gjerne kontakt</h2>
            <Link href='/contact'>
               <Button>Kontakt</Button>
            </Link>
         </div>
      </div>
    </section>
  )
}

export default Cta
