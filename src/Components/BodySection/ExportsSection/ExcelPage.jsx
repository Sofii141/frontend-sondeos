import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './excelPage.scss';

// Datos de ejemplo
const data = [
    { Nombre: 'Juan', Edad: 25, Ciudad: 'México' },
    { Nombre: 'María', Edad: 30, Ciudad: 'Madrid' },
    { Nombre: 'Carlos', Edad: 28, Ciudad: 'Buenos Aires' },
];

export const ExcelPage = () => {
    // Estado para almacenar los datos de la tabla
    const [tableData] = useState(data);

    // Función para exportar los datos a Excel
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(tableData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Datos');
        XLSX.writeFile(wb, 'datos.xlsx');
    };

    // Función para exportar la tabla a un archivo PDF
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [Object.keys(tableData[0])],
            body: tableData.map((row) => Object.values(row)),
        });
        doc.save('tabla.pdf');
    };

    return (
        <div className="excel-table-container">
            <table className="excel-table">
                <thead>
                    <tr>
                        {Object.keys(tableData[0]).map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='buttons'>
                <button className="export-button" onClick={exportToExcel}>
                    Exportar a Excel
                </button>
                <button className="export-button" onClick={exportToPDF}>
                    Exportar a PDF
                </button>
            </div>

        </div>
    );
};

