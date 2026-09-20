FROM node:20-bookworm

# Herramientas útiles dentro del contenedor
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    postgresql-client \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# El usuario "node" ya viene incluido en la imagen oficial de Node
USER node
