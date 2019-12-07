import { DetalleUsuario } from "../../DetalleUsuario/containers/detalleusuario";
import { EstadoSolicitud } from "../../EstadoSolicitud/containers/estadosolicitud";

export class Usuario {
    id: Number;
    nombre: String;
    apellido: String;
    rut: Number;
    detalleusuario: DetalleUsuario[];
    estadosolicitud: EstadoSolicitud[];
}