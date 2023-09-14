import axios from "axios";

//Peticion post para el registro manejada por axios
export const registerRequest = (user) => axios.post(`/registro_usuario`, user);


export const postExample = async (dataSondeo) => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/agregar_sondeo`, dataSondeo);
        console.log("res", res);
        return res.data
    } catch (error) {
        console.log('Error al realizar la solicitud post ', error)
    }
}
