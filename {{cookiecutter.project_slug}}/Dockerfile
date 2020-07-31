FROM node:12

RUN mkdir -p /web-app
WORKDIR /web-app

# Copy files
COPY ./.babelrc ./
COPY ./.eslintrc ./
COPY ./.gitignore ./
COPY ./.prettierrc ./
COPY ./*.js ./
COPY ./*.json ./

# Copy folders
COPY ./__tests__ ./__tests__
COPY ./config ./config
COPY ./src ./src

# Install packages
RUN npm install

EXPOSE 3030