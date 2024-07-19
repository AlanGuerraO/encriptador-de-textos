function botonEncriptar() {
    const textoIngresado = document.getElementById("inputContenidoIngresado").value.trim();
    let textoEncriptado = "";

    // Encriptar el texto ingresado
    for (let i = 0; i < textoIngresado.length; i++) {
        switch (textoIngresado[i]) {
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoIngresado[i];
        }
    }

    // Actualizar el contenido del div de salida con el texto encriptado
    actualizarSalida(textoEncriptado);
}

function botonDesencriptar() {
    let textoIngresado = document.getElementById("inputContenidoIngresado").value.trim();
    let textoDesencriptado = "";

    // Desencriptar el texto ingresado
    while (textoIngresado.length > 0) {
        if (textoIngresado.startsWith("enter")) {
            textoDesencriptado += "e";
            textoIngresado = textoIngresado.slice(5); // Elimina 'enter'
        } else if (textoIngresado.startsWith("imes")) {
            textoDesencriptado += "i";
            textoIngresado = textoIngresado.slice(4); // Elimina 'imes'
        } else if (textoIngresado.startsWith("ai")) {
            textoDesencriptado += "a";
            textoIngresado = textoIngresado.slice(2); // Elimina 'ai'
        } else if (textoIngresado.startsWith("ober")) {
            textoDesencriptado += "o";
            textoIngresado = textoIngresado.slice(4); // Elimina 'ober'
        } else if (textoIngresado.startsWith("ufat")) {
            textoDesencriptado += "u";
            textoIngresado = textoIngresado.slice(4); // Elimina 'ufat'
        } else {
            textoDesencriptado += textoIngresado[0];
            textoIngresado = textoIngresado.slice(1);
        }
    }

    // Actualizar el contenido del div de salida con el texto desencriptado
    actualizarSalida(textoDesencriptado);
}

function actualizarSalida(texto) {
    const divSalida = document.getElementById("texto-salida");
    divSalida.innerHTML = `
        <p>${texto}</p>
        <button class="contenido__texto-salida-boton" onclick="copiarTexto()">Copiar</button>
    `;
}

function copiarTexto() {
    const textoSalida = document.querySelector("#texto-salida p").innerText;
    navigator.clipboard.writeText(textoSalida)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}