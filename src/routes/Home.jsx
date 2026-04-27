import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[#590209] text-white'>
        <p className='m-4 p-4'>OLÁ</p>
        <Link to="/card" className=''>Card</Link>
    </div>
  )
}

export default Home