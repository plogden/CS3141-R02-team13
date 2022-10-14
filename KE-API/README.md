# Setup

Install npm
Install yarn

cd KE-API

run 'yarn'

# Starting backend

run 'yarn server-dev:windows'

# Testing

Install Postman

import the KE API.postman_collection.json

Click run

If response 200 then it's set up.

# Database setup

Install gcloud cli - https://cloud.google.com/sdk/docs

In powershell run the following:
gcloud init
gcloud auth login
cd KE-API
.\cloud_sql_proxy.exe -instances=ke-sql:us-central1:myinstance=tcp:127.0.0.2:1433

Install SSMS - https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms

In SSMS enter the following values in the Connection dialog:
For Server Type, enter Database Engine
For Server Name, enter 127.0.0.2 as the IP address of your SQL Server instance
For Authentication, enter SQL Server Authentication
For Login, enter sqlserver
For Password, enter +1zk{kd+0g&>\7t{

Click the Connect button.

If the KEdb database shows up in Object Explorer, you're all set
