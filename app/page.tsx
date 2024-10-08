import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12 text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl mt-4">This is where creativity meets technology.</p>
        
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-6 px-4 lg:ml-28 lg:w-[85%] md:w-[70%] sm:px-6 lg:px-6 mt-20 mb-8 justify-around " >
           
           <div className="border text-center py-8 px-5 shadow-md shadow-gray-400  hover:shadow-md hover:shadow-black transition-all duration-1000">
             <img src='https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600' />
               <h3 className="text-xl font-bold py-4"> FullStack Developer  </h3>
               <p>Last Chance! Devs<br/> Get Your Deserve Job.</p>
           </div>
       <div className="border text-center py-8 px-5 shadow-md shadow-gray-400 hover:shadow-md hover:shadow-black transition-all duration-1000">
       <img src='https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600' />
               <h3 className="text-xl font-bold py-4"> Software Engineer   </h3>
               <p>Last Chance! Developers  <br/> Get Your Deserve Job.</p>
           </div>
       <div className="border text-center py-8 px-5 shadow-md shadow-gray-400 hover:shadow-md hover:shadow-black transition-all duration-1000 ">
       <img src='https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=600' />
               <h3 className="text-xl font-bold py-4"> Graphic Designers </h3>
               <p>Last Chance! Designers  <br/> Get Your Deserve Job.</p>
           </div>
           <div className="border text-center py-8 px-5 shadow-md shadow-gray-400 hover:shadow-md hover:shadow-black transition-all duration-1000">
           <img src='https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&w=600' />
               <h3 className="text-xl font-bold py-4">Mobile Apps</h3>
               <p>Last Chance! Devs <br/> orders ends today.</p>
           </div>

 </div>
      <Footer />
    </div>
  );
}
