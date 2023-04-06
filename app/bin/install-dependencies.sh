#!/usr/bin/env sh

set -e

installDependency() {
    mkdir -p "/build/flux-eco-node-http-server" &&
    cd "/build/flux-eco-node-http-server" &&
    wget -O - "https://github.com/flux-eco/flux-eco-node-http-server/archive/refs/tags/v-ehf-intermediate.tar.gz" |  tar -xz --strip-components=1
}

installDependency