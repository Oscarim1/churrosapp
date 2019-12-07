import { DetalleOrden } from "../../DetalleOrden/containers/detalleorden";
import { EstadoOrden } from "../../EstadoOrden/containers/estadoorden";

export class Orden {
    id: Number;
    detalleorden: DetalleOrden[];
    estadoorden: EstadoOrden[];

}