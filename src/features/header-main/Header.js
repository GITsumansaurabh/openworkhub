import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  selectCount,
} from './headerSlice';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const products = [
  {
    id: 1,
    name: 'Cleaning',
    href: '#',
    imageSrc: 'https://i0.wp.com/aapkapainter.com/blog/wp-content/uploads/2023/07/professional-cleaning-service-scaled.jpg?fit=2560%2C1707&ssl=1',
    price: '$30',
  },
  {
    id: 2,
    name: 'Painting',
    href: '#',
    imageSrc: 'https://as2.ftcdn.net/v2/jpg/03/69/48/31/1000_F_369483179_L7Ah5uk7xWggMVTkywUvCTOGvnj8HuIS.jpg',
    price: '$35',
  },
  {
    id: 3,
    name: 'Plumbing',
    href: '#',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1663047166207-fd717b9a0ba7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$35',
  },
  {
    id: 4,
    name: 'Construction',
    href: '#',
    imageSrc: 'https://as2.ftcdn.net/v2/jpg/06/22/91/45/1000_F_622914580_ZAj2ZcEULZfytQKXR22WQSsI0DRqaqR9.jpg',
    price: '$35',
   
  },
  {
    id: 5,
    name: 'Furniture Assembly',
    href: '#',
    imageSrc: 'https://as2.ftcdn.net/v2/jpg/06/01/94/47/1000_F_601944788_3p7qRUHXgNtkz8WjioQUUpMniwW66FpK.jpg',
    price: '$35',
  },{
    id: 6,
    name: 'Babysitting',
    href: '#',
    imageSrc: 'https://as2.ftcdn.net/v2/jpg/03/58/40/73/1000_F_358407357_ZFWpofaeFLRcF76okUBsDz7w3OkxgoA6.jpg',
    price: '$35',
  },{
    id: 7,
    name: 'Electricity Help',
    href: '#',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/06/18/50/62/1000_F_618506236_yoass4AKLu6K3SS0WGt04CVxFjT13G1D.jpg',
    price: '$35',
  },{
    id: 8,
    name: 'Heavy Lifting',
    href: '#',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/05/07/50/32/1000_F_507503237_x5es0yOQIqdMM8ZwVi75pntrQaCopnKp.jpg',
    price: '$35',
  },{
    id: 9,
    name: 'Mounting',
    href: '#',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/05/58/10/78/1000_F_558107822_BncHEwcwCDJIoAoyZEsYlmIJJnpGHUJn.jpg',
    price: '$35',
  },{
    id: 10,
    name: 'Delivery',
    href: '#',
    imageSrc: 'https://as2.ftcdn.net/v2/jpg/02/36/46/03/1000_F_236460380_ICDeNP977uQcvNAPLB3qSvPMmESEf1Go.jpg',
    price: '$35',
  },{
    id: 11,
    name: 'Outdoor Help',
    href: '#',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/03/14/87/88/1000_F_314878805_LgjHjlAAXEACUtXuY8sGfz6LNdNv3bYE.jpg',
    price: '$35',
  },{
    id: 12,
    name: 'Personal Chef',
    href: '#',
    imageSrc: 'https://as2.ftcdn.net/v2/jpg/06/66/60/05/1000_F_666600526_IxR9whVyjesDDisqDfKngqIhJNTPVJtP.jpg',
    price: '$35',
  }
  // More products...
]


export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div>
        
      <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        {/* <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/signin" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav> */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mt-10">
         
          <div className="text-center">
            <h className="text-4xl mb-3">
              Welcome to
            </h>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-3 mb-5">
              openworkhub
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover endless opportunities at OpenWorkHub: A user-friendly platform connecting tasks and talents, fostering collaboration, economic growth, and trust in your local community. Join us today
            </p>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-20 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mt-10 ">
              Today, which work you want to be done?
            </div> */}


            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Today, what do you need help with?"
                  />
                </div>
              </div>
            </div>
            </div>


           </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
             
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
       
      </div> 

      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">We can help in...</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
