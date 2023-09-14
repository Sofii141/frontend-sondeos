import { Link } from 'react-router-dom';
import user from '../../../Assest/user.png'
import { CiEdit } from 'react-icons/ci'
import { LiaTimesSolid } from 'react-icons/lia'
import './Table.scss'

export const Table = () => {
  return (
    <div className="tabla-container">
      <table className="tabla-bonita">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Imagen</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>
              <img
                src={user}
                alt="Imagen de ejemplo"
                className="imagen"
              />
            </td>

            <td className='linkContainer'>
              <Link>
                <CiEdit className='icon'></CiEdit>
              </Link>
              <Link>
                <LiaTimesSolid className='icon'></LiaTimesSolid>
              </Link>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Usuario 2</td>
            <td>usuario2@example.com</td>
            <td>
              <img
                src={user}
                alt="Imagen de ejemplo"
                className="imagen"
              />
            </td>
            <td className='linkContainer'>
              <Link>
                <CiEdit className='icon'></CiEdit>
              </Link>
              <Link>
                <LiaTimesSolid className='icon'></LiaTimesSolid>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
