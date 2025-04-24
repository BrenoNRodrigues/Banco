const usuarioValido = "Edogawa Ranpo";
const senhaCorreta = "FO10YZNII9W";

function verificarAcesso() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");

  if (usuario === usuarioValido && senha === senhaCorreta) {
    msg.textContent = "Acesso permitido. Bem-vindo!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Acesso negado. Verifique usuário e senha.";
    msg.style.color = "red";
  }
}