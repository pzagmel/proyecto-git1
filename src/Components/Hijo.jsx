import { useContext } from "react";
import { userContext } from "../App";

const Hijo =() => {
    
     const user = useContext(userContext);

    return (
        <div>
           <h2>Componente Hijo</h2>
{/* Haremos una comprobacion veremos si nos devuelve el usuario,}  */}
{/* pondremos el usuario con una condicional si de verdad tiene} */}
{/* valores o no y cuando tenga valores mostramos el nombre.
con un condicional veremos que si existe en este caso && mostramos
en un parrafo en el que veremos un Hola user.name} estamos viendo
que de esta manera podemos acceder a contexto situado en otro componente
que se está modificando en otro comp. y con un simple hook lamado
(const user = useContext(userContext) recojo info y evito pasar
info mediante props variables */}
           {user && <p>Hola {user.name}</p>}
        </div>      
    );
  }
  
  export default Hijo;
  