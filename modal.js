export class Modal {

  constructor(id) {
    this.modal = document.getElementById(id);
    this.listenCloseButton();

  }

  open() {
    this.modal.classList.add('modal-showed')
  }

  close() {
    this.modal.classList.remove('modal-showed')
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed')
  }

  listenCloseButton() {
    const closeButton = this.modal.querySelector('.modal-close-button');
    closeButton.addEventListener('click', (event) => {
      this.close();
    });
  }
}