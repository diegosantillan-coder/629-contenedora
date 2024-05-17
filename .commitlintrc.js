module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [2, 'always', 82],
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'function-rules/type-enum': [
      2,
      'always',
      (parsed) => {
        /**
         * Todas las confirmaciones deben cumplir con la estructura definida
         * Ejemplos:
         * HU-9887. Refactor: Estrategia tipos de citas en salud
         * HU-1203. Fix: Estilos lista de medios de pago
         * CA-5348. Fix: Validación tipo de vinculación usuario pólizas vida
         * Gral. Actualizar: Versión de librería log4j
         *
         * La descripción del cambio debe ser muy especifica.
         *
         * Todos los cambios se deben identificar con una abreviatura:
         * HU -> Historias de Usuario o Técnicas.
         * CA -> Relacionado a incidentes.
         * Gral -> Cambios generales que no representan nuevas funcionalidades.
         */
        const headerRegex = /((((HU|CA)(-\d+)|(Gral)).+ (Fix|Refactor|Agregar|Actualizar|Eliminar|Revertir|Pruebas|Estilos|Conflictos))): ([A-Za-z]).+/
        if (parsed.header.match(headerRegex)) {
          return [true]
        }
        return [false, `El mensaje de confirmación no cumple con la estructura definida. Regex: ${headerRegex}`]
      }
    ]
  }
};
