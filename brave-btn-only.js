(() => {

    const DOMString = `
                    <div class="the-brave-coders-learn-it">
                        <a href="https://www.youtube.com/c/TheBraveCoders/" class="the-brave-coders-learn-it__button" target="_blank">
                            <i class="ri-youtube-fill the-brave-coders__btn-icon"></i>
                            Our Youtube Channel
                        </a>
                    </div>`

    const createLinkElementAndAppendInHead = (path) => {
        const element = document.createElement('link');
        element.href = `${path}`;
        element.rel = 'stylesheet';
        document.head.append(element);
    }
    
    createLinkElementAndAppendInHead('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
    createLinkElementAndAppendInHead('https://thebravecoders.github.io/youtube-popup/style.css');
    document.body.insertAdjacentHTML('afterbegin', DOMString)

})();





