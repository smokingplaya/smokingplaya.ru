FROM oven/bun:latest

COPY package.json ./

RUN bun install
RUN bun run