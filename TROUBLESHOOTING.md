# Sanity Connection - Troubleshooting

## Masalah: Error Request ke Sanity

Jika error ini terjadi di Vercel:

```
Error: Request error while attempting to reach is https://nuvi2tav.apicdn.sanity.io/...
```

## Solusi:

### 1. Cek CORS Origins
Buka Sanity Studio > Project > API > CORS Origins
Pastikan ada:
- http://localhost:5173 (untuk dev)
- https://nuvi2tav.api.sanity.io

### 2. Coba Redeploy
Di Vercel Dashboard > Deployments > Coba "Retry deployment"

### 3. Cek Environment Variables
Di Vercel Project Settings pastikan:
-Tidak ada yang salah dengan projectId