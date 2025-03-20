<h1 align="center">
   Micro Service My Travel App API 🚀
</h1>

<h4 align="center">
 🚧  Em construção...  🚧
</h4>

<p align="center">My Travel App API is a backend developed in Node.js with Fastify, Prisma, and MySQL to allow users to register places they have visited or wish to visit, add opinions, and categorize these locations.</p>

<h1 align="center"> Getting Started</h1>

## Setup application

- NodeJs 17:00 ou higher ✅;
- TypeScript ✅;
- Prisma ✅;
- Data base Application: Mysql ✅;
- Docker to containerize the developing database ✅;

#### Tech Stack

![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Fastify](https://img.shields.io/badge/Fastify-000?style=for-the-badge&logo=fastify&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-11394E?style=for-the-badge&logo=prisma&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-70961E?style=for-the-badge&logo=vitest&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-264B7E?style=for-the-badge&logo=zod&logoColor=white) ![Mysql](https://img.shields.io/badge/MySql-F7A017?style=for-the-badge&logo=mysql&logoColor=00516A) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## How it Works

#### Clone the repository

```
git clone https://github.com/GabrielStenzowski/micro-service-wish-trip.git
```

#### Install the dependencies

```
npm install
```

#### Make a copy of .env.example and rename the copy as .env

```
sudo cp .env.example .env
```

#### Add the values ​​in the environment variables

```
In Development Moment
```

#### Run in localhost

```
docker compose up
```

```
npx prisma migrate dev
```

```
npm run dev
```

#### Application Routes

<table>
  <tr>
    <td><b>Create User</b></td>
    <td>POST http://localhost:3010/user</td>
  </tr>
  <tr>
    <td><b>Create Category</b></td>
    <td>
      POST http://localhost:3010/category
    </td>
  </tr>
  <tr>
    <td><b>Create Place</b></td>
    <td>
      POST http://localhost:3010/place
    </td>
  </tr>
    <tr>
    <td><b>Create User Place</b></td>
    <td>
      POST http://localhost:3010/user-place
    </td>
  </tr>
    <tr>
    <td><b>List User Places</b></td>
    <td>
      POST http://localhost:3010/get-user-places
    </td>
  </tr>
    <tr>
    <td><b>List Places</b></td>
    <td>
      GET http://localhost:3010/places
    </td>
  </tr>
    <tr>
    <td><b>List Categories</b></td>
    <td>
      POST http://localhost:3010/categories
    </td>
  </tr>
</table>
