import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillGithub} from 'react-icons/ai';
import mylogo from './Components/mylogo.jpg';
import design from './Components/design.png';
import android from './Components/android.avif'
import web from './Components/web.png'

function App() {
  return (
    <div className='px-10'>
      <section className='min-h-screen'> 
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='logo text-2xl'> TEJAS </h1>
        <ul className='flex text-center m-auto gap-20 text-xl'>
          <li> Projects </li>
          <li> Skills </li>
          <li> Contact</li>
        </ul>
        <ul className='flex items-center gap-5'>
          <li> <BsFillMoonStarsFill className='cursor-pointer'/></li>
          <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white , px-4 py-2 rounded-md'> <a href='#'> Resume </a></li>
        </ul>
      </nav>

      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'> Tejas Ekhande </h2>
        <h3 className='text-2xl py-2'> Developer and Designer </h3>
        <p className='text-md py-5 leading-8 text-gray-800'>
          Freelancer providing services for programming,<br></br>photography and design content needs.Join me down<br/> below and let's get cracking!
        </p>
      </div>

      <div className='text-4xl flex justify-center gap-12 text-gray-600'>
        <AiFillTwitterCircle className='cursor-pointer'/>
        <AiFillLinkedin className='cursor-pointer'/>
        <AiFillInstagram className='cursor-pointer'/>
        <AiFillGithub className='cursor-pointer'/>
      </div>

      <div className='relative mx-auto mt-20 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
        <img src={mylogo} layout="fill" objectFit="cover"/>
      </div>
    </section>

    <section>
      <div>
        <h3 className='text-3xl py-1'> Services I Offer </h3>
        <p className='text-md py-2 leading-8 text-gray-800'>
          Since the beginning of my journey as a freelance designer and developer, i've done remote work for <span className='text-teal-500'> Agencies </span> consulted for <span className='text-teal-500'> Startup </span> and Collaborated with talented people to create digital products for both buisness and consumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
          I offer from a wide range of services, including Website Developement and Designing,Photography,Programming and Andoid Developement.
        </p>
      </div>

      <div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img className='image mx-auto' src={android}/>
          <h3 className='text-lg font-medium pt-8 pb-2'> Andoid Developement </h3>
          <p className='py-2'> Creating elegant Andoird Apps suited for your needs following core design theory.</p>
          <h4 className='py-4 text-teal-600'> Design Tools and Technologies I Used</h4>
          <p className=' text-gray-800 py-1'> Andoird Studio </p>
          <p className=' text-gray-800 py-1'> Java </p>
          <p className=' text-gray-800 py-1'> XML </p>
          <p className=' text-gray-800 py-1'> Firebase </p>
        </div>
      </div>

      <div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img className='image mx-auto' src={web}/>
          <h3 className='text-lg font-medium pt-8 pb-2'> Web Developement </h3>
          <p className='py-2'> Creating elegant Websites suited for your needs following core design theory.</p>
          <h4 className='py-4 text-teal-600'> Design Tools and Technologies I Used</h4>
          <p className=' text-gray-800 py-1'> HTML </p>
          <p className=' text-gray-800 py-1'> TAILWIND CSS </p>
          <p className=' text-gray-800 py-1'> JAVASCRIPT </p>
          <p className=' text-gray-800 py-1'> REACT JS </p>
        </div>
      </div>

      <div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 '>
          <img className='image mx-auto' src={design}/>
          <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful Designs </h3>
          <p className='py-2'> Creating elegant designs suited for your needs following core design theory.</p>
          <h4 className='py-4 text-teal-600'> Design Tools I Used</h4>
          <p className=' text-gray-800 py-1'> Photoshop </p>
          <p className=' text-gray-800 py-1'> Illustrator </p>
          <p className=' text-gray-800 py-1'> Figma </p>
        </div>
      </div>

    </section>

    </div>
    
  );
}

export default App;
