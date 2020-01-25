var nodemailer = require('nodemailer');



  exports.SendMail = (req, res, data) =>{
      console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'djordje.stankovic992@gmail.com',
               pass: 'Zekapeka93'
           },
           tls: {
            rejectUnauthorized: false
        }
       });
       
       const mailOptions = {
        from: 'djordje.stankovic992@gmail.com', 
        to: req.body.to,  
        subject: req.body.subject, 
        html: `<p>${req.body.html}<a href="${req.body.path}"> Acc</a></p>`
      };
      transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
      
 });
}