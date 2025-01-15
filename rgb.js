const autoGenerateColor = () => {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const color = `rgb(${R}, ${G}, ${B})`
  document.getElementById(
    "color-box"
  ).style.backgroundColor = color;
    document.getElementById('color-code').innerText = color;
};

const generateColor = () => {
    const R = document.getElementById('rValue').value;
    const G = document.getElementById('gValue').value;
    const B = document.getElementById('bValue').value;
    const color = `rgb(${R}, ${G}, ${B})`;
    if (R > 0 && G > 0 && B > 0) {
        document.getElementById("color-box").style.backgroundColor = color;
        document.getElementById("color-code").innerText = color;
    }
    else {
        const modal = document.getElementById("modal-copy");
        modal.innerHTML = `
         <dialog id="my_modal_2" class="modal">
        <div class="modal-box flex items-center gap-2">
        <div class="flex gap-1">
        <img class="w-5" src='./warning.png'>
        <img class="w-5" src='./warning.png'>
        </div>
          <h3 class="text-lg font-bold">Provide right rgb color code</h3>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    `;
        my_modal_2.showModal();
    }
}

const copyColor = () => {
    const colorCode = document.getElementById('color-code')
    const inputTag = document.createElement('input')
    inputTag.value = colorCode.innerText;
    document.body.appendChild(inputTag)
    inputTag.select()
    document.execCommand('copy')
    document.body.removeChild(inputTag)
    // alert(`${colorCode.innerText} color copied to clipboard`)
    const modal = document.getElementById('modal-copy')
    modal.innerHTML = `
         <dialog id="my_modal_2" class="modal">
        <div class="modal-box flex items-center gap-2">
        <div class="flex">
        <img class="w-5" src='./sucess.jfif'>
        <img class="w-5" src='./sucess.jfif'>
        </div>
          <h3 class="text-lg font-bold">${`${colorCode.innerText} color copied to clipboard`}</h3>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    `;
    my_modal_2.showModal();
}

autoGenerateColor();
