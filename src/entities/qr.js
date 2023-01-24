import PropTypes from "prop-types";

export class QrsDatabase {
  constructor(id, evento, fechaLimite) {
    this.id = id;
    this.evento = evento;
    this.fechaLimite = fechaLimite;
    this.destinatario = destinatario;
    this.creador = creador;
    this.cantidadGenerada = cantidadGenerada;
  }

  static propTypes = {
    id: PropTypes.string,
    evento: PropTypes.string,
    fechaLimite: PropTypes.instanceOf(Date),
    creador: PropTypes.string,
    destinatario: PropTypes.string,
    tipoUso: PropTypes.string,
    cantidadVecesUsado: PropTypes.number,
    cantidadGenerada: PropTypes.number,
  };
}

export class QrsDataTable {
  constructor(id, evento) {
    this.id = id;
    this.evento = evento;
    this.fechaLimite = PropTypes.instanceOf(Date),
    this.creador = PropTypes.string,
    this.destinatario = PropTypes.string,
    this.tipoUso = PropTypes.string,
    this.cantidadVecesUsado = PropTypes.number,
    this.cantidadGenerada = PropTypes.number
  }

  static propTypes = {
    id: PropTypes.string,
    evento: PropTypes.string,
    fechaLimite: PropTypes.instanceOf(Date),
    creador: PropTypes.string,
    destinatario: PropTypes.string,
    tipoUso: PropTypes.string,
    cantidadVecesUsado: PropTypes.number,
    cantidadGenerada: PropTypes.number
  };
}
