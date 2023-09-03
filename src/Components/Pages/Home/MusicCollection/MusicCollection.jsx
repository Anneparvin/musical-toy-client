import React from 'react';
import collection1 from '../../../../assets/images/musical notes/istockphoto-1152711423-612x612.jpg'
import collection2 from '../../../../assets/images/musical notes/istockphoto-1438614688-612x612.jpg'
import collection3 from '../../../../assets/images/musical notes/istockphoto-146720717-2048x2048.jpg'

const MusicCollection = () => {
    return (
        <div>
            <h1 className='text-4xl font-serif font-bold text-center mt-8'>Music collection</h1>
<section>
  <div class="mx-auto bg-black text-yellow-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold sm:text-3xl">
        Music Collection
      </h2>

      <p class="mt-4 max-w-md">
      A musical toy collection consists of a variety of toys that produce sounds or music when manipulated or played with. These toys are typically designed to entertain, educate, or engage children (and sometimes adults) through music and sound. 
      </p>
    </header>

    <div class="mt-8 block lg:hidden">
      <button
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 rtl:rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>

    <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div class="hidden space-y-4 lg:block">
        <div>
          <label for="SortBy" class="block text-xs font-medium">
            Sort By
          </label>

          <select id="SortBy" class="mt-1 rounded border-gray-300 text-black text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>

        <div>
          <p class="block text-xs font-medium">Filters</p>

          <div class="mt-1 space-y-2">
            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 transition"
              >
                <span class="text-sm font-medium"> Availability </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 text-black bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm"> 0 Selected </span>

                  <button
                    type="button"
                    class="text-sm underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      for="FilterInStock"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        In Stock (5+)
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterPreOrder"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Pre Order (3+)
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterOutOfStock"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Out of Stock (10+)
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>

            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 transition"
              >
                <span class="text-sm font-medium"> Price </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 text-black bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm">
                    The highest price is $600
                  </span>

                  <button
                    type="button"
                    class="text-sm underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div class="border-t border-gray-200 p-4">
                  <div class="flex justify-between gap-4">
                    <label
                      for="FilterPriceFrom"
                      class="flex items-center gap-2"
                    >
                      <span class="text-sm">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label for="FilterPriceTo" class="flex items-center gap-2">
                      <span class="text-sm">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>

            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 transition"
              >
                <span class="text-sm font-medium"> Colors </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 text-black bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm"> 0 Selected </span>

                  <button
                    type="button"
                    class="text-sm underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      for="FilterRed"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterRed"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Red
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterBlue"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterBlue"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Blue
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterGreen"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterGreen"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Green
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterOrange"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOrange"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Orange
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterPurple"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPurple"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Purple
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for="FilterTeal"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterTeal"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium">
                        Teal
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3">
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" class="group block overflow-hidden">
              <img
                src={collection1}
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3
                  class="text-xs group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-black font-bold"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="group block overflow-hidden">
              <img
                src={collection2}
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3
                  class="text-xs group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-black font-bold"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="group block overflow-hidden">
              <img
                src={collection3}
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3
                  class="text-xs group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-black font-bold"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>   
        </div>
    );
};

export default MusicCollection;