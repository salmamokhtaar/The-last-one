import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12 text-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-lg mt-4">Here are some of the projects I've worked on:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Job portal </h2>
            <p>Job Portal Using React js Node js Mongodb and Express js</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Flower Website</h2>
            <p>Flower Website Using Htmlm Css and Javascript</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Flower Website</h2>
            <p>Hotel Website Using Htmlm Css and Javascript</p>
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
