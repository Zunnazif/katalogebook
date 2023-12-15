let getNameBook = document.getElementById("getNameBook");
let getSKUBook = document.getElementById("getSKUBook");

let display = document.getElementById("display");
let totalProduct = document.getElementById("total-product");

async function getBookByName() {
  let request = await fetch(
    "https://zunnaserver.vercel.app/ebook/GetMultipleEBookByName",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookName: getNameBook.value,
      }),
    }
  );

  let { eBooks, isSucceeded, message } = await request.json();
  console.log(eBooks, isSucceeded);

  if (isSucceeded == true) {
    let arrMaping = eBooks
      .map((item, index) => {
        return `
        <div
                key={item.sku}
                class="max-w-[40%] sm:max-w-[18%] lg:max-w-[12%] bg-slate-950 rounded-md shadow-md"
            >
                <span class="bg-yellow-500 px-0.5 absolute ml-0.5 rounded-ss-md">
                <p class="text-[50%] font-semibold text-red-600">51%</p>
                <p class="text-[40%] text-white">OFF</p>
                </span>
                <img
                width={500}
                height={500}
                src=/halaman-produk/${item.sku}.jpg
                alt=page-${item.sku}
                class="text-lg rounded-t-lg"
                />
                <div class="content text-white p-2">
                <p class="text-[60%] truncate sm:text-[65%]">
                    ${item.sku}. ${item.bookName}
                </p>
                <div class="flex my-2">
                    <h3 class="text-red-500 text-xs">
                    <span class="text-[60%] sm:text-[70%]">Rp</span>980
                    </h3>
                    <p class="text-[50%] sm:text-[60%] ml-2 line-through">
                    Rp2000
                    </p>
                </div>
                <div class="flex justify-between">
                    <button class="bg-gray-500 px-5 rounded-xl text-xs">
                    Beli
                    </button>
                    <div class="flex items-center">
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>

                    <svg
                        class="w-2 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    </div>
                </div>
                </div>
            </div>`;
      })
      .join("");
    console.log(getNameBook.value);

    display.innerHTML = arrMaping;
    totalProduct.innerHTML = eBooks.length;
  } else if (isSucceeded == false) {
    tb.innerHTML = `<p>Tidak ada buku</p>`;
  }
}

getBookByName();

async function getBookBySKU() {
  console.log(getSKUBook.value);
  let request = await fetch(
    "https://zunnaserver.vercel.app/ebook/GetMultipleEBookBySKU",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sku: getSKUBook.value,
      }),
    }
  );

  let { eBooks, isSucceeded } = await request.json();

  console.log(eBooks, isSucceeded);

  if (isSucceeded == true) {
    let arrMaping = eBooks
      .map((item, index) => {
        return `
        <div
                key={item.sku}
                class="max-w-[40%] sm:max-w-[18%] lg:max-w-[12%] bg-slate-950 rounded-md shadow-md"
            >
                <span class="bg-yellow-500 px-0.5 absolute ml-0.5 rounded-ss-md">
                <p class="text-[50%] font-semibold text-red-600">51%</p>
                <p class="text-[40%] text-white">OFF</p>
                </span>
                <img
                width={500}
                height={500}
                src='/halaman-produk/'${
                  index + 101 ||
                  "https://albertwalicki.com/_next/image?url=%2Flogo.png&w=128&q=75"
                }  
                alt=page-${item.sku}
                class="text-lg rounded-t-lg"
                />
                <div class="content text-white p-2">
                <p class="text-[60%] truncate sm:text-[65%]">
                    ${item.sku}. ${item.bookName}
                </p>
                <div class="flex my-2">
                    <h3 class="text-red-500 text-xs">
                    <span class="text-[60%] sm:text-[70%]">Rp</span>980
                    </h3>
                    <p class="text-[50%] sm:text-[60%] ml-2 line-through">
                    Rp2000
                    </p>
                </div>
                <div class="flex justify-between">
                    <button class="bg-gray-500 px-5 rounded-xl text-xs">
                    Beli
                    </button>
                    <div class="flex items-center">
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        class="w-2 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>

                    <svg
                        class="w-2 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    </div>
                </div>
                </div>
            </div>`;
      })
      .join("");
    console.log(arrMaping);

    display.innerHTML = arrMaping;
  } else if (isSucceeded == false) {
    display.innerHTML = `<p>Tidak ada Buku>`;
  }
}

console.log();
