# Kobra API

This repository has two parts, our main GraphQL API.

## Environment variables

Right now the code uses a local SQLite database but in the future it will need the `.env` file:
```env
# Database URL
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Also, put your Firebase service account key in `firebase-key.json`.
