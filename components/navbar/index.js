import Link from 'next/link'


function Navbar() {
  return (
    <nav className=" shadow-sm w-full z-10 bg-[#f3f1ed]">
      <div className="w-full">
        <div className="flex flex-col items-center ">
        <div className="flex flex-row items-center h-20 w-full">
          <div className="flex items-center mx-8 md:mx-20 justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <Link href='/'>
                <a>
                  <img src="/images/LogoItem.png" className="w-auto h-10" />
                </a>
              </Link>
            </div>
            <div className="ml-3 md:ml-10 flex items-baseline space-x-4 ">
                <Link href='/cart'>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-1 py-1 text-xm md:px-3 md:py-2 rounded-md md:text-3xl font-medium" >
                    <i className="fa-solid fa-bag-shopping"></i>                 
                  </a>
                </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mx-20 justify-between w-full">
        <div className="items-center mx-7 md:mx-16  justify-between w-full">
        <Link href='/'>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-2 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-2xl font-normal" >
                  <span>New Arrival</span>
                  </a>
                </Link>
                <Link href='/'>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-2 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-2xl font-normal" >
                  <span>Best Seller</span>
                  </a>
                </Link>
                <Link href={'/type/suit'} key={'suit'}>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-2 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-2xl font-normal" >
                  <span>Suit</span>
                  </a>
                </Link>
                <Link href={'/type/dress'} key={'dress'}>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-2 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-2xl font-normal" >
                  <span>Dress</span>
                  </a>
                </Link>
                <Link href={'/type/pants'} key={'pants'}>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-1 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-2xl font-normal" >
                  <span>Pants</span>
                  </a>
                </Link>
                <Link href={'/type/blouse'} key={'blouse'}>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-2 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-2xl font-normal" >
                  <span>Blouse</span>
                  </a>
                </Link>
        </div></div>
        </div></div></nav>
  ) 
}

export default Navbar;
