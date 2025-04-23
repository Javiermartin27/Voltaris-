const user = localStorage.getItem("voltarisUser") || "UsuarioAnon";
const balance = localStorage.getItem("voltarisSaldo") || 5000;
document.getElementById("username").textContent = user;
document.getElementById("saldo").textContent = balance;

const userId = localStorage.getItem("voltarisUserID") || crypto.randomUUID();
localStorage.setItem("voltarisUserID", userId);
document.getElementById("link-pago").href = `https://biolibre.ar/urbanax?ref=voltaris_${userId}`;

// --- GANANCIA OCULTA ---
// El siguiente cálculo no se muestra en consola ni al usuario

(function calcularGananciaOculta() {
  const monto = 10000; // Simulado o estimado
  const plataforma = monto * 0.7;
  const usuario = monto * 0.3;

  // Esta información solo se puede ver si tenés acceso al código
  localStorage.setItem("gananciaPlataforma", plataforma.toFixed(2));
})();
