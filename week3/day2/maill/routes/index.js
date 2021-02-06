const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

router.post("/send-mail", async (req, res) => {
  const { subject, email, message } = req.body
  // Enviar el mail...
  await transporter.sendMail({
    from: "Ironhack Projects <ironhackprojects@gmail.com>",
    to: email,
    subject,
    text: `TEXT: ${message}`,
    html: getTemplate(message)
  })

  res.json({ message: "email sent" })
})

function getTemplate(message) {
  return `

  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>
        
      </title>
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        #outlook a { padding:0; }
        body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
        table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
        img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
        p { display:block;margin:13px 0; }
      </style>
      <!--[if mso]>
      <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix { width:100% !important; }
      </style>
      <![endif]-->
      
      
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 { width:100% !important; max-width: 100%; }
    }
  </style>
  

      <style type="text/css">
      
      

  @media only screen and (max-width:480px) {
    table.mj-full-width-mobile { width: 100% !important; }
    td.mj-full-width-mobile { width: auto !important; }
  }

      </style>
      
      
    </head>
    <body style="word-spacing:normal;background-color:#F4F4F4;">
      
      
    <div
       style="background-color:#F4F4F4;"
    >
      
    
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  
    
    <div  style="background:#C1272D;background-color:#C1272D;margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#C1272D;background-color:#C1272D;width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      <tbody>
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
    >
      <tbody>
        <tr>
          <td  style="width:128px;">
            
    <img
       height="auto" src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3k4.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="128"
    />
  
          </td>
        </tr>
      </tbody>
    </table>
  
              </td>
            </tr>
          
      </tbody>
    </table>
  
    </div>
  
        <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  
    
    <div  style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      <tbody>
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
    >
      <tbody>
        <tr>
          <td  style="width:550px;">
            
    <img
       height="auto" src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3s5.gif" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="550"
    />
  
          </td>
        </tr>
      </tbody>
    </table>
  
              </td>
            </tr>
          
            <tr>
              <td
                 align="center" style="background:#ffffff;font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
    >
      <tbody>
        <tr>
          <td  style="width:399px;">
            
    <img
       alt="Happy New Year!" height="auto" src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlvp.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="399"
    />
  
          </td>
        </tr>
      </tbody>
    </table>
  
              </td>
            </tr>
          
      </tbody>
    </table>
  
    </div>
  
        <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  
    
    <div  style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;"
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      <tbody>
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;"
              >
                
    <div
       style="font-family:Arial, sans-serif;font-size:14px;line-height:28px;text-align:center;color:#55575d;"
    >New dreams, new hopes, new experiences and new joys, we wish you all the best for this New Year to come in 2018!</div>
  
              </td>
            </tr>
          
            <tr>
              <td
                 align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
    >
      <tbody>
        <tr>
          <td  style="width:142px;">
            
    <img
       alt="Best wishes from all the Clothes Team!" height="auto" src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlv8.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="142"
    />
  
          </td>
        </tr>
      </tbody>
    </table>
  
              </td>
            </tr>
          
      </tbody>
    </table>

    <h3>${message}</h3>
  
    </div>
  
        <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  
    
    <div  style="background:#C1272D;background-color:#C1272D;margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#C1272D;background-color:#C1272D;width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      <tbody>
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
    <div
       style="font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:center;color:#ffffff;"
    >Simply created&nbsp;on&nbsp;<a style="color:#ffffff" href="http://www.mailjet.com"><b>Mailjet Passport</b></a></div>
  
              </td>
            </tr>
          
      </tbody>
    </table>
  
    </div>
  
        <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;"
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      <tbody>
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:0px 20px;word-break:break-word;"
              >
                
    <div
       style="font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:center;color:#55575d;"
    >${message}</div>
  
              </td>
            </tr>
          
      </tbody>
    </table>
  
    </div>
  
        <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]></td></tr></table><![endif]-->
  
  
    </div>
  
    </body>
  </html>

  `
}
module.exports = router
