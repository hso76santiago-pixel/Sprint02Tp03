import mongoose from 'mongoose';

export async function connectDB() {
  try {
    // Intentamos realizar la conexión
    await mongoose.connect('mongodb+srv://grupo-13:grupo-13@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');

   
    console.log('Conexión exitosa a MongoDB');
       
  } catch (error) {
    // Si hay un error, lo mostramos en consola
    console.error('Error al conectar a MongoDB:', error);
    
    // Finalizamos el proceso con un código de error (1)
    process.exit(1);
  }
}
// Invocamos la función para que realmente conecte
connectDB();


 