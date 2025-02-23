FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM python:alpine
WORKDIR /app/dist
COPY --from=build /app/dist .
EXPOSE 8000

CMD ["python", "-m", "http.server", "8000"]