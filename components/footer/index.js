/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="shadow-md bottom-0 w-full" >
        <div className="flex flex-col bg-[#f3f1ed] p-8 sm:flex-row">
          <div className="flex flex-col gap-5 items-center text-center sm:gap-10 sm:items-start sm:flex-row">
            <div className="mx-8">
              <Link href="/">
                <span className="text-lg font-bold"> Nawawis Boutique</span>
              </Link>
            </div>
  
            <div className="text-lg text-center">
              <h5 className="font-bold uppercase"> Follow </h5>
              <ul className="flex-col gap-4 sm:flex-row items-center">
                <li className="flex gap-2 pb-2 "> 
                  <img src="/images/shopee.png" className="w-auto h-4" />
                  <span>
                  <Link className='list-none' href="https://shopee.co.id/nawawis.boutique?smtt=0.131462281-1654134687.9"> 
                    <a className='list-none'> {"Nawawi's Boutique"}</a> 
                  </Link>
                  </span>
                </li>
                
                <li className="flex gap-2 pb-2">  
                  <i  className="fab fa-instagram"></i>
                  <span ><Link className='text-sm ' href="https://instagram.com/nawawis.boutique?igshid=YmMyMTA2M2Y=">  
                  <a className='list-none'>{"Nawawi's Boutique"}</a> 
                  </Link></span></li>
                  <li className="flex gap-2 pb-2">  
                  <i  className="fab fa-whatsapp" ></i>
                  <span > <Link className='text-sm ' href="https://wa.me/+6281354181920">  
                  <a className='list-none'>{"081354181920"}</a> 
                  </Link></span>
                </li>
              </ul>
            </div>
            <div className="text-lg text-center sm:text-left">
              <h5 className="font-bold uppercase"> Help </h5>
              <ul className="flex-col text-center items-start sm:text-left sm:items-center">
                <li className="pb-2"> About Us </li>
                <li className="pb-2"> Term & Policy </li>
                <li className="pb-2"> FAQs </li>
              </ul>
            </div>
          </div>
          <div className="flex-auto mt-10 pl-4 text-lg sm:mt-0">
            <h5 className="font-bold uppercase text-center"> Payment Methods </h5>
            <div className="flex flex-wrap mt-5">
                <img src="/images/jenius.png" className="w-auto h-5 fill-black ml-16 mb-5" />
                <img src="/images/bri.png" className="w-auto h-5 ml-16" />
                <img src="/images/dana.png" className="w-auto h-5 ml-16" />
                <img src="/images/shopeepay.png" className="w-auto h-5 ml-16" />
                <img src="/images/cimb.png" className="w-auto h-5 ml-20" />
            </div>
            <div className='ml-16'>
              <table>
                <thead>
                  <td>
                  <Link href='/method/btpn'>
                      <a className="cursor-pointer bg-gray-800 hover:bg-gray-400 text-white hover:text-black rounded py-1 px-1" >
                      <span>Bank BTPN</span>
                      </a>
                  </Link>
                  </td>
                  <td>
                  <Link href='/method/bri'>
                      <a className="cursor-pointer bg-gray-800 hover:bg-gray-400 text-white hover:text-black rounded py-1 px-1 ml-12" >
                      <span>Bank BRI</span>
                      </a>
                  </Link>
                  </td>
                  <td>
                  <Link href='/method/dana'>
                      <a className="cursor-pointer bg-gray-800 hover:bg-gray-400 text-white hover:text-black rounded py-1 px-1 ml-16" >
                      <span>DANA</span>
                      </a>
                  </Link>
                  </td>
                  <td>
                  <Link href='/method/shopee'>
                      <a className="cursor-pointer bg-gray-800 hover:bg-gray-400 text-white hover:text-black rounded py-1 px-1 ml-10" >
                      <span>Shopeepay</span>
                      </a>
                  </Link>
                  </td>
                  <td>
                  <Link href='/method/cimb'>
                      <a className="cursor-pointer bg-gray-800 hover:bg-gray-400 text-white hover:text-black rounded py-1 px-1 ml-6" >
                      <span>Bank CIMB</span>
                      </a>
                  </Link>
                  </td>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[#f3f1ed] py-8">
          <div className="flex flex-col justify-center bg-[#f3f1ed] pt-4 border-solid border-t-4 border-gray-50 mx-4 lg:flex-row">
            <p className="text-center"> ©NAWAWIS_BOUTIQUE 2022 </p>
          </div>
        </div>
      </footer>
    )
  }
  export default Footer