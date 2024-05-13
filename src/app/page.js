import Cube from '@/components/cube';
import Finder from '@/components/finder';

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-center'>
        <h2>Consulta con tu correo</h2>
        <Finder />
      </div>
      <div>
        <Cube />
      </div>

    </div>



  )
}
