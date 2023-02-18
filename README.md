# Task-1 
## To create a backend that fetched the account transactions from EtherScan and put it in MongoDB

---

- Followed the **RCM Architecture** to make our express app more scalable and also modularised the app so that it look clean.
- First of all created a cluster on MongoDb cloud for storing the data.
- Initialized our node app with **Express** framework and also installed some other library like nodemon for auto rendering on  changes and also mongoose for handling mongodb related tasks and dotenv to use environment variables in our app.
- Also I've saved nodemon as a dev dependency as we don't need it at production level.




# Task-2
## To use Prometheus to monitor the response time and also keep the check of the number of request hitted on the node server

---


- Installed **Prometheus** on my local ubuntu with the following command. `wget https://github.com/prometheus/prometheus/releases/download/v2.42.0/prometheus-2.42.0.linux-amd64.tar.gz`
- After then created my custom metric in express to read the number of requests to the server and also the response time from the server.
- Then configured the endpoint named **/metric** and exposed the enpoint to the port **9100** as **Prometheus** listen to the endpoint **/metrics** to scrap the data.
- Then configured the prometheus.yml file to listen to the port **9100** and created the prometheus server via this configuration file and checked the metrics.
