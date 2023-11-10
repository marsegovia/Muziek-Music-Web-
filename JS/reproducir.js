document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll('.album');

    albums.forEach(album => {
        album.addEventListener('click', function() {
            const videoUrl = this.querySelector('img').getAttribute('data-video');
            this.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/5u_o94mFk4A?si=H-6HKuYV0eDxbQW9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll('.album2');

    albums.forEach(album => {
        album.addEventListener('click', function() {
            const videoUrl = this.querySelector('img').getAttribute('data-video');
            this.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MNA8h8A2mlo?si=z4VlZMcQ2Y3OQZbu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll('.album4');

    albums.forEach(album => {
        album.addEventListener('click', function() {
            const videoUrl = this.querySelector('img').getAttribute('data-video');
            this.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/tz5nVz3H30k?si=BS0yDu6UunaDFtTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll('.album5');

    albums.forEach(album => {
        album.addEventListener('click', function() {
            const videoUrl = this.querySelector('img').getAttribute('data-video');
            this.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ThfhdnqMVDs?si=xH-gMEDsNr1Fbeft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        });
    });
});

