function buscarArtistas() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var artistas = document.querySelectorAll('.contenedor h3');

    artistas.forEach(function (artista) {
        if (artista.innerText.toUpperCase().indexOf(filter) > -1) {
            // Si coincide con la búsqueda, muestra el artista
            artista.parentNode.parentNode.style.display = "";
        } else {
            // Si no coincide, oculta el artista
            artista.parentNode.parentNode.style.display = "none";
        }
    });
}