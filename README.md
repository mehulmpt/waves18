# Waves '18 Website

## Setup Instructions

1. Do `git clone --recurse-submodules https://github.com/mehulmpt/waves18 waves`
2. `cd waves` and you should see 2 folders: `backend` and `frontend`
3. `cd backend` and do `npm install`
4. Open new terminal and do `sudo mongod` to start MongoDB server
5. Do `node index.js` to start server at [::]:1337

## API Hooks

### /event/:template

Anything hit on above URL will be traslated as `frontend/templates/:template.html` on the filesystem. Some examples:

```
http://localhost:7331/event/path1 ---> frontend/templates/path1.html
http://localhost:7331/event/path2 ---> frontend/templates/path2.html


http://localhost:7331/ ---> frontend/templates/index.html (Backend configured)
http://localhost:7331/* ---> frontend/templates/404.html (404 | Backend configured) 
```

### /fest-registration

#### JS Call

```js
const data = { 
    name: 'NAME OF USER', 
    college: 'NAME OF COLLEGE', 
    email: 'EMAIL OF USER', 
    mobile: 'MOBILE NUMBER OF USER' 
}
const headers = {
    'Content-Type': 'application/json'
}
fetch('/fest-registration', { method: 'POST', body: JSON.stringify(data), headers })
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