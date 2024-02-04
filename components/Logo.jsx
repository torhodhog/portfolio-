import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={100} height={100} priority alt="logo"/> 
      </Link>
  )
}

export default Logo
