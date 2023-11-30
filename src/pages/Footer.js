import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class=" shadow bg-gray-800">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white font-bold">
                openworkhub
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-bold text-white sm:mb-0 dark:text-white">
              <li>
                <a href="#" class="hover:no-underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:no-underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:no-underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:no-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block font-bold text-sm text-gray-500 sm:text-center dark:text-white">
            © 2023
            <p>OpenWorkHub™</p>All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
