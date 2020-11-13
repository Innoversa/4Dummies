import smtplib, ssl
from datetime import date, datetime
import sys

def email_func(rece):
    port = 465  # For SSL
    password = 'cdy1314.'
    # Create a secure SSL context
    context = ssl.create_default_context()

    sender_email = "privio.315@gmail.com"
    # receiver_email = "clearloveyanzhen@gmail.com"
    receiver_email = rece
    message = "Thanks for using Privio! If you didn't perform this action, then someone is stalking you :)"

    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        server.login("privio.315@gmail.com", password)
        # TODO: Send email here
        server.sendmail(sender_email, receiver_email, message)

rece = sys.argv[1]
food = sys.argv[2]
date = sys.argv[3]

print('rece == ', rece)
print('date == ', date)
email_func(rece)