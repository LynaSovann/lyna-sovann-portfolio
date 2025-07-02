# syntax=docker.io/docker/dockerfile:1

FROM node:18-slim AS base
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install Yarn
RUN corepack enable && \
    corepack prepare yarn@stable --activate && \
    yarn set version stable

# ==== Stage 1: Install Dependencies ====
FROM base AS deps
WORKDIR /app
# Copy only files needed for dependency installation
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/

# Install dependencies with cache
RUN --mount=type=cache,target=/root/.cache/yarn \
    yarn install

# ==== Stage 2: Build Application ====
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# ==== Stage 3: Production Image ====
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]