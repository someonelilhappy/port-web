window.addEventListener("scroll", onScroll);

function onScroll(e) {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    //console.log(`rolou ${scrollPercent.toFixed(2)}% da página`);
    if (scrollPercent >= 20) document.querySelector("header").classList.add("hide-header");
    else                     document.querySelector("header").classList.remove("hide-header");
}