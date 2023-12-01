# syntax=docker/dockerfile:1

# Config
FROM oven/bun:latest

WORKDIR /app

# Install deps
ADD public public
ADD tailwind.config.js tailwind.config.js
ADD postcss.config.cjs postcss.config.cjs
ADD src src
ADD package.json package.json
ADD bun.lockb bun.lockb
RUN bun install 

# Build
RUN bun build

ENV NODE_ENV="production"
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

EXPOSE $PORT

# Run
CMD ["bun", "start"]

# Clean container
RUN rm -rf tailwind.config.js \
    && rm -rf postcss.config.cjs \
    && rm -rf src \
    && rm -rf package.json \
    && rm -rf bun.lockb