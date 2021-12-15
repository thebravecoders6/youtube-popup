(() => {


    const DOMString = `<div class="the-brave-coders__backdrop">
                        <div class="the-brave-coders__popup">
                            <a href="https://www.youtube.com/c/TheBraveCoders/?sub_confirmation=1" class="the-brave-coders__popup-header" target="_blank">
                                <i class="ri-youtube-fill the-brave-coders__btn-icon"></i>ThebraveCoders
                            </a>

                            <h1 class="the-brave-coders__code-name">
                                <span class="the-brave-coders__code-name--span">Subscribe Our Youtube Channel</span>😋
                            </h1>

                            <a href="https://www.youtube.com/c/TheBraveCoders/?sub_confirmation=1" class="the-brave-coders__link"
                                target="_blank">https://www.youtube.com/c/TheBraveCoders/</a>
                            <a href="#" class="the-brave-coders__ok-btn">Ok</a>
                        </div>
                    </div>`



    const createLinkElementAndAppendInHead = (path) => {
        const element = document.createElement('link');
        element.href = `${path}`;
        element.rel = 'stylesheet';
        document.head.append(element);
    }




    document.body.insertAdjacentHTML('afterbegin', DOMString)
    createLinkElementAndAppendInHead('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
    createLinkElementAndAppendInHead('https://thebravecoders.github.io/youtube-popup/style.css');



    const btnOk = document.querySelector('.the-brave-coders__ok-btn');
    btnOk.addEventListener('click', (e) => {
        e.target.closest('.the-brave-coders__backdrop').remove();
    });


})();





