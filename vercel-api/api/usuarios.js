import { supabase } from '../supabaseClient';

res.setHeader('Access-Control-Allow-Origin', 'https://essentialstorepty.com');
res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000');  // Permitir origen
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Obtener todos los usuarios
    const { data, error } = await supabase.from('Usuarios').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);

  } else if (req.method === 'POST') {
    // Crear un nuevo usuario
    const { nombre, email, password } = req.body;
    
    const { data, error } = await supabase
      .from('usuarios')
      .insert([{ nombre, email, password }]);
      
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
