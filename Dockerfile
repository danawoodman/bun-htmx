# syntax=docker/dockerfile:1

# Config
FROM oven/bun:latest

WORKDIR /app

ENV NODE_ENV=production

# Install deps
ADD public public
ADD tailwind.config.js tailwind.config.js
ADD postcss.config.cjs postcss.config.cjs
ADD src src
ADD package.json package.json
ADD bun.lockb bun.lockb
RUN bun install 

# Build
RUN bun run build

# Clean container
RUN rm -rf tailwind.config.js \
    && rm -rf postcss.config.cjs \
    && rm -rf src \
    && rm -rf bun.lockb \
    && rm -rf node_modules

# Run
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

EXPOSE $PORT

CMD bun start