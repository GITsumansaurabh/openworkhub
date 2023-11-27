import React from "react";

const products = [
  {
    id: 1,
    name: "Cleaning",
    href: "#",
    imageSrc:
      "https://i0.wp.com/aapkapainter.com/blog/wp-content/uploads/2023/07/professional-cleaning-service-scaled.jpg?fit=2560%2C1707&ssl=1",
    price: "$30",
  },
  {
    id: 2,
    name: "Painting",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/7218003/pexels-photo-7218003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$35",
  },
  {
    id: 3,
    name: "Plumbing",
    href: "#",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663047166207-fd717b9a0ba7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$35",
  },
  {
    id: 4,
    name: "Construction",
    href: "#",
    imageSrc:
      "https://as2.ftcdn.net/v2/jpg/06/22/91/45/1000_F_622914580_ZAj2ZcEULZfytQKXR22WQSsI0DRqaqR9.jpg",
    price: "$35",
  },
  {
    id: 5,
    name: "Furniture Assembly",
    href: "#",
    imageSrc:
      "https://as2.ftcdn.net/v2/jpg/06/01/94/47/1000_F_601944788_3p7qRUHXgNtkz8WjioQUUpMniwW66FpK.jpg",
    price: "$35",
  },
  {
    id: 6,
    name: "Babysitting",
    href: "#",
    imageSrc:
      "https://as2.ftcdn.net/v2/jpg/03/58/40/73/1000_F_358407357_ZFWpofaeFLRcF76okUBsDz7w3OkxgoA6.jpg",
    price: "$35",
  },
  {
    id: 7,
    name: "Electricity Help",
    href: "#",
    imageSrc:
      "https://as1.ftcdn.net/v2/jpg/06/18/50/62/1000_F_618506236_yoass4AKLu6K3SS0WGt04CVxFjT13G1D.jpg",
    price: "$35",
  },
  {
    id: 8,
    name: "Heavy Lifting",
    href: "#",
    imageSrc:
      "https://as1.ftcdn.net/v2/jpg/05/07/50/32/1000_F_507503237_x5es0yOQIqdMM8ZwVi75pntrQaCopnKp.jpg",
    price: "$35",
  },
  {
    id: 9,
    name: "Mounting",
    href: "#",
    imageSrc:
      "https://as1.ftcdn.net/v2/jpg/05/58/10/78/1000_F_558107822_BncHEwcwCDJIoAoyZEsYlmIJJnpGHUJn.jpg",
    price: "$35",
  },
  {
    id: 10,
    name: "Delivery",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/6407535/pexels-photo-6407535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$35",
  },
  {
    id: 11,
    name: "Outdoor Help",
    href: "#",
    imageSrc:
      "https://as1.ftcdn.net/v2/jpg/03/14/87/88/1000_F_314878805_LgjHjlAAXEACUtXuY8sGfz6LNdNv3bYE.jpg",
    price: "$35",
  },
  {
    id: 12,
    name: "Personal Chef",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$35",
  },
];

export default function Works() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-center mb-10 font-bold tracking-tight text-gray-900">
            We can help you with...
          </h2>

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
                        <span
                          aria-hidden="true"
                          className="absolute font-bold inset-0"
                        />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <body class="mt-20 object-cover object-center h-80 w-full rounded-lg">
            <div class="relative object-cover object-center h-80 w-full rounded-lg">
              <img
                class="object-cover object-center h-80 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1565372595781-59667837222a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>

              <h3 class="absolute text-5xl text-black top-5 left-5">
                <h2 className="text-4xl font-bold text-black-900 tracking-tight sm:text-5xl mt-16 mb-5 ">
                  Want to earn Money 💵
                </h2>
                <h1 className="text-4xl font-bold text-black-900 tracking-tight sm:text-5xl mt-10 px-10 ">
                  Become a Tasker ➡️
                </h1>
              </h3>
            </div>
          </body>
        </div>
      </div>
    </div>
  );
}
