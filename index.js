const links = document.getElementsByClassName('link');
let home = 'start-about';
let show = false;
Array.from(links).forEach(link => {
    const animation = document.getElementsByClassName('animation')[0];
    animation.classList.add(home);
    link.addEventListener('click', () => {
        animation.classList.remove(home);
        const linkName = link.textContent.toLowerCase();
        home = 'start-' + linkName;
        animation.classList.add(home);
        showDropDown(linkName);
    })
})

function showDropDown(link) {
    const submenu = document.getElementsByClassName('submenu')[0];
    Array.from(submenu.children).forEach(a => {
        if (link == 'menu') {
            a.style = 'display:block';
        } else {
            a.style = 'display:none';
        }
    })
}