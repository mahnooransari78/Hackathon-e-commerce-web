import Image from 'next/image';
import black from '@/app/Image/black bag.png';
import mini from '@/app/Image/mini bag.png';
import Navbar from '../component/navbar';
import Panal from '../component/panal';
import Footer from '../component/footer';
import Rectangle1 from '@/app/Image/Rectangle1.png'
import Rectangle2 from '@/app/Image/Rectangle 2.png'
import Rectangle3 from '@/app/Image/Rectangle 3.png'


import us from '@/app/Image/us bg.png'
import small from '@/app/Image/small.png'



export default function ProductDetails() {
    return (
      <>
      <Panal />
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Product Details</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Product Details</span>
            </p>
          </div>
        </header>
  
        {/* Product Section */}
        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Images */}
            <div className="flex-1 grid grid-cols-3 gap-4">
            <div className="flex gap-4">
                <Image
                  src={us}
                  alt="Thumbnail 1"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <Image
                  src={mini}
                  alt="Thumbnail 2"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <Image
                  src={small}
                  alt="Thumbnail 3"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <Image
                  src={small}
                  alt="Thumbnail 3"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                
              </div>
              <Image
                src={black}
                alt="Main Product"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
  
            {/* Product Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800">Plywood Arm Chair</h2>
              <p className="text-gray-500 text-sm mt-2">
                Stylish and durable chair for your home and office.
              </p>
              <div className="text-pink-500 text-2xl font-bold mt-4">$150</div>
              <p className="text-gray-700 text-sm mt-4">
                Category: <span className="font-semibold">Furniture</span>
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500">(20 Reviews)</span>
              </div>
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-pink-600">
                Add to Cart
              </button>
            </div>
          </div>
  
          {/* Tabs Section */}
          <div className="mt-12">
            <div className="flex gap-8 border-b pb-2">
              <button className="font-semibold text-blue-800">Description</button>
              <button className="text-gray-500">Additional Info</button>
              <button className="text-gray-500">Reviews</button>
              <button className="text-gray-500">Video</button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
              <p className="text-gray-600 mt-2">
                This is a premium-quality chair made with high-grade materials.
                Comfortable, stylish, and long-lasting for any space.
              </p>
            </div>
          </div>
  
          {/* Related Products */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Image
                  src={Rectangle2}
                  alt="Related Product 1"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-800 font-semibold">Product Name 1</p>
                <p className="text-pink-500">$120</p>
              </div>
              <div className="text-center">y
                <Image
                  src={Rectangle3}
                  alt="Related Product 2"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-800 font-semibold">Product Name 2</p>
                <p className="text-pink-500">$140</p>
              </div>
              <div className="text-center">
                <Image
                  src={Rectangle2}
                  alt="Related Product 3"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-800 font-semibold">Product Name 3</p>
                <p className="text-pink-500">$110</p>
              </div>
              <div className="text-center">
                <Image
                  src={Rectangle1}
                  alt="Related Product 4"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-800 font-semibold">Product Name 4</p>
                <p className="text-pink-500">$130</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      </>
    );
  }
  