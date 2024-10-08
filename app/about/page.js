import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12 text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        {/* Accessing the image from the public folder */}
        <img src="https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Picture" className="mx-auto rounded-full w-40 h-40 mt-6" />
        <p className="text-lg mt-4">
          Hi, I'm Salma, a passionate developer who loves creating web experiences...
        </p>
      </div>
      <Footer />
    </div>
  );
}
