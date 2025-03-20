import React from 'react';
import Footer from './Footer';

const products = [
  {
    id: 1,
    title: 'Space Shoes',
    price: 30,
    discountPrice: 25,
    image: 'https://i.etsystatic.com/13555584/r/il/97b132/4931294748/il_fullxfull.4931294748_4oy3.jpg',
  },
  {
    id: 2,
    title: 'School Bag',
    price: 50,
    discountPrice: 40,
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/backpack/3/3/p/space-theme-shell-bags-for-school-picnic-space-theme-shell-bags-original-imagq2rebzcnh6zm.jpeg?q=90&crop=false',
  },
  {
    id: 3,
    title: 'Phone Cover',
    price: 20,
    discountPrice: 18,
    image: 'https://i.etsystatic.com/24492688/r/il/ba089a/3346272590/il_570xN.3346272590_59a4.jpg',
  },
  {
    id: 4,
    title: 'Tshirt',
    price: 20,
    discountPrice: 18,
    image: 'https://i.etsystatic.com/53113783/r/il/dc0018/6339802540/il_fullxfull.6339802540_mknv.jpg',
  },
  {
    id: 5,
    title: 'Hoodie',
    price: 20,
    discountPrice: 18,
    image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/g/24/adaa1a93-0aa0-466c-b395-23dee97c7a4c.jpg',
  },
  {
    id: 6,
    title: 'Watch',
    price: 20,
    discountPrice: 18,
    image: 'https://images.lifestyleasia.com/wp-content/uploads/2019/04/25151113/jacob-amp-co-astronomiasolar_cover_crop_1396x781.jpg',
  },
  {
    id: 7,
    title: 'Toys',
    price: 20,
    discountPrice: 18,
    image: 'https://m.media-amazon.com/images/I/61eYsDXMITL.jpg',
  },
  {
    id: 8,
    title: 'Painting',
    price: 20,
    discountPrice: 18,
    image: 'https://khirki.in/cdn/shop/files/Artboard4_cfd59224-ae9c-400e-8828-fcd5de218cbb.jpg?v=1740553820',
  },
  {
    id: 9,
    title: 'keychain',
    price: 20,
    discountPrice: 18,
    image: 'https://images.meesho.com/images/products/438568843/yzd7w_512.webp',
  },
  // Add more products as needed
];

function ProductDisplay() {
  return (
    <div
      className="relative text-white w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787717_1280.jpg")',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white text-black bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden p-4 border border-white border-opacity-30"
              >
                <div className="w-full aspect-video">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-200 line-through">Price: ${product.price}</p>
                  <p className="text-green-400 font-bold">Discount Price: ${product.discountPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDisplay;
