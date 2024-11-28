import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  origin: [
    'http://localhost:3000', // Origen local para desarrollo
    'https://essentialstorepty.com', // Origen de tu sitio en producción
    'https://react-shop-45dbd.web.app/' // Otro origen permitido
  ], // Orígenes permitidos
  credentials: true, // Si se necesitan cookies o credenciales
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
