const title = () => {
    const $h1 = document.createElement("h1");
    $h1.classList.add("titulo");
    $h1.textContent = "Cartelera - Online";
    return $h1;
}

export default title