function setSites(sites) {
    let block = document.querySelector('.b-sites__list');
    sites.forEach(site => {
        let container = document.createElement('a');
        container.classList.add('b-sites__site');
        container.href = "/details.php?id=" + site.id;

        let image = new Image();
        image.classList.add('b-sites__image');
        image.src = site.image ?? './images/default.jpg';

        let name = document.createElement('p');
        name.classList.add('c-font-black');
        name.innerHTML = site.name;

        let url = document.createElement('p');
        url.classList.add('c-font-black');
        url.innerHTML = site.url;

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(url);

        block.appendChild(container);
    });
}

export {setSites as default}