In order to run this demonstration website locally, you will first have to install two packages: Flask and Flask-Cors. The easiest way to do this is using the requirements.txt file included in the repository here, which contains a list of all packages that are needed to run this application: 

`pip3 install -r requirements.txt`

Once flask is installed, you can start this application by typing `python3 app.py`, as you would any other program.

This should start a server, running by default on http://127.0.0.1:5000/. 

If you navigate to that page in your browser, you should see a page being rendered. Read through that explanation, and try it all out. 


If you run into problems, there is a good chance that you have multiple conflicting versions of Python on your computer. This seems annoying, but it serves a purpose: you can write code using different versions of Python and of 3rd party libraries (like Flask). If you run into this already, the best way forward is to use virtual environments to manage this. A good description can be [found here](https://flask.palletsprojects.com/en/1.1.x/installation/#virtual-environments) or [here](https://docs.python-guide.org/dev/virtualenvs/), and a good explanation for how to set up virtual environments with VSCode [can be found here](https://stackoverflow.com/questions/54106071/how-to-setup-virtual-environment-for-python-in-vs-code).  






