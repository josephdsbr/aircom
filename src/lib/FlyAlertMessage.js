import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function FlyAlertMessage(type, fly) {
  let message = null;


  switch (type) {
    case 1:
      message = `O voo ${fly.code} foi confirmado pro horário ${format(fly.departure_date, "dd 'de' MMMM 'de' yyyy 'as' hh:mm'h'", { locale: pt })}`;
      break;
    case 2:
      message = `O voo ${fly.code} foi remarcado para o horário ${format(fly.departure_date, "dd 'de' MMMM 'de' yyyy 'as' hh:mm'h'", { locale: pt })}`;
      break;
    case 3:
      message = `O voo ${fly.code} foi cancelado.`;
      break;
    default:

  }

  return message;
}
