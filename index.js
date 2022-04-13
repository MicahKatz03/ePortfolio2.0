
// ZGm1YIq20IT3ykCAU_zYn

let modalOpen = false;

function contact(event){
    event.preventDefault();

    const load = document.querySelector('.modal-overlay-loading');
    const sent = document.querySelector('.modal-overlay-complete');
    const err = document.querySelector('.modal-overlay-fail');
    load.classList += ' modal-overlay-visable';

    emailjs.sendForm('service_3pgj43a', 'template_5zhtqbv', event.target, '0fxRXiNUKZXTygyBr').then(() => {
        load.classList.remove('modal-overlay-visable');
        sent.classList += ' modal-overlay-visable';
    }).catch(() => {
        load.classList.remove('modal-overlay-visable')
        err.classList += ' modal-overlay-visable';
        alert("email is temporarilly unavailable, please reach out to me directly at micahkatz03@gmail.com")
    })
}

function toggleModal(){
    if(!modalOpen){
        document.body.classList += ' modal-open';
        modalOpen = true;
    }
    else{
        document.body.classList.remove('modal-open');
        modalOpen = false;
    }
}