

const toggleSwitch = document.querySelector("input[type='checkbox']");

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}

toggleSwitch.addEventListener("change", switchTheme);


async function obtenerDatosVeterinaria() {
    try {
        const response = await fetch('info.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos del archivo JSON:', error);
        return null;
    }
}

  document.getElementById("historia").addEventListener("click", async () => {
            const data = await obtenerDatosVeterinaria();
            if (data) {
                const historia = data.pilchita.historia;

                // Creamos el contenido HTML personalizado para mostrar la historia
                const contenidoHTML = `
                    <h3>Historia del Paciente</h3>
                    <p>${historia}</p>
                `;

                Swal.fire({
                    title: 'Historia del Paciente',
                    icon: 'info',
                    html: contenidoHTML,
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa-solid fa-paw"></i>',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText: '<i class="fa-solid fa-x" "></i>',
                    cancelButtonAriaLabel: 'Thumbs down'
                });
            }
        });
document.getElementById("medicacion").addEventListener("click", async () => {
    const data = await obtenerDatosVeterinaria();
    if (data) {
        const medicacion = data.pilchita.medicacion;

        // Creamos el contenido HTML personalizado para mostrar los detalles de cada medicamento
        let contenidoHTML = '<div>';
        medicacion.forEach((med, index) => {
            contenidoHTML += `
                <h3>Medicamento ${index + 1}</h3>
                <p><b>Nombre:</b> ${med.nombre}</p>
                <p><b>Dosis:</b> ${med.dosis}</p>
                <p><b>Frecuencia:</b> ${med.frecuencia}</p>
                <p><b>Indicaciones:</b> ${med.indicaciones}</p>
                <hr>
            `;
        });
        contenidoHTML += '</div>';

        Swal.fire({
            title: 'Medicación',
            icon: 'info',
            html: contenidoHTML,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa-solid fa-paw"></i>',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa-solid fa-x" ></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        });
    }
});

document.getElementById("veterinaria").addEventListener("click", async () => {
    const data = await obtenerDatosVeterinaria();
    if (data) {
        const veterinaria = data.pilchita.veterinaria;

        // Creamos el contenido HTML personalizado para mostrar los detalles de la veterinaria
        const contenidoHTML = `
            <h3>Veterinaria</h3>
            <p><b>Nombre:</b> ${veterinaria.nombre}</p>
            <p><b>Dirección:</b> ${veterinaria.direccion}</p>
            <p><b>Teléfono:</b> ${veterinaria.telefono}</p>
            <p><b>Horario:</b> ${veterinaria.horario}</p>
        `;

        Swal.fire({
            title: 'Información de la Veterinaria',
            icon: 'info',
            html: contenidoHTML,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa-solid fa-paw"></i>',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa-solid fa-x"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        });
    }
});

let btnEstudios = document.getElementById("estudios")

btnEstudios.addEventListener("click", function () {
    alert("yo sabia que me queres romper la app")
})