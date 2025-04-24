const user = localStorage.getItem("voltarisUser") || "UsuarioAnon";
const balance = localStorage.getItem("voltarisSaldo") || 5000;
document.getElementById("username").textContent = user;
document.getElementById("saldo").textContent = balance;

const userId = localStorage.getItem("voltarisUserID") || crypto.randomUUID();
localStorage.setItem("voltarisUserID", userId);
document.getElementById("link-pago").href = `https://biolibre.ar/urbanax?ref=voltaris_${userId}`;

// --- GANANCIA OCULTA ---
(function calcularGananciaOculta() {
  const monto = 10000; // Simulado
  const plataforma = monto * 0.7;
  const usuario = monto * 0.3;
  localStorage.setItem("gananciaPlataforma", plataforma.toFixed(2));
})();
let carga = parseInt(localStorage.getItem("cargaTotal") || 10000);
let limite = carga * 0.3;
let gananciaUsuario = parseInt(localStorage.getItem("gananciaUsuario") || 0);

// Control IA: si excede su 30%, baja la probabilidad de victoria
