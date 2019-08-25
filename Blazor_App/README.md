# Blazor_App

### Setup
* Followed this [guide](https://docs.microsoft.com/en-us/aspnet/core/blazor/get-started?view=aspnetcore-3.0&tabs=visual-studio-code).

### The App 
* Used the FetchData.razor to initialise and fetch the initial 14 records from the database using the hosted [node server](https://million-api-101.herokuapp.com)
* Used Javascript interop function to get the Lazy Loding effect.


### Production Build
* Used ```dotnet publish -c Release``` to get the dist folder - Location of the dist folder - bin/Release/dist
* Followed this [tutorial](https://code.visualstudio.com/tutorials/static-website/getting-started) to host the Blazor app on Azure Storage.
* The [Link](https://blazorapp231.z30.web.core.windows.net/fetchdata) to the hosted blazor app (might take some time for initial loading).
