// ! Forma moderna para las importaciones
import winston, { format } from 'winston'
/**
 * Añadir fecha a los logs
 */
const { combine, timestamp, json } = format

export const logger = winston.createLogger({
  level: 'info',
//   format: winston.format.json(),
  /**
  * Añadir fecha a los logs
  */
  format: combine(
    timestamp(),
    json(),
  ),
//   defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

/* module.exports = function buildLogger(service) {
    
    // Objeto
    return {
        // Método log
        log: (message) => {
            logger.log('info', {message, service})
        },
        // Método error
        error: (message) => {
            logger.error('error', {message, service})
        }
    }

} */
// ! Cambiamos el modo de exportar módulos
export const buildLogger = (service: string) => {
    
  // Objeto
  return {
      // Método log
      log: (message: string) => {
          logger.log('info', {message, service})
      },
      
      // Método error
      error: (message: string) => {
          logger.error('error', {message, service})
      }
  }

}