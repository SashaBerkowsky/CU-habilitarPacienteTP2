import { createEmailSender } from "./EmailSender.js";
import { createEmailBuilder } from "./EmailBuilder.js";

async function createEmailComprobante(user, pass) {
  const builder = await createEmailBuilder();
  const sender = await createEmailSender(user, pass);

  return {
    send: async (datos) => {
      let email = await builder.createEmailPlainText(
        datos.from,
        datos.to,
        datos.asunto,
        datos.mensaje
      );
      sender.send(email);
    },

    sendWithImage: async (datos) => {
      let email = await builder.createEmailWithAttachment(
        datos.from,
        datos.to,
        datos.asunto,
        datos.mensaje,
        datos.fileName,
        datos.root,
        datos.type
      );
      sender.send(email);
    },
  };
}

export { createEmailComprobante };
