### Preinstallation

- Node.js (18 or later)
- MySQL

  - port: 8889
  - username: root
  - password: root

\*\*\* Based on your machine, can change port, username, password for MySQL \*\*\*

---

### For backend

Firstly create a database name 'finclutech_lab'

```
cd nestjs-backend
mv .env.development .env
npm install
npx prisma migrate dev --name m1
npm run start:dev
```

then open postman and,

import this CURL and send request for system user,

```
curl -X 'POST' \
  'http://localhost:9999/api/system-users' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "fullname": "Hi Finclu",
  "phone": "0922134567",
  "username": "hifinclu101",
  "password": "$hiFinclu01",
  "description": "$hiFinclu01 is my pwd"
}'
```

OR

go to the following Swagger to create system user

```
http://localhost:9999/api-docs/#/System%20User/SystemUserController_create
```

and replace body with

```
{
  "fullname": "Hi Finclu",
  "phone": "0922134567",
  "username": "hifinclu101",
  "password": "$hiFinclu01",
  "description": "$hiFinclu01 is my pwd"
}
```

and execute.

If you want to import many record, please go to

```
http://localhost:9999/api-docs/#/Record/RecordController_CreateAppAccessMany
```

them copy data from ./mockdata.json and modify body

```
{
  "dataList": PASTE HERE!
}
```

and execute.

---

### For frontend

```
cd nextjs-frontend
mv .env.development .env
npm install
npm run dev
```

and go to

```
http://localhost:3000
```

login with account you create above

username: hifinclu101
password: $hiFinclu01
