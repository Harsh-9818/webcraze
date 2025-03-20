import { Link } from 'react-router-dom';
// import Eye from '../Components/Eye';
// import Grid from '../Components/Grid';
// import Marque from '../Components/Marque';
import '/src/App.css';
import { motion } from 'motion/react';
import Footer from './Footer';
import Cat from './Cat';

const FadeInAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

function Home() {
  return (
    <div>
      <div
        className="relative text-white w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787717_1280.jpg")' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Grid Component */}
          {/* <div className="absolute top-0 left-0 p-4">
            <Grid />
          </div> */}

          <motion.div variants={FadeInAnimation} initial="hidden" animate="show">
            {/* Header Section with increased top margin on small screens */}
            <motion.div className="text-center font-sans px-4 pt-32 lg:pt-20" variants={FadeInAnimation}>
              <h1 className="font-bold drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                OUT OF THIS WORLD MERCH
              </h1>
            </motion.div>

            {/* About Section */}
            <motion.div
              variants={FadeInAnimation}
              className="flex items-center text-gray-300 justify-center h-auto md:h-[30vh] w-full sm:w-4/5 lg:w-3/5 mx-auto text-center px-4 py-8"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow">
                Discover our exclusive collection of space-themed merchandise! From apparel to accessories, our curated products are designed for space enthusiasts and explorers alike. Elevate your style and celebrate the wonders of the cosmos.
              </p>
            </motion.div>
          </motion.div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <Link
              to="/product"
              className="glow-on-hover font-bold text-white text-md h-12 w-40 rounded-full flex items-center justify-center drop-shadow"
            >
              Explore our products 
            </Link>
          </div>

          <div className='mt-12'>
            <Cat/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
