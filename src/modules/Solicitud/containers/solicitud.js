import { DetalleSolicitud } from "../../DetalleSolicitud/containers/detallesolicitud";
import { EstadoSolicitud } from "../../EstadoSolicitud/containers/estadosolicitud";

export class Solicitud {
    id: Number;
    detallesolicitud: DetalleSolicitud[];
    estadosolicitud: EstadoSolicitud[];

}