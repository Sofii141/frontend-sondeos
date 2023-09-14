// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './registerSlider.scss'
//Icons
import { AiOutlineSwapRight, AiOutlineSwapLeft } from 'react-icons/ai'
// import required modules
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import { FirstDataSlider } from './SignUpQuestions/FirstDataSlider';
import { SecondDataSlider } from './SignUpQuestions/SecondDataSlider';
import { ThreeDataSlider } from './SignUpQuestions/ThreeDataSlider';
import axios from 'axios';


//HACERLE CON BLUR EFFECT
export const RegisterSlider = () => {

    // Ref para acceder al Swiper
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const [formData, setFormData] = useState({
        tipo_documento: '',
        numero_documento: '',
        nombres_completos: '',
        apellidos_completos: '',
        sexo: '',
        correo_electronico: '',
        municipio: '',
        direccion: '',
        barrio_vereda: '',
        fecha_nacimiento: '',
        etnia: '',
        condicion_discapacidad: '',
        estrato_residencial: '',
        ultimo_nivel_educativo: '',
        dispositivo_tecnologico: '',
        password: '',
        telefono_celular: '',
        telefono_fijo: '',
        password_confirmation: '',
        conectividad_internet: '',
        regimen_afiliacion: '',
    });

    const [errores, setErrores] = useState({
        tipo_documento: '',
        numero_documento: '',
        nombres_completos: '',
        apellidos_completos: '',
        sexo: '',
        correo_electronico: '',
        municipio: '',
        direccion: '',
        barrio_vereda: '',
        fecha_nacimiento: '',
        etnia: '',
        condicion_discapacidad: '',
        estrato_residencial: '',
        ultimo_nivel_educativo: '',
        dispositivo_tecnologico: '',
        password: '',
        telefono_celular: '',
        telefono_fijo: '',
        password_confirmation: '',
        conectividad_internet: '',
        regimen_afiliacion: '',
    });

    const signupPost = async (e) => {
        try {
            console.log("dfghjk", formData)
            const res = await axios.post(`http://127.0.0.1:8000/api/registro_usuario`, formData);
            console.log(res.data);
        } catch (error) {
            console.log('Error al realizar la solicitud post ', error)
        }
    }

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.on('slideChange', handleSlideChange);
        }

        return () => {
            if (swiperRef.current) {
                swiperRef.current.off('slideChange', handleSlideChange);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        signupPost();
        console.log(formData);
    }

    // Función para navegar a la siguiente diapositiva
    const goToNextSlide = () => {
        if (swiperRef.current - 1) {
            swiperRef.current.slideNext();
        }
    };

    // Función para navegar a la diapositiva anterior
    const goToPrevSlide = () => {
        if (swiperRef.current - 1) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className='slider'>
            <form onSubmit={handleSubmit} className='form-container'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}

                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={{
                        clickable: true, // Hace que los puntos de paginación sean clicables
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next', // Selector del botón siguiente
                        prevEl: '.swiper-button-prev', // Selector del botón anterior
                    }}
                    modules={[EffectCube, Pagination, Navigation]}
                    className="mySwiper"
                    ref={swiperRef} // Asigna la referencia al Swiper
                >
                    <SwiperSlide>
                        <h3>Page 1</h3>
                        <FirstDataSlider formData={formData} handleInputChange={handleInputChange}></FirstDataSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h3>Page 2</h3>
                        <SecondDataSlider formData={formData} handleInputChange={handleInputChange}></SecondDataSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h3>Page 3</h3>
                        <ThreeDataSlider formData={formData} handleInputChange={handleInputChange}></ThreeDataSlider>
                    </SwiperSlide>
                </Swiper>

                <button className="custom-pagination-button swiper-button-prev" onClick={goToPrevSlide}>
                    <span>Prev </span>
                    <AiOutlineSwapLeft className='icon'></AiOutlineSwapLeft>
                </button>
                <button className="custom-pagination-button swiper-button-next" onClick={goToNextSlide}>
                    <span>Next </span>
                    <AiOutlineSwapRight className='icon'></AiOutlineSwapRight>
                </button>

                {currentSlideIndex === 2 && (
                    <button type="submit" className='btnSubmit'>
                        Enviar
                    </button>
                )}

            </form>
        </div>
    );
}