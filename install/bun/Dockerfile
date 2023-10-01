# Use the base image "oven/bun:1.0"
FROM oven/bun:latest

RUN apt update && apt install openssl

WORKDIR /home/bun/app
COPY code/package.json ./
COPY code/bun.lockb ./

RUN bun install

# Specify the default command to be run when the container starts
CMD ["/usr/local/bin/bun"]