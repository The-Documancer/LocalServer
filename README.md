# Readme
## Installing
Hello. Welcome. You are gonna love this! We've never used local webservers before, but now, we are gonna make somethin' special. 
### Step 1. Install Node.js
Check if you need to install Node.js / npm. You can run the following, it'll show your npm version.
```
> npm -v
6.13.4
```
### Step 2. Clone this Repo
Use this code to clone this repo:
```
> git clone 
```
!!! COME BACK

### Step 3. Install npm Packages
Use this code to install the packages:
```
> npm install
```

### Step 4. Change configs/config.js
Open `configs/config.js` and modify the source outputs and wwwroot constants to match your system's path.


## Launching the Local Webserver
This starts a local webserver and a file watcher.
```
> npm run start
```
Once running, if you make changes to .css or .js files or index.htm in wwwroot, it will copy them to your ..\Outputs\ directory. This directory is the root of the webserver.

In your browser, navigate to [localhost:3000](localhost:3000) to use the webserver.

## About file_handler.js
If you change `file_hander.js`, run this command to copy it into all the child RH projects source locations.

```
> npm run copy_file_handler
```

Then you'd need to rebuild those projects.

