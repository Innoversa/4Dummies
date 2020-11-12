from django.shortcuts import render
from django.http import HttpResponse
import smtplib, ssl
from datetime import date, datetime

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def expire_in(datetime):
    


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
    return

# email_func('zizzazzuz@tamu.edu')
# email_func('nikhil.houston@tamu.edu')
# email_func('siconghuang@tamu.edu')

print("Today's date:", int(datetime(2020,11,12,0,0).timestamp()))