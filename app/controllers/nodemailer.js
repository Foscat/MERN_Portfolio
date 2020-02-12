const nodemailer = require("nodemailer");

module.exports = {
    reachoutNotification: async function(req,res){
        console.log("Reachout notification body:", req.body);
        try {
            if(req.body.reachoutInfo){
                
                let transporter = nodemailer.createTransport({
                    host:"smtp-mail.outlook.com",
                    port:587,
                    secureConnection:false,
                    auth: {
                        user:process.env.EMAIL_ADDRESS,
                        pass:process.env.EMAIL_PASSWORD
                    },
                    tls: {
                        ciphers: "SSLv3",
                        rejectUnauthorized: false
                    }
                });
                
                let message = {
                    from: `Portfolio Website <${process.env.EMAIL_ADDRESS}>`,
                    to: `Kyle Foster <${process.env.EMAIL_ADDRESS}>`,
                    subject: "Someone reached out to you!",
                    text: `Reachout content: ${req.body.reachoutInfo.content}
                        Contact Info: ${req.body.reachoutInfo.contactInfo} 
                        Name: ${req.body.reachoutInfo.name}`,
                    html: `
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Portfolio Website</title>
                            <style>
                                h3{
                                    padding: 18px 0;
                                }
                                h4 {
                                    font-size: larger;
                                    
                                }
                                ul {
                                    list-style: none;
                                }
                                li {
                                    font-size: large;
                                    font-weight: 500;
                                }
                                .container {
                                    color: black;
                                }
                                .row {
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    flex: 1;
                                    flex-wrap: wrap;
                                }
                                .col {
                                    justify-content: space-around;
                                }
                                .jumbotron {
                                    height: 60px;
                                    background-color: #A99B9B;
                                    text-align: center;
                                }
                            </style>
                        </head>
                    
                        <body>
                            <div class="container">
                                <div class="jumbotron">
                                    <h3>Someone reached out to you!</h3>
                                </div>
                    
                                <div class="row">
                                    <div class="col">
                                        <h4>What they had to say</h4>
                                        <ul>
                                            <li>Name:  ${req.body.reachoutInfo.name}</li>
                                            <hr>
                                            <li>Contact Info: ${req.body.reachoutInfo.contactInfo}</li>
                                            <hr>
                                            <li>Review Content: ${req.body.reachoutInfo.content}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </body>
                    </html>
                    `,
                };

                transporter.sendMail(message, (err,info) => {
                    if(err){
                        console.error(`Trasporter sendMail method hit an error ${err.message}`);
                        return process.exit(1);
                    }
                    console.log("Message Sent  %s", info.messageId);
                    console.log("Preview url: %s", nodemailer.getTestMessageUrl(info));
                });

                return res.send("Review notificication went through").end();
            }
        } catch (error) {
            console.error(error);
            if(error){
                return res.send({message:"Review notificication hit an error", info: error}).end();
            }
        }
    }
}