import Image from 'next/image';
import image from '@/app/Image/image 1174 (3).png'
import girl from '@/app/Image/girl.png'
import girl1 from '@/app/Image/girl1.png'
import girl2 from '@/app/Image/girl2.png'



export default function BlogPage() {
    return (

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Blog Page</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Blog</span>
            </p>
          </div>
        </header>
  
        {/* Main Section */}
        <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          {/* Blog Posts */}
          <section className="flex-1 space-y-8">
            {/* Post 1 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={girl}
                loading='lazy'
                alt="Blog Post 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  How to stay productive in remote work
                </h2>
                <p className="text-gray-600 mt-2">
                  Remote work requires discipline and organization. Learn the
                  secrets to staying on track and achieving your goals.
                </p>
                <p className="text-sm text-gray-400 mt-4">Author: Jane Doe</p>
              </div>
            </article>
  
            {/* Post 2 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={girl1}
                loading='lazy'
                alt="Blog Post 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Exploring the beauty of nature
                </h2>
                <p className="text-gray-600 mt-2">
                  Discover the breathtaking landscapes and hidden gems of nature
                  that inspire us to protect our planet.
                </p>
                <p className="text-sm text-gray-400 mt-4">Author: John Smith</p>
              </div>
            </article>
  
            {/* Post 3 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={girl2}
                loading='lazy'
                alt="Blog Post 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Tips for staying healthy in winter
                </h2>
                <p className="text-gray-600 mt-2">
                  Learn simple tips to keep yourself healthy and fit during the
                  colder months.
                </p>
                <p className="text-sm text-gray-400 mt-4">Author: Sarah Lee</p>
              </div>
            </article>
          </section>
  
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Search</h3>
              <input
                type="text"
                placeholder="Search..."
                className="mt-4 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
  
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  Technology
                </li>
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  Health
                </li>
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  Travel
                </li>
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  Business
                </li>
              </ul>
            </div>
  
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Posts
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  The rise of AI in modern tech
                </li>
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  Best hiking spots in Europe
                </li>
                <li className="text-gray-600 hover:text-pink-500 cursor-pointer">
                  How to manage your finances
                </li>
              </ul>
            </div>
          </aside>
        </main>
  
        {/* Footer */}
        <footer className="bg-gray-100 py-8 mt-12">
          <div className="container justify-center  mx-auto px-4 text-center">
          <Image 
            src={image}
            alt='logo'
            width={900}
            height={1114}
            loading='lazy'
            />
          </div>
        </footer>
      </div>
    );
  }