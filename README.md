# Development

Steps to set up development app.

1. Start database (root address of project):

```
docker compose up -d
```

2. Rename .env.template to .env
3. Replace environment variables.
4. Execute SEED to [create a local DB](localhost:3000/api/seed)

# Prisma Commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage
