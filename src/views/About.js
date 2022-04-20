/**
 * About the project
 */
import "../css/About.css";
import Team from "../components/Team";

const About = () => {
    return (
        <div className="card">
            <h1>Acerca del proyecto</h1>
            <p className="review">
                El presente estudio desarrolla un caso de estudio práctico para la detección temprana de potenciales trastornos de depresión
                con el fin de incitar a las personas a buscar ayuda de personales de la salud mental para validar la condición mental del posible
                afectado, y con ello, evitar consecuencias que afecten la calidad de vida de la persona. Para ello, los algoritmos de clasificación
                basados en árboles de decisión y ensambles constituyen una herramienta útil para la implementación de modelos de clasificación
                eficientes para el desarrollo nuestro objetivo. Se exploraron implementaciones con modelos basados en los algoritmos de Random
                Forest y Xtreme Gradient Boost (XGBoost) obteniendo métricas de buena calidad con un F1-score de 86% y 92% respectivamente.
            </p>
            <h1>Equipo de desarrollo</h1>
            <Team/>
        </div>
    );
};

// Export component
export default About;