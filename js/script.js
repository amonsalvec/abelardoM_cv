document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("descargarCV").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        let doc = new jsPDF();

        // Agregar imagen de perfil
        let img = new Image();
        img.src = 'mi_foto.jpg'; // Reemplazar con la ruta correcta
        img.onload = function() {
            doc.addImage(img, 'JPEG', 80, 10, 30, 30);
            generarPDF();
        };

        function generarPDF() {
            // Estilos generales
            doc.setFont("helvetica", "normal");

            // Agregar título
            doc.setFontSize(20);
            doc.setTextColor(52, 152, 219); // Azul moderno
            doc.text("Curriculum Vitae", 70, 70);
            
            // Línea separadora
            doc.setDrawColor(52, 152, 219);
            doc.line(20, 75, 190, 75);

            // Agregar información personal       
            // Información personal
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text("Nombre: Abelardo E. Monsalve Cobis", 20, 85);
            doc.text("Doctor en Estadística e Investigación Operativa", 20, 95);
            doc.text("Email: abelardoemc@gmail.com", 20, 105);
            doc.text("Teléfono: +123456789", 20, 115);
            
            // Sección de experiencia
            doc.setFontSize(14);
            doc.setTextColor(231, 76, 60); // Rojo moderno
            doc.text("Experiencia", 20, 130);
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text("- Profesor Universitario en Matemáticas y Estadística", 20, 140);
            doc.text("- Investigador en Data Science y Análisis Numérico", 20, 150);
            doc.text("- Programador en R, Python, MATLAB, Java", 20, 160);

            // Sección de educación
            doc.setFontSize(14);
            doc.setTextColor(46, 204, 113); // Verde moderno
            doc.text("Educación", 20, 175);
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text("- Doctorado en Estadística e Investigación Operativa", 20, 185);
            doc.text("- Diploma de Estudios Avanzados", 20, 195);
            doc.text("- Magister Scientiarum en Modelos Aleatorios", 20, 205);
            doc.text("- Licenciatura en Matemáticas", 20, 215);

            // Sección de habilidades
            doc.setFontSize(14);
            doc.setTextColor(241, 196, 15); // Amarillo moderno
            doc.text("Habilidades", 20, 230);
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text("- Análisis de datos y Machine Learning", 20, 240);
            doc.text("- Desarrollo de algoritmos estadísticos", 20, 250);
            doc.text("- Docencia y mentoría en matemáticas", 20, 260);

            // Guardar el documento
            doc.save("Curriculum_AbelardoEMC.pdf");
        }
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("descargarCV").addEventListener("click", function () {
//         const { jsPDF } = window.jspdf;
//         let doc = new jsPDF();

//         // Agregar imagen de perfil
//         let img = new Image();
//         img.src = 'mi_foto.jpg'; // Reemplazar con la ruta correcta
//         img.onload = function() {
//             doc.addImage(img, 'JPEG', 150, 10, 40, 40); // Justificado a la derecha en barra lateral
//             generarPDF();
//         };

//         function generarPDF() {
//             // Definir colores
//             const azul = [52, 152, 219];
//             const rojo = [231, 76, 60];
//             const verde = [46, 204, 113];
//             const amarillo = [241, 196, 15];
//             const grisFondo = [236, 240, 241];
//             const negro = [44, 62, 80];

//             // Fondo de la barra lateral
//             doc.setFillColor(...azul);
//             doc.rect(130, 0, 80, 300, 'F');

//             // Agregar título y foto en la barra lateral
//             doc.setTextColor(255, 255, 255);
//             doc.setFontSize(11);
//             doc.text("Abel_E", 170, 60, { align: "center" });
//             doc.setFontSize(9);
//             doc.text("Doctor en Estadística", 170, 70, { align: "center" });
//             doc.setTextColor(255, 255, 255);
//             doc.text("ejemplo@correo.com", 170, 85, { align: "center" });
//             doc.text("+123456789", 170, 95, { align: "center" });

//             // Línea separadora
//             doc.setDrawColor(255, 255, 255);
//             doc.line(135, 105, 200, 105);

//             // Sección de educación en la barra lateral
//             doc.setFontSize(11);
//             doc.setTextColor(255, 255, 255);
//             doc.text("Educación", 170, 120, { align: "center" });
//             doc.setFontSize(9);
//             doc.text("Doctorado en Estadística", 170, 130, { align: "center" });
//             doc.text("Licenciatura en Matemáticas", 170, 140, { align: "center" });

//             // Contenido principal a la izquierda
//             doc.setFillColor(...grisFondo);
//             doc.rect(10, 10, 110, 280, 'F');

//             doc.setTextColor(...negro);
//             doc.setFontSize(11);
//             doc.text("Experiencia", 20, 30);
//             doc.setFontSize(9);
//             doc.text("- Profesor Universitario en Matemáticas y Estadística", 20, 40);
//             doc.text("- Investigador en Data Science y Análisis Numérico", 20, 50);
//             doc.text("- Programador en R, Python, MATLAB, Java", 20, 60);

//             // Sección de habilidades
//             doc.setFontSize(11);
//             doc.text("Habilidades", 20, 80);
//             doc.setFontSize(9);
//             doc.text("- Análisis de datos y Machine Learning", 20, 90);
//             doc.text("- Desarrollo de algoritmos estadísticos", 20, 100);
//             doc.text("- Docencia y mentoría en matemáticas", 20, 110);

//             // Guardar el documento
//             doc.save("Curriculum_AbelE.pdf");
//         }
//     });
// });

