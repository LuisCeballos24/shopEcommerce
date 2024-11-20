import { supabase } from '../supabaseClient';

export default async function handler(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'https://essentialstorepty.com');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'GET') {
    const { id } = req.query; // Captura el parámetro `id` desde la URL
    
    if (id) {
      const { data, error } = await supabase
        .from('Products')
        .select(`
          *,
          Category (name)  -- Relación con la tabla Category para obtener el nombre
        `)
        .eq('producto_id', id) // Filtra por ID del producto
        .single(); // Espera un solo producto
    
      if (error) {
        return res.status(500).json({ error: error.message });
      }
    
      return res.status(200).json(data);
    }
    else {
      const { data, error } = await supabase
        .from('Products')
        .select(`
          *,
          Category (name)  -- Relación con la tabla Category para obtener el nombre
        `); // Obtén todos los productos con su categoría relacionada
    
      if (error) {
        return res.status(500).json({ error: error.message });
      }
    
      return res.status(200).json(data);
    }
    

  } else if (req.method === 'POST') {
    // Crear un nuevo producto
    const { name, description, price, stock, image } = req.body;

    const { data, error } = await supabase
      .from('Products')
      .insert([{ name, description, price, stock, image }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
