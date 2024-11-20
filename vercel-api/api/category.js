import { supabase } from '../supabaseClient';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    const { method } = req; // Método de la solicitud (GET, POST, etc.)
    
    if (method === 'GET') {
        const { id, type } = req.query; // Obtén el ID de la categoría y el tipo desde la URL
        
        if (type === 'category' && id) {
            // Obtener información de la categoría por ID
            const { data, error } = await supabase
              .from('Category')
              .select('name')
              .eq('category_id', id) // Filtra por ID
              .single(); // Solo una categoría esperada

            if (error) return res.status(500).json({ error: error.message });
            return res.status(200).json(data);

        } else if (type === 'products' && id) {
            // Obtener productos de una categoría específica
            const { data, error } = await supabase
              .from('Products')
              .select('*')
              .eq('category_id', id); // Filtra por ID de categoría

            if (error) return res.status(500).json({ error: error.message });
            return res.status(200).json(data);
          
        } else {
            // Obtener todas las categorías
            const { data, error } = await supabase.from('Category').select('*');
            if (error) return res.status(500).json({ error: error.message });
            return res.status(200).json(data);
        }
    } else if (method === 'POST') {
        // Crear un nuevo producto
        const { name, description, price, stock, image, category_id } = req.body;

        if (!name || !description || !price || !stock || !image || !category_id) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const { data, error } = await supabase
                .from('Products')
                .insert([{ name, description, price, stock, image, category_id }]);

            if (error) {
                return res.status(500).json({ error: error.message });
            }

            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    } else {
        // Si el método no es GET ni POST, devolver 405 Method Not Allowed
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
}
