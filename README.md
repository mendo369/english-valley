# English Valley 🏔️

**English Valley** es una plataforma interactiva diseñada para que estudiantes de la Universidad del Valle refuercen sus habilidades en el idioma inglés, utilizando contenido específico relacionado con sus programas académicos.

## 🚀 Características

- **Aprendizaje por Carrera**: Practica vocabulario y conceptos técnicos de tu facultad.
- **Niveles de Idioma**: Desde A1 hasta C2, adaptándonos a tu progreso.
- **Sistema de Test**: Evaluación inmediata con retroalimentación detallada.
- **Infinite Loop Carousel**: Navegación fluida por los diferentes programas.

## 🛠️ Instalación y Desarrollo

Para ejecutar este proyecto de forma local, asegúrate de tener instalado [Node.js](https://nodejs.org/) y [PNPM](https://pnpm.io/).

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/mendo369/english-valley.git
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   pnpm run dev
   ```

## 🤝 Cómo Colaborar

English Valley crece gracias a la comunidad. Si quieres ayudarnos añadiendo preguntas de tu carrera o mejorando las existentes, ¡eres bienvenido!

### Añadir Preguntas

Todas las preguntas residen en el archivo: `src/questions/questions.json`.

Para añadir una nueva pregunta, localiza tu programa académico en el JSON y añade un objeto al nivel correspondiente siguiendo esta estructura:

```json
{
  "question": "The question text in English?",
  "options": [
    "Possible option A",
    "Possible option B",
    "Possible option C"
  ],
  "correct": "Possible option A"
}
```

**⚠️ Importante:**
- Las **opciones** deben ser al menos 3 para una mejor experiencia.
- El campo **`correct`** debe coincidir exactamente (incluyendo mayúsculas y espacios) con una de las opciones.
- Intenta que las preguntas sean relevantes para el contexto profesional de la carrera.

### Otros aportes
Si eres desarrollador, puedes proponer mejoras visuales o de rendimiento mediante un **Pull Request**.

## 📧 Contacto

Si tienes dudas o quieres enviar tus preguntas directamente por otro medio:
- **Email**: mendoza.luis@correounivalle.edu.co
- **WhatsApp**: +57 316 571 1817

---
*Desarrollado con ❤️ para la comunidad de Univalle Tuluá.*
