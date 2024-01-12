document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('flightInfoInput');
  
  // Reemplaza la siguiente URL con la URL de tu servidor (puedes usar localhost para probar localmente)
  const socket = io('http://localhost:3000');

  input.addEventListener('input', () => {
    const info = input.value.trim();
    if (info !== "") {
      // Enviar nueva información al servidor
      socket.emit('flightInfo', info);

      // Limpiar el área de entrada
      input.value = "";
    }
  });
});
