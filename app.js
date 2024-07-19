function botonEncriptar() {
    let inputText = document.getElementById("inputContenidoIngresado").value.trim();
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case "e":
                outputText += "enter";
                break;
            case "i":
                outputText += "imes";
                break;
            case "a":
                outputText += "ai";
                break;
            case "o":
                outputText += "ober";
                break;
            case "u":
                outputText += "ufat";
                break;
            default:
                outputText += inputText[i];
        }
    }

    document.getElementById("texto-salida").innerHTML = `<p>${outputText}</p>`;
}

function botonDesencriptar() {
    let inputText = document.getElementById("inputContenidoIngresado").value.trim();
    let outputText = "";

  // Reverse the encryption process
    while (inputText.length > 0) {
        if (inputText.startsWith("enter")) {
        outputText += "e";
        inputText = inputText.slice(5); // Remove 'enter'
        } else if (inputText.startsWith("imes")) {
        outputText += "i";
        inputText = inputText.slice(4); // Remove 'imes'
        } else if (inputText.startsWith("ai")) {
        outputText += "a";
        inputText = inputText.slice(2); // Remove 'ai'
        } else if (inputText.startsWith("ober")) {
        outputText += "o";
        inputText = inputText.slice(4); // Remove 'ober'
        } else if (inputText.startsWith("ufat")) {
        outputText += "u";
        inputText = inputText.slice(4); // Remove 'ufat'
        } else {
        // If none of the above, append the character and move to the next
        outputText += inputText[0];
        inputText = inputText.slice(1);
        }
    }

    document.getElementById("texto-salida").innerHTML = `<p>${outputText}</p>`;
}
