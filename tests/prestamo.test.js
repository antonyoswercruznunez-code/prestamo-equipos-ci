const { registrarPrestamo } = require("../src/prestamo");

describe("Pruebas del sistema de préstamo de equipos", () => {
  test("Debe registrar el préstamo y actualizar el stock correctamente", () => {
    const stock = { laptop: 5, kit_robotica: 3 };
    const resultado = registrarPrestamo("laptop", 2, stock);

    expect(resultado.stockRestante).toBe(3);
    expect(resultado.mensaje).toContain("Préstamo registrado");
  });

  test("Debe lanzar error cuando no hay suficiente stock disponible", () => {
    const stock = { laptop: 1, kit_robotica: 0 };

    expect(() => registrarPrestamo("laptop", 2, stock)).toThrow(
      "No hay suficiente stock disponible para el préstamo."
    );
    expect(() => registrarPrestamo("kit_robotica", 1, stock)).toThrow(
      "No hay suficiente stock disponible para el préstamo."
    );
  });

  test("Debe lanzar error cuando la cantidad es inválida (cero o negativa)", () => {
    const stock = { laptop: 5 };

    expect(() => registrarPrestamo("laptop", 0, stock)).toThrow(
      "La cantidad debe ser un número mayor a cero."
    );
    expect(() => registrarPrestamo("laptop", -3, stock)).toThrow(
      "La cantidad debe ser un número mayor a cero."
    );
  });
});