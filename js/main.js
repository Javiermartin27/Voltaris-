
const user = localStorage.getItem("voltarisUser") || "UsuarioAnon";
const balance = localStorage.getItem("voltarisSaldo") || 5000;
document.getElementById("username").textContent = user;
document.getElementById("saldo").textContent = balance;

const userId = localStorage.getItem("voltarisUserID") || crypto.randomUUID();
localStorage.setItem("voltarisUserID", userId);
document.getElementById("link-pago").href = `https://biolibre.ar/urbanax?ref=voltaris_${userId}`;

function calcularGanancia(monto) {
  const plataforma = monto * 0.7;
  const jugador = monto * 0.3;
  console.log(`Ganancia: $${plataforma} para vos, $${jugador} para el usuario`);
}
