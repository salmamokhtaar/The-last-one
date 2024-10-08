import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12 text-center">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-lg mt-4">Feel free to reach out to me at:</p>
        <p className="mt-4 text-xl">Salmam.mohyadiin@gmail.com</p>
      </div>
      <Footer />
    </div>
  );
}
