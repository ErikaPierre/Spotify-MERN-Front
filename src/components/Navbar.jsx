import React from "react";

function Navbar() {
  return (
    <div>
      <nav class=" bg-black fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://open.spotify.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="src/assets/spotify.png" class="h-8" alt="spotify Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Spotify
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-base p-4 mx-4 text-center"
            >
              S'inscrire
            </button>
            <button
              type="button"
              class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-base p-4 text-center"
            >
              Se connecter
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <form class="flex items-center max-w-sm mx-auto">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-full focus:ring-green-700 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search..."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-lg font-large text-white bg-gray-700 rounded-full border hover:bg-green-800 focus:ring-4 "
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
