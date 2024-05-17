
import Cube from '@/components/cube';
import Finder from '@/components/finder';
import Count from '@/components/countdown';
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='container-find-email'>
        <div className='container-caption'>
          <div className='item'>
            <p>Recibimos Nequi o Daviplata</p>
            <Image src="/nequi.png" width="400" height="400" alt="nequi" />

          </div>
          <div className='item'>
            <Image src="/tory-box.png" width="400" height="400" alt="logo" />

          </div>
          <div className='item'>
            <div className='info'>
              <p>Recibiras un correo en menos de 24 horas*</p>
              <p>Mas abajo puedes consultar los tickets*</p>
            </div>

          </div>

        </div>
        <h2>Consulta con tu correo</h2>
        <Finder />
      </div>
      <div>
        <Cube />
      </div>

    </div>



  )
}
