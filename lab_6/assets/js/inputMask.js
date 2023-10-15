document.addEventListener('DOMContentLoaded', function () {
    const TelElement = document.querySelector('#phone');
    const TelMask = new Inputmask("+38(099)-999-99-99");
    TelMask.mask(TelElement);
});