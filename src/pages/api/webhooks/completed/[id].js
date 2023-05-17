// send email to user
import { sendEmail } from "@/core/mailer";
import CompletedEmail from "@/components/emails/CompleteEmail.tsx";


export default async function handler(req, res) {
    
    const project = await db.project.findFirstOrThrow({
        where: { id: req.query.id },
    });

    const user = await db.user.findFirstOrThrow({
        where: { id: project.userId },
    });

    sendEmail({
      to: user.email,
      subject: "Your prediction is complete!",
      component: CompletedEmail({url: req.query.id})
    });
    res.json({data: {
        status: 'success',
        message: 'Email sent',
        id: req.query.id
    }})
}