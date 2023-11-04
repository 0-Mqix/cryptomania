# syntax=docker/dockerfile:1

FROM golang:1.21.1

WORKDIR /cryptomania

ENV "PRODUCTION_MODE"=1

COPY /melt.json ./
COPY /client/build ./client/build
COPY /templates/templates.go ./templates/templates.go
COPY /*.go ./

COPY go.mod go.sum ./
RUN go mod download

RUN go build -o cryptomania .

EXPOSE 3000

CMD ["./cryptomania"]