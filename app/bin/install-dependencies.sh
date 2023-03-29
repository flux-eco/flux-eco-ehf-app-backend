#!/usr/bin/env sh

set -e

installDependency() {
    mkdir -p "/opt/flux-eco-node-http-server" &&
    cd "/opt/flux-eco-node-http-server" &&
    wget  -O - "https://github.com/flux-eco/flux-eco-node-http-server/archive/refs/tags/v2023-03-29.tar.gz" |  tar -xz --strip-components=1
}

installDependency