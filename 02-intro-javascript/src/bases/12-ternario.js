const activo = true;
let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

const mensajeTernario = activo ? 'Activo' : 'Inactivo';
const mensajeAnd = activo && 'Activo';