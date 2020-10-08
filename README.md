# Hello Service

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A simple [Fastify](https://www.fastify.io/) server intended to serve as an example of deploying a Node.js application to [Google Cloud Run](https://cloud.google.com/run/).

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
1. You no longer need to define a `Dockerfile` to run Node.js projects on Google Cloud Run. You can instead use the built-in [Node.js Buildpack](https://github.com/GoogleCloudPlatform/buildpacks). All you need to do is define `npm start`.

## License

Apache 2.0
