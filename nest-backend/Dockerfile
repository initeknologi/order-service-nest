# Gunakan image Node.js sebagai base
FROM node:20

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# **Tambahkan build aplikasi sebelum menjalankan**
RUN npm run build

# Jalankan aplikasi
CMD ["node", "dist/main.js"]

# Expose port aplikasi NestJS
EXPOSE 4000
