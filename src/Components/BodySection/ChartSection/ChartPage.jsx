import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
} from 'chart.js';

import './chartPage.scss';

// Registra los elementos personalizados y escalas
ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale);

export const ChartPage = () => {
    // Datos para el gráfico de barras
    const barChartData = {
        labels: ['Manzanas', 'Plátanos', 'Uvas', 'Naranjas', 'Fresas'],
        datasets: [
            {
                label: 'Cantidad',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Rojo pastel
                    'rgba(54, 162, 235, 0.6)', // Azul pastel
                    'rgba(255, 206, 86, 0.6)', // Amarillo pastel
                    'rgba(75, 192, 192, 0.6)', // Verde pastel
                    'rgba(153, 102, 255, 0.6)', // Morado pastel
                ],
            },
        ],
    };

    // Datos para el gráfico de pastel
    const doughnutChartData = {
        labels: ['Hombres', 'Mujeres', 'Otros'],
        datasets: [
            {
                data: [45, 30, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Rojo pastel
                    'rgba(255, 206, 86, 0.6)', // Amarillo pastel
                    'rgba(75, 192, 192, 0.6)', // Verde pastel
                ],
            },
        ],
    };

    return (
        <div className="statistics-page">

            <div className="statistics-header statistics-grid">

                <div className="statistic-box custom-transition">
                    <h3>Estadística Usuarios</h3>
                    <p>Activos: 123</p>
                    <p>Inactivos: 456</p>
                </div>
                <div className="statistic-box custom-transition">
                    <h3>Estadística Sondeos</h3>
                    <p>Publicados: 789</p>
                    <p>Vigentes: 012</p>
                </div>
                <div className="statistic-box custom-transition">
                    <h3>Estadística Preguntas</h3>
                    <p>Respuestas: 345</p>
                    <p>Me gusta: 678</p>
                </div>
                <div className="statistic-box custom-transition">
                    <h3>Estadística Respuestas</h3>
                    <p>Respuestas: 901</p>
                    <p>Respuestas: 234</p>
                </div>
            </div>

            <div className="statistics-charts">
                <div className="bar-chart custom-transition">
                    <Bar data={barChartData} />
                </div>
                <div className="doughnut-chart custom-transition">
                    <Doughnut data={doughnutChartData} />
                </div>
            </div>
        </div>
    );
};
