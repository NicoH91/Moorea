

function toggleForm() {
    section = document.querySelector("section")
    container = document.querySelector(".container")
    container.classList.toggle("active");
    section.classList.toggle("active");
}

let botonLogin = document.getElementById("login")

botonLogin.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("boton funciona")

    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;


    let informacion = {
        "usuario": usuario,
        "contrasenia": contrasenia
    }
    let informacionJSON = JSON.stringify(informacion);
    localStorage.setItem("informacion", informacionJSON)

    usuario === "pilchita" && contrasenia === "123" ?
        window.location.href = "ficha.html"
        : alert("usuario o contrasenia incorrectos")
})


