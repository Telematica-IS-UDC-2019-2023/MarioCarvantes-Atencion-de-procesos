const Proceso = (function (assignedid) {
    this.id = assignedid;
    this.siguiente = null;
    this.anterior = null;
    this.cRequeridos = Number(Math.floor(Math.random() * (14-4+1))+4);
});
module.exports = Proceso;