import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Top } from '../TopSection/Top'
import { Body } from '../Body'
import { Table } from '../TablesSection/Table'
import { Publicaciones } from '../Publications/ViewPublications/Publicaciones'
import { CreatePublications } from '../Publications/CreatePublications/CreatePublications';
import { ChartPage } from '../ChartSection/ChartPage'
import { ExcelPage } from '../ExportsSection/ExcelPage'

export const SondeoRoutes = () => {
    return (
        <div className='mainContent'>

            <Top></Top>

            <Routes>

                <Route path='/body' element={<Body />}></Route>
                <Route path='/tables' element={<Table />}></Route>
                <Route path='/card' element={<Publicaciones />}></Route>
                <Route path='/createPublications' element={<CreatePublications />}></Route>
                <Route path='/chart' element={<ChartPage></ChartPage>}></Route>
                <Route path='/excel' element={<ExcelPage />}></Route>
                <Route path='/' element={<Navigate to='/card'></Navigate>}></Route>

            </Routes>

        </div>
    )
}
