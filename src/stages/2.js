import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n*️⃣ - ```FINALIZAR ATENDIMENTO```\n0️⃣ - ```VOLTAR INICIO```';
    if (message === '*') {
      storage[from].stage = 5;
      storage[from].itens = [];

      return '🔴 Atendimento *FINALIZADO* com sucesso. \n\n ```Volte Sempre!```';
    } else if (message === 0) {
      storage[from].stage = 1;
      return '\nQual das opções abaixo será mais adequada? 🙋‍♂️\n-----------------------------------\n' +
        '1️⃣ - ```SUPORTE```\n' +
        '2️⃣ - ```FINANCEIRO```\n' +
        '3️⃣ - ```COMERCIAL```\n' +
        '4️⃣ - ```IMPLANTAÇÃO```\n' +
        '0️⃣ - ```FALAR COM ATENDENTE```';
    } else {
      if (!menu[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
    }

    storage[from].stage = 5;
    storage[from].itens.push(menu[message]);
    return (
      `✅ *${menu[message].description}* \n\n` +
      '🔃 Encaminhando você para um atendente.\n⏳ * Aguarde um instante *.'
    );
  },
};
