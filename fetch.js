import https from 'https';

// Función para hacer la petición a la API de GitHub
export function fetchUserActivity(username) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.github.com',
            path: `/users/${username}/events`,
            method: 'GET',
            headers: {
                'User-Agent': 'GitHub-Activity-CLI'
            }
        };
        const req = https.get(options, (res) => {
            let data = '';
            // Manejar códigos de error
            if (res.statusCode === 404) {
                reject(new Error(`Usuario ${username} no encontrado.`));
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Error: ${res.statusCode}`));
                return;
            }
            // Recibir datos por partes
            res.on('data', (chunk) => {
                data += chunk;
            });
            // Cuando termina la respuesta
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (error) {
                    reject(new Error('Error al recibir la respuesta'));
                }
            });
            res.on('error', (error) => {
                reject(new Error(`Error de red: ${error.message}`));
            });
        });
        req.on('error', (error) => {
            reject(new Error(`Error de red: ${error.message}`));
        });
        req.end();
    });
}
