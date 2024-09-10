
<h1 align="center" style="font-weight: bold;">Logistics system💻</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#routes">API Endpoints</a>

 
</p>


<p align="center">Simple description of what your project do or how to use it</p>


<p align="center">
<a href="https://github.com/ShaanCoding">📱 Visit this Project</a>
</p>

<h2 id="technologies">💻 Technologies</h2>

- list of all technologies you used
- ExpressJs
- Typeorm 
- Protobuff
- gRPC

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://github.com/)
- [Git 2](https://github.com)

<h3>Cloning</h3>

How to clone your project

```bash
git clone your-project-url-in-github
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm some-command-to-run
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
|<kbd>POST /authenticate via grpc</kbd>     | authenticate user into the api see [request details](#post-auth-detail)


<h3 id="post-auth-detail">POST /auth/login </h3>

**REQUEST**
```json
{
  "username": "",
  "passwordHash": ""
}
```

**RESPONSE**
```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```
