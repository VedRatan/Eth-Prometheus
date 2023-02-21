# Task-1 
## To create a backend that fetches the account transactions from EtherScan and put it in MongoDB

---

- Followed the **RCM Architecture** to make our express app more scalable and also modularised the app so that it look clean.
- First of all created a cluster on MongoDB cloud for storing the data.
- Initialized our node app with **Express** framework and also installed some other library like nodemon for auto rendering on  changes and also mongoose for handling mongodb related tasks and dotenv to use environment variables in our app.
- Also I've saved nodemon as a dev dependency as we don't need it at production level.
- Then defined the endpoints using **RCM Architecture** and exposed the app on the port **5000** with the endpoint **/api/transactions/'address'?'page'**



# Task-2
## To use Prometheus to monitor the response time and also keep the check of the number of request hitted on the node server

---


- Installed **Prometheus** on my local ubuntu with the following command. `wget https://github.com/prometheus/prometheus/releases/download/v2.42.0/prometheus-2.42.0.linux-amd64.tar.gz`
- After then created my custom metric in express to read the number of requests to the server and also the response time from the server.
- Then configured the endpoint named **/metric** and exposed the enpoint to the port **9100** as **Prometheus** listen to the endpoint **/metrics** to scrap the data.
- Then configured the prometheus.yml file to listen to the port **9100** and created the prometheus server via this configuration file and checked the metrics.
- Command to run the prometheus server `sudo ./prometheus --config.file=prometheus.yml`


---

## Screenshot of the backend running as mentioned.

![image](https://user-images.githubusercontent.com/82467006/219878075-f9a7fce9-b401-46ce-afb6-da662d45b9b9.png)

## Scrreenshot of the prometheus server scraping the metrics through exposed endpoint

![image](https://user-images.githubusercontent.com/82467006/219878441-b33558e0-0a49-4d05-926b-b4be8929e2eb.png)

![image](https://user-images.githubusercontent.com/82467006/219878477-ad9e43e5-1fb1-4436-a64f-1aa4bc090b84.png)


