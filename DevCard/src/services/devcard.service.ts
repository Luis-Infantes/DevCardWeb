



export async function getDevCard() {

    const res = await fetch("https://devcard-yzpn.onrender.com/api/devcard");

    if (!res.ok) return console.error("Error al cargar DevCard");

    const data = await res.json();
    // Si data es un array, devolvemos el primer elemento
    return Array.isArray(data) ? data[0] : data;
}