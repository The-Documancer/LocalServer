# Readme
## Installing
Hello. Welcome. You are gonna love this! We've never used local webservers before, but now, we are gonna make somethin' special. 
### Step 1. Check if Node.js is Installed
From a command prompt window, check if you need to install Node.js / npm. You can run the following to see your installed node version:
```
> node -v
v12.16.1
```
Also, check if you have the Node Package Manager (npm) installed with this:
```
> npm -v
6.13.4
```

If you don't have node.js or npm installed at all,  download and install the LTS version from here:
https://nodejs.org/en/

When installing, use the installer defaults.

### Step 2. Clone this Repo
Create a folder that will hold your repo, such as "LocalServer".

In your terminal, navigate to the folder.

Use this code to clone this repo to that folder:
```
> git clone https://github.com/The-Documancer/LocalServer.git
```
Then use cd to get into the repo:

```
> cd LocalServer
```

### Step 3. Install npm Packages
Inside the LocalServer folder, use this code to install the npm packages:
```
> npm install
```
You'll see a progress bar in your window. Once it's done, you'll see something like this:

```
added 150 packages from 120 contributors and audited 264 packages in 12.136s
```

### Step 4. Change configs/config.js
Open `configs/config.js` and modify the source outputs and wwwroot constants to match your system's path.

>For the **Documancers team**, these should be the same as on my system so if you're using something different, be sure to let me know, so that my paths don't get polluted with yours.

## Launching the Local Webserver
This starts a local webserver and a file watcher.
```
> npm run start
```
The window shows this to know you're running the server:
```
[0] 2020-03-27T17:58:11.868Z info: Filewatcher watching:
[0]     D:\git\pcdmishelp\Pcdlrn\Help\wwwroot\*.js,
[0]     D:\git\pcdmishelp\Pcdlrn\Help\wwwroot\*.css,
[0]     D:\git\pcdmishelp\Pcdlrn\Help\wwwroot\index.htm
[1] 2020-03-27T17:58:11.952Z info: Running static server on port 3000
```

Once running, if you make changes to .css or .js files or index.htm in wwwroot, the file watcher in this repo will copy the changes to your ..\Outputs\ directory. This directory is the root of the webserver.

In your browser, navigate to [localhost:3000](localhost:3000) to use the webserver.

## About file_handler.js
If you change `file_hander.js`, run this command to copy it into all the child RH projects source locations.

```
> npm run copy_file_handler
```

Then you'd need to rebuild those projects.

## About Common_Web.css
If you change `Common_Web.css`, run this command to copy it into all the child RH projects source locations.

```
> npm run copy_common_web_css
```
