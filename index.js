import { fetchUserActivity } from "./fetch.js"; // Importamos la función desde fetch.js
import { formatData } from "./format.js";

// Función para verificar argumentos
function checkArguments() {
	// Obtener el nombre de usuario desde los argumentos de la CLI
	const username = process.argv[2];
    if (!username) {
        console.error('Por favor introduce un nombre de usuario válido.');
        console.error('Uso: node index.js <usuario>');
        process.exit(1);
    }
    console.log(`Obteniendo actividad para el usuario: ${username}`);
	return username;
}

// Ejecutar validación de argumentos
const username = checkArguments();

// Llamar a la función para obtener la actividad de GitHub
fetchUserActivity(username)
    .then((data) => {
			formatData(data);
    })
    .catch((error) => {
        console.error(error.message);
		process.exit(1);
    });
