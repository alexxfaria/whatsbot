import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🚨  Seja bem-vinda(o) ao atendimento da KM Sistemas 😃!' +
                ' Qual das opções abaixo será mais adequada ?  🚨\n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ \n`;
        } else if (value === '2') {
          msg += `2️⃣ - _${element.description}_ \n`;
        } else if (value === '3') {
          msg += `3️⃣ - _${element.description}_ \n`;
        } else if (value === '4') {
          msg += `4️⃣ - _${element.description}_ \n`;
        } else if (value === '5') {
          msg += `5️⃣ - _${element.description}_ \n`;
        }
      });

      msg +=
        '\n*Acesse nosso manual* : http://docs.kmsistemas.com.br/mentorsoft-manual/modulos/faturamento/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
        storage[from].stage = 2
      return msg;
    } else if (message === '2') {
      let msg = '';
      msg +=
        '*️⃣ - ```FINALIZAR ATENDIMENTO```\n5️⃣ - ```VOLTAR INICIO```';
      client.sendContactVcard(from, '554399733952@c.us', 'Aleison - Financeiro') // Financeiro
      storage[from].stage = 2;
      return msg;
    } else if (message === '3') {
      let msg = '';
      msg +=
        '*️⃣ - ```FINALIZAR ATENDIMENTO```\n5️⃣ - ```VOLTAR INICIO```';
      client.sendContactVcard(from, '554399733952@c.us', 'Aleison - Comercial')
      storage[from].stage = 2;
      return msg;
    } else if (message === '4') {
      let msg = '';
      msg +=
        '*️⃣ - ```FINALIZAR ATENDIMENTO```\n5️⃣ - ```VOLTAR INICIO```'
      client.sendContactVcardList(from, ['554398251740@c.us', '554396170301@c.us'])
      storage[from].stage = 2;
      return msg;
    } else if (message === '0') {
      client.markUnseenMessage(from);

      storage[from].stage = 5;

      return '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    }

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },

};
