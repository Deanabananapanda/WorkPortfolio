const grid = new Muuri ('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
document.getElementById('grid').classList.add('loaded-img');

// Agrego loslistener de los enlaces para filtrar por categoria
const links = document.querySelectorAll('#categories a');
links.forEach((element) => {
element.addEventListener('click', (evento) => {
    evento.preventDefault();
    links.forEach((link) => link.classList.remove('active'));
    evento.target.classList.add('active');

    const categorie = evento.target.innerHTML.toLowerCase();
    categorie === 'all' ? grid.filter('[data-categories]') : grid.filter(`[data-categories="${categorie}"]`);
         });
   });

   // agregamos listener para la barra de busqueda
   
   document.querySelector('#search').addEventListener('input' , (evento) => {
   const busqueda = evento.target.value;
   console.log(busqueda);
   grid.filter ( (item) => item.getElement().dataset.labes.includes(busqueda));
   });

//listener para imagenes
const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .item img').forEach((elemento) => {
elemento.addEventListener('click', () => {
    const ruta = elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.description;
    

    overlay.classList.add('activo');
    document.querySelector('#overlay img').src = ruta;
    document.querySelector('#overlay p.descripcion').innerHTML = descripcion;
        });
     });

     //listener para cerrar el boton
     document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
         overlay.classList.remove('activo');
     });

     overlay.addEventListener('click', () => {
     evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
     });
});