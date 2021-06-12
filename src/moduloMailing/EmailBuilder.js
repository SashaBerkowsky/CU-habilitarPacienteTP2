async function createEmailBuilder(user, pass) {

    return {
        createEmailPlainText: async (from, to, subject, text) => {
            return {
                from: from,
                to: to,
                subject: subject,
                text: text,
            }
        },

        createEmailWithAttachment: async (from, to, subject, html, fileName, filePath, contentType) => {

            return {
                from: from,
                to: to,
                subject: subject,
                html: html,         
                attachments: [{
                    fileName: fileName,
                    path: filePath,
                    contentType: contentType 
                }]
            }
        },

        createEmailWithImageAndAttachment: async (from, to, subject, html, fileName, filePath, contentType) => {
                return {
                    from: from,
                    to: to,
                    subject: subject,
                    html:html,
                    attachments: [{
                        filename: 'image.jpg',
                        path: './imagen/image.jpg',
                        cid: 'codigoUnicoParafoto' //same cid value as in the html img src
                     },
                     {
                        filename: 'text.txt',
                        content: 'Estas son las condiciones para inscribirse ...... !!!!',
                        contentType: 'text/plain'}]
                };
        
        }
    }    
}

export { createEmailBuilder }