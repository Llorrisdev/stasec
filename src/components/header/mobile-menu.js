import Link from "next/link"

 
const MobileMenu  = ({open,isActive}) => {

    return(
   <div
  className={`block ${open ? 'max-h-[500px]' : 'max-h-0' } transition-max-h duration-300 overflow-hidden text-blue-gray-900 transition-max-h duration-500 ease-in-out lg:hidden bg-gray-900 shadow md:hidden rounded-lg`}
>
<div class="container mx-auto pb-2 ">
<ul class="font-medium flex space-y-3 flex-col p-4 md:p-0 mt-4 rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <Link href="/" className={`block py-2 px-3 text-white ${isActive("/") ? 'hover:bg-blue-800 bg-blue-700' : 'hover:bg-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 text-white`} aria-current="page">Home</Link>
        </li>
        <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
  
            className={`flex cursor-pointer items-center justify-between py-2 px-3 text-white ${isActive("/service") ? 'hover:bg-blue-800 bg-blue-700' : 'hover:bg-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 text-white`}
          >
            <span class="text-sm font-medium">Service</span>

            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              { open ? <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
</svg>

               
              :<svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              }
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">
            <li>
              <Link
                href="/service-1"
                class="block py-2 px-3 text-gray-300 rounded md:bg-transparent md:text-blue-700 md:p-0  hover:bg-gray-800 capitalize hover:text-gray-100"
              >
                Penetration Testing
              </Link>
            </li>

            <li>
            <Link
               href="/service-2"
                class="block py-2 px-3 text-gray-300 rounded md:bg-transparent md:text-blue-700 md:p-0  hover:bg-gray-800 capitalize hover:text-gray-100"
              >
                Secure Development Tools
                </Link>
            </li>

            
            <li>
            <Link
                    href="/service-3"
                class="block py-2 px-3 text-gray-300 rounded md:bg-transparent md:text-blue-700 md:p-0  hover:bg-gray-800 capitalize hover:text-gray-100"
              >
                Security Monitoring & Assessment
                </Link>
            </li>

          </ul>
        </details>
      </li>
        <li>
          <Link href="/industry" className={`block py-2 px-3 text-white ${isActive("/industry") ? 'hover:bg-blue-800 bg-blue-700' : 'hover:bg-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 text-white`}>Industry</Link>
        </li>
        <li>
        <Link href="/about" className={`block py-2 px-3 text-white ${isActive("/about") ? 'hover:bg-blue-800 bg-blue-700' : 'hover:bg-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 text-white`}>About</Link>
        </li>
        <li className="pt-3">
        <Link href={"/contact"} className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs sm:text-sm px-5 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        CONTACT US
      </Link>
        </li>
  </ul>
</div>

 </div>
    )
}

export default MobileMenu