import { schedulesDay } from "../schedules/load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input da data mudar
selectedDate.onchange = () => schedulesDay()