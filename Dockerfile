# syntax=docker/dockerfile:1

# TODO:
# copy all go files
# copy melt.json
# build client
# melt production mode

FROM golang:1.21.1

WORKDIR /cryptomania

COPY go.mod go.sum ./

RUN go mod download

RUN go build -o cryptomania .

CMD ["./drain"]