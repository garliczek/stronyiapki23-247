function utworzPola() {
    const hiddenInput = document.querySelector('input[type=hidden]');
    console.log(hiddenInput.dataset);
    console.log(hiddenInput.dataset.moth);
    const moth = document.createElement('ol');
    moth.value = hiddenInput.dataset.moth;
    const bumblebee = document.createElement('ol');
    bumblebee.value = hiddenInput.dataset.bumblebee;
    const div = document.querySelector('div');
    div.appendChild(moth);
    div.appendChild(bumblebee);
  }
