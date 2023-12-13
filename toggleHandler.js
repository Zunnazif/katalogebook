function changeHandler() {
    let getNameBook = document.getElementById('getNameBook');
    let getSKUBook = document.getElementById('getSKUBook');
    let thSKU = document.getElementById('thSKU');
    let thNama = document.getElementById('thNama');

    if (getNameBook.classList.contains('hidden')){
        getNameBook.classList.remove('hidden');
        thNama.classList.add('bg-gray-800')
        thSKU.classList.remove('bg-gray-800')
        getSKUBook.classList.add('hidden');
        getSKUBook.value = "";
    } else {
        getNameBook.classList.add('hidden');
        getSKUBook.classList.remove('hidden');
        thNama.classList.remove('bg-gray-800')
        thSKU.classList.add('bg-gray-800')
        getNameBook.value = "";
    };
    
    console.log("getNameBook", getNameBook.value)
    console.log("getSKUBook", getSKUBook.value)
};
