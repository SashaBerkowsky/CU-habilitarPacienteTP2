import {testHabilitarPaciente} from './vacunacion/negocio/testHabilitarPaciente/testCU.js'
import {testConfirmadorDeTurno} from './vacunacion/negocio/testConfirmadorDeTurno/testConfirmadorDeTurno.js'

await testHabilitarPaciente()
await testConfirmadorDeTurno()
