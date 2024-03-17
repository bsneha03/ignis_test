from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login , logout as django_logout


class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

def eventlist(request):
    # Retrieve all events from the database
    events = Event.objects.all()
    # Pass the events to the template for rendering
    return render(request, 'ignis/event_list.html', {'object_list': events})

def register(request) :  
   if request.method=="POST" :
      first_name = request.POST.get('first_name')
      last_name = request.POST.get('last_name')
      username = request.POST.get('username')
      password = request.POST.get('password')

      user = User.objects.filter(username = username)
      if user.exists():
         messages.info(request,"username already exists!")
         return redirect('/register/')
         

      user=User.objects.create(
         first_name = first_name,
         last_name = last_name,
         username = username,
         )

      user.set_password(password)
      user.save()
      messages.info(request,"Account created successfully!")
      return redirect('/register')
   return render(request,'ignis/register.html')


# Authentication of the login page
def login_page(request):
   if request.method == "POST":
      username = request.POST.get('username')
      password = request.POST.get('password')

      if not User.objects.filter(username=username).exists():
         messages.error(request,'Invalid username')
         return redirect('/login')
      user = authenticate(request, username=username, password=password)

      if user is None:
         messages.error(request,"Invalid Password")
         return redirect('/login')
      else:
         login(request,user)
         return redirect('/events/')
      
   return render(request,'ignis/login.html')


def logout(request) :
    django_logout(request) 
    return redirect('/login/') 


def home_view(request):
    return render(request, 'homepage.html')

