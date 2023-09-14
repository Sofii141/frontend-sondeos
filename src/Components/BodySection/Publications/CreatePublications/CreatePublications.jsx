import { AiOutlineSwapRight } from 'react-icons/ai'
import React, { useState } from 'react';
import './createPublications.scss'
import { FaPlus } from 'react-icons/fa'
import { ImagetoBase64 } from '../../../../utility/imagetoBase64';
import { postExample } from '../../../../api/auth';

export const CreatePublications = () => {

    const [dataSondeo, setDataSondeo] = useState({
        imagen: '',
        tema_sondeo: '',
        fecha_publicacion: '',
        fecha_fin_publicacion: '',
    });

    const [imagenSet, setImagenSet] = useState( null)

    const handleSubmit = (e) => {
        e.preventDefault();
        sondeoPost();
        console.log(dataSondeo);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataSondeo({
            ...dataSondeo,
            [name]: value,
        })
    }

    const sondeoPost = async () => {
        try {
            var formData = new FormData()
            formData.append("tema_sondeo", dataSondeo.tema_sondeo)
            formData.append("imagen", dataSondeo.imagen)
            formData.append("fecha_publicacion", dataSondeo.fecha_publicacion)
            formData.append("fecha_fin_publicacion", dataSondeo.fecha_fin_publicacion)
            var result = await postExample(formData);
            console.log('result pet' + result);
        } catch (error) {
            console.log('Error al realizar la solicitud post ', error)
        }
    }

    const handleUploadImage = async (e) => {
        const dataImage = e.target.files[0]
        const reader = new FileReader()
        setDataSondeo((prev) => {
            return {
                ...prev,
                imagen: dataImage
            }
        })
        reader.onload = ()=>{
            setImagenSet(reader.result)
        }
        reader.readAsDataURL(dataImage)
    }

    return (
        <div className='createPublicationsSection'>
            <h1>Creación de Sondeo</h1>
            <div className='publicationsCont'>
                <form
                    onSubmit={handleSubmit}
                    className='form grid formPublications'>

                    {/* <div className='labelImg statistic-box'>

                        <div className='ImgCont'>
                        </div>
                    </div> */}

                    <div className='body'>
                        <div class="card">
                            {/* <div class="card-header">

                            </div> */}

                            <div class="card-form">

                                {/* <div className="inputDiv">
                                    <label for="name">Ingrese el nombre de la pregunta</label>
                                    <div className="input flex">
                                        <input className='input' placeholder='nombre de la pregunta' />
                                    </div>
                                </div> */}

                                {/* Temas de las preguntas */}
                                <div class='inputImg'>

                                    <input type="file"
                                        className='img'
                                        name='imagen'
                                        accept="image/*"
                                        onChange={handleUploadImage}
                                    />

                                    {
                                        imagenSet ? <img className='displayImg' src={imagenSet} /> : <FaPlus className='icon fa-lg'></FaPlus>
                                    }
                                </div>

                                {/*                                 
                                <button className='btnInputs'>
                                    <FaPlus className='iconInputs fa-lg'></FaPlus>
                                </button> */}

                                <h2>Creación de Tema</h2>

                                <div className="inputDiv">
                                    <div className="input flex">
                                        <input type="text" id='tema_sondeo'
                                            placeholder='titulo del tema'
                                            name='tema_sondeo' onChange={handleChange} />
                                    </div>
                                </div>


                                <div className='inputDiv'>
                                    <h4>Fecha inicio</h4>
                                    <input
                                        type="datetime-local"
                                        id='fecha_publicacion'
                                        name='fecha_publicacion'
                                        placeholder='Fecha de publicacion'
                                        value={dataSondeo.fecha_publicacion}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='inputDiv'>
                                    <h4>Fecha fin</h4>
                                    <input
                                        type="datetime-local"
                                        id='fecha_fin_publicacion'
                                        name='fecha_fin_publicacion'
                                        placeholder='Fecha fin de publicacion'
                                        value={dataSondeo.fecha_fin_publicacion}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type='submit' className='btn flex'>
                                    <span> Guardar </span>
                                    <AiOutlineSwapRight className='icon'></AiOutlineSwapRight>
                                </button>

                            </div>
                        </div>

                    </div >

                </form>
            </div>

        </div>
    );

};
