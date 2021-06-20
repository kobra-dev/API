import Mailgun from "mailgun.js";
import formData from "form-data";
import { initializeApollo } from "./apolloClient";
import { GetEmailTemplatesDocument } from "./generated/queries";
import Marked from "marked";
//import MarkedPlaintext from "marked-plaintext";
import "ts-replace-all";

// TODO: fix type definitions
const MarkedPlaintext = new (require("marked-plaintext"));

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
if (!MAILGUN_API_KEY) throw new Error("Mailgun API key is undefined");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: MAILGUN_API_KEY
});

const domain = "mail.kobra.dev";
const makeHtmlEmail = (email: string) => `<p>${email}</p>`;

const templateCache: {
    [key: string]: {
        html: string;
        text: string;
    }
} = {};

const USERNAME_PLACEHOLDER = "${username}";

async function renderTemplate(id: string, template: string) {
    if(templateCache[id]) {
        return templateCache[id];
    }
    const res = {
        html: Marked(template),
        text: Marked(template, { renderer: MarkedPlaintext })
    };
    templateCache[id] = res;
    return res;
}

export default async function sendEmailTemplate(id: string, email: string, username: string) {
    const res = await (initializeApollo().query({
        query: GetEmailTemplatesDocument,
        variables: {
            id
        }
    }));
    const template = res.data.emailTemplateCollection?.items[0];
    if(!template) throw new Error(`Template with id ${id} is undefined`);

    const rendered = await renderTemplate(id, template.body);

    const emailRes = await mg.messages.create(domain, {
        from: template.from?.replaceAll("${domain}", "mail.kobra.dev"),
        to: [email],
        subject: template.subject,
        text: rendered.text.replaceAll(USERNAME_PLACEHOLDER, username),
        html: rendered.html.replaceAll(USERNAME_PLACEHOLDER, username),
        ...(template.replyTo && {
            "h:Reply-To": template.replyTo
        })
    });
}