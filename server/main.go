package main

import (
    "net/http"
    pb "github.com/codeflows/twirp-typescript-example/server/haberdasher"
)

func main() {
  server := &Server{} // implements Haberdasher interface
  twirpHandler := pb.NewHaberdasherServer(server, nil)

  http.ListenAndServe(":8080", twirpHandler)
}
