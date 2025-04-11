function cargarHTML(id, archivo) {
    fetch(archivo)
      .then(res => {
        if (!res.ok) throw new Error(`Error al cargar ${archivo}`);
        return res.text();
      })
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(error => {
        console.error(error);
        document.getElementById(id).innerHTML = `<p>Error al cargar ${archivo}</p>`;
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    cargarHTML("cabecera", "cabecera.html");
    cargarHTML("pie", "pie.html");
  });