const firebaseConfig = {
  apiKey: "AIzaSyC9w0ukD2zQO_WhyCQeNjUxO3JJTNyepRg",
  authDomain: "iote2025-5e5dd.firebaseapp.com",
  databaseURL: "https://iote2025-5e5dd-default-rtdb.firebaseio.com",
  projectId: "iote2025-5e5dd",
  storageBucket: "iote2025-5e5dd.firebasestorage.app",
  messagingSenderId: "362519959090",
  appId: "1:362519959090:web:e25148d176f72820aace2b"
};

firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();

window.addEventListener('DOMContentLoaded', () => {
    const humedad = document.getElementById("humedad");

    const valorRef = dbRef.ref("ESP32Stem/Hum/");
    valorRef.on("value", (snapshot) => {
        const valor = snapshot.val();
        humedad.innerHTML = valor + "%";
    });

    const temperature = document.getElementById("temperature");
    const valorRefTemp = dbRef.ref("ESP32Stem/Temp/");
    valorRefTemp.on("value", (snapshot) => {
        const valor = snapshot.val();
        temperature.innerHTML = valor + "°C";
    });
});

function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const horaActual = `${horas}:${minutos}`;

    document.getElementById('time').innerHTML = horaActual;
}

// Actualizar inmediatamente al cargar
actualizarReloj();

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);