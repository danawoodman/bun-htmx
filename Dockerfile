# syntax=docker/dockerfile:1

# Config
FROM oven/bun:latest

WORKDIR /app

# Install deps
ADD public public
ADD tailwind.config.js tailwind.config.js
ADD src src
ADD package.json package.json
ADD bun.lockb bun.lockb
RUN bun install

# Build
RUN bun build:tailwind
RUN bun build:server

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

EXPOSE $PORT

# Run
CMD ["bun", "start"]