let getNameBook = document.getElementById("getNameBook");
let getSKUBook = document.getElementById("getSKUBook");

let tb = document.getElementById("tb");

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
        return `<tr class="hover:bg-gray-900 cursor-pointer">
            <td class="py-3.5 px-4" onclick="addSKUonInput(${item.sku})">${item.sku}</td>
            <td class="py-3.5 px-4 text-start tracking-wider">${item.bookName}</td>
        </tr>`;
      })
      .join("");
    console.log(getNameBook.value);

    tb.innerHTML = arrMaping;
  } else if (isSucceeded == false) {
    tb.innerHTML = `<tr class="hover:bg-gray-900 cursor-pointer">
        <td class="py-3.5 px-4 ">000</td>
        <td class="py-3.5 px-4 text-start tracking-wider">Buku Tidak Ada Dalam Katalog</td>`;
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
        return `<tr class="hover:bg-gray-900 cursor-pointer">
            <td class="py-3.5 px-4 ">${item.sku}</td>
            <td class="py-3.5 px-4 text-start tracking-wider">${item.bookName}</td>
        </tr>`;
      })
      .join("");
    console.log(arrMaping);

    tb.innerHTML = arrMaping;
  } else if (isSucceeded == false) {
    tb.innerHTML = `<tr class="hover:bg-gray-900 cursor-pointer">
        <td class="py-3.5 px-4 ">000</td>
        <td class="py-3.5 px-4 text-start tracking-wider"><a href="#" target="_blank">Buku Tidak Ada Dalam Katalog</a></td>`;
  }
}
