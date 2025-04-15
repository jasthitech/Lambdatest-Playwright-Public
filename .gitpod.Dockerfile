FROM mcr.microsoft.com/playwright:v1.43.1-jammy

# Optional: install extra tools
RUN apt-get update && apt-get install -y nano