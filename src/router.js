import express from "express";
import { listarEstudiantes } from "./estudianteController.js";

const router = express.Router();

// Ruta para listar estudiantes
router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Ruta para la página 'About Us'
router.get("/about", (req, res) => {
  try {
    res.render("pages/about");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Ruta para la página 'Contact Us'
router.get("/contact", (req, res) => {
  try {
    res.render("pages/contact");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

export default router;
