# Waves '18 Website

## Setup Instructions

1. Do `git clone --recurse-submodules https://github.com/mehulmpt/waves18 waves`
2. `cd waves` and you should see 2 folders: `backend` and `frontend`
3. `cd backend` and do `npm install`
4. Open new terminal and do `sudo mongod` to start MongoDB server
5. Do `node index.js` to start server at [::]:1337

## API Hooks

## /:page

Anything hitting on above URL will be translated as `frontend/templates/:page.html` on the filesystem. Some examples:

```
http://localhost:7331/page1 ---> frontend/templates/page1.html
http://localhost:7331/page2 ---> frontend/templates/page2.html


http://localhost:7331/ ---> frontend/templates/index.html (Backend configured)
http://localhost:7331/* ---> frontend/templates/404.html (404 | Backend configured) 
```

### /event/:template

Anything hit on above URL will be traslated as `frontend/templates/events/:template.html` on the filesystem. Some examples:

```
http://localhost:7331/event/path1 ---> frontend/templates/events/path1.html
http://localhost:7331/event/path2 ---> frontend/templates/events/path2.html


http://localhost:7331/ ---> frontend/templates/index.html (Backend configured)
http://localhost:7331/* ---> frontend/templates/404.html (404 | Backend configured) 
```

### /event/:eventname

#### JS Call

```js
const data = { 
    name: 'NAME OF USER', 
    collegename: 'NAME OF COLLEGE', 
    email: 'EMAIL OF USER', 
    mobile: 'MOBILE NUMBER OF USER' 
}
const headers = {
    'Content-Type': 'application/json'
}
fetch('/event/:eventname', { method: 'POST', body: JSON.stringify(data), headers })
```

#### Response

```
{
    status: "ok"
}
```

OR

```
{
    status: "error",
    message: "appropirate error message here"
}
```

#### Valid Events

Valid eventnames are: fest-registration | irshad | inverse | smtf