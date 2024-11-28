import { supabase } from '../supabaseClient';

// Lista de orígenes permitidos
const allowedOrigins = [
  'https://essentialstorepty.com',
  'https://react-shop-45dbd.web.app',
  'https://localhost:3000'
];

export default async function handler(req, res) {
  // Configuración dinámica de CORS
  const origin = req.headers.origin; // Obtener el origen de la solicitud
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin); // Permitir origen específico
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeceras permitidas

  if (req.method === 'OPTIONS') {
    // Responde a las solicitudes preflight
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    const { id } = req.query; // Captura el parámetro `id` desde la URL

    try {
      if (id) {
        const { data, error } = await supabase
          .from('Products')
          .select(`
            *,
            Category (name)  -- Relación con la tabla Category para obtener el nombre
          `)
          .eq('producto_id', id) // Filtra por ID del producto
          .single(); // Espera un solo producto

        if (error) throw new Error(error.message);

        return res.status(200).json(data);
      } else {
        const { data, error } = await supabase
          .from('Products')
          .select(`
            *,
            Category (name)  -- Relación con la tabla Category para obtener el nombre
          `); // Obtén todos los productos con su categoría relacionada

        if (error) throw new Error(error.message);

        return res.status(200).json(data);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    const { name, description, price, stock, image, category_id, rating } = req.body;

    // Valida los datos de entrada
    if (!name || !description || !price || !stock || !image || !category_id || !rating) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
      // Inserta todos los campos en la tabla
      const { data, error } = await supabase
        .from('Products')
        .insert([{ name, description, price, stock, image, category_id, rating }]);

      if (error) throw new Error(error.message);

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
