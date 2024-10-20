import express from 'express';
import cors from 'cors';
import router from './src/router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

// Configurar motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta principal
app.get('/', (req, res) => {
  res.render('pages/inicio');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
})

app.get('/contact', (req, res) => {
  res.render('pages/contact');
})
// Usar el enrutador para las otras rutas
app.use('/', router);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://127.0.0.1:${PORT}`);
});

export default app;
