const inventario = {
  laptop: 5,
  kit_robotica: 3
};

function registrarPrestamo(equipo, cantidad, stockActual = inventario) {
  if (!stockActual.hasOwnProperty(equipo)) {
    throw new Error("El equipo solicitado no existe.");
  }

  if (typeof cantidad !== "number" || cantidad <= 0) {
    throw new Error("La cantidad debe ser un número mayor a cero.");
  }

  if (stockActual[equipo] < cantidad) {
 throw new Error("No hay suficiente stock disponible para el préstamo.");
    }

  stockActual[equipo] -= cantidad;
  return {
    mensaje: `Préstamo registrado: ${cantidad} ${equipo}(s).`,
    stockRestante: stockActual[equipo]
  };
}

module.exports = { registrarPrestamo };