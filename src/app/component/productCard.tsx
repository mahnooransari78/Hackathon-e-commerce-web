import Link from 'next/link';
import Image from 'next/image';
import { BsCart } from 'react-icons/bs';
import { GoHeart } from 'react-icons/go';
import { LiaSearchPlusSolid } from 'react-icons/lia';
interface Product {
  id: number;
  title: string;
  price: number;
  image:string ;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className=" w-[250px] border-gray-200 bg-white overflow-hidden group relative transition-all duration-300 hover:shadow-lg">
       {/* Image Section */}
                  <div className="bg-[#F6F7FB] flex justify-center items-center h-56">
                    <Image
                      src={product.image}
                      alt="Cantilever Chair"
                      className="w-32 h-32 object-contain"
                      width={130}
                      height={150}
                    />
                  </div>
                  {/* Hover Icons */}
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex gap-2">
                                  <button className="p-2 bg-[#EEEFFB] text-[#151875]  rounded-full hover:bg-[#FB2E86] hover:text-white">
                                    <BsCart />
                                  </button>
                                  <button className="p-2 bg-[#EEEFFB] text-[#151875] rounded-full hover:bg-[#FB2E86] hover:text-white">
                                    <GoHeart />
                                  </button>
                                  <button className="p-2 bg-[#EEEFFB] text-[#151875] rounded-full  hover:bg-[#FB2E86] hover:text-white">
                                    <LiaSearchPlusSolid />
                                  </button>
                                </div>
                              </div>
            <div className="p-4 text-center">
            <p className="font-lato text-lg font-bold text-[#FB2E86] mb-2">
           {product.title} 
      </p>
      <p className="font-josefin text-sm text-gray-600">
                Code - Y523201
              </p>
              <p className="font-lato text-lg font-bold text-[#151875] mt-1">
       ${product.price}</p>
      
      <Link href={`/product/${product.id}`}>
        <button className="absolute bottom-0 left-0 w-full h-10 bg-[#FB2E86] text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
      </Link>
            </div>

      
    </div>
  );
};

export default ProductCard;

