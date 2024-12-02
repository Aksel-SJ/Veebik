
document.addEventListener("DOMContentLoaded", () => {
    /* Valib kõik elemdndi, millel on class "hidden"*/
    const hiddenElements = document.querySelectorAll('.hidden');
    /*Funktsioon käivitub, siis kui kasutaja kerib lehel.
      Kasutatakse selleks, et määrata kas iga peidetud element on kasutaja vaateväljas nähtav. */
    const onScroll = () => {
        hiddenElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    };
    /*Iga kord kui lehte kerida, onScroll funktsioon aktiveeritakse */
    window.addEventListener('scroll', onScroll);

    onScroll();
});

/*Kasutasin projekti Javascripti osa joaks ChatGPT'd(OpenAI, isiklik suhtlus, 02.12.2024). */
