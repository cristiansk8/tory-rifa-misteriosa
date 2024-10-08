
import Cube from '@/components/cube';
import Finder from '@/components/finder';
import Sorteo from '@/components/winers';
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='castor container-find-email'>
        <div className='container-caption'>
          <div className='item'>
            <Image src="/tory-box.png" width="400" height="400" alt="logo" />
          </div>
        </div>
        <h2>Consulta con tu correo</h2>
        <Finder />
        <Sorteo />
      </div>
      <div className='cubo'>
        <Cube />
      </div>

    </div>



  )
}
