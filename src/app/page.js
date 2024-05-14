import Cube from '@/components/cube';
import Finder from '@/components/finder';
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='container-find-email'>
      <Image src="/tory-box.png" width="400" height="400" alt="Furry white cat sitting on a wall" />
        <h2>Consulta con tu correo</h2>
        <Finder />
      </div>
      <div>
        <Cube />
      </div>

    </div>



  )
}
