let carga = parseInt(localStorage.getItem("cargaTotal") || 10000);
let limite = carga * 0.3;
let gananciaUsuario = parseInt(localStorage.getItem("gananciaUsuario") || 0);

// Control IA: si excede su 30%, baja la probabilidad de victoria
console.log("Juego cargado correctamente.");
