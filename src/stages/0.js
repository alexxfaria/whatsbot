import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nQual das opções abaixo será mais adequada? 🙋‍♂️ \n-----------------------------------\n' +
      '1️⃣ - ```SUPORTE```\n' +
      '2️⃣ - ```FINANCEIRO```\n' +
      '3️⃣ - ```COMERCIAL```\n' +
      '4️⃣ - ```IMPLANTAÇÃO```\n' +
      '0️⃣ - ```FALAR COM ATENDENTE```';
  },
};
