function utworzPola() {
    const hiddenInput = document.querySelector('input[type=hidden]');
    console.log(hiddenInput.dataset);
    console.log(hiddenInput.dataset.song1);
    const pios1 = document.createElement('input');
    pios1.value = hiddenInput.dataset.song1;
    const pios2 = document.createElement('input');
    pios2.value = hiddenInput.dataset.song2;
    const pios3 = document.createElement('input');
    pios3.value = hiddenInput.dataset.song3;
    const div = document.querySelector('div');
    div.appendChild(pios1);
    div.appendChild(pios2);
    div.appendChild(pios3);
  }
