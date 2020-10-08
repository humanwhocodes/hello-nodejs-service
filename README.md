# Hello Service

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A simple [Fastify]() server intended to serve as an example of deploying a Node.js application to [Google Cloud Run]().

## Usage

After cloning the repository, install the dependencies:

```
$ npm install
```

To start the server, run:

```
$ npm start
```

Locally, this will run the server on http://localhost:8080.

## Notes

1. The server reads from the `PORT` environment variable to determine which port to listen on. This is important because Google Cloud Run defines this variable and it's the only port that will be open.
1. The `Dockerfile` is generic and can be reused for most projects. You don't need to expose a port manually inside the file because Google Cloud Run manages that for you.


## License

Apache 2.0
