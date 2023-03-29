FROM node:19-alpine AS build

COPY build/flux-eco-node-http-server /build/flux-eco-node-http-server
COPY app /build/flux-eco-ehf-app-backend/app
#RUN chmod +x /build/flux-eco-ehf-app-backend/app/bin/install-dependencies.sh
RUN chmod +x /build/flux-eco-ehf-app-backend/app/docker-entrypoint.sh

#RUN /build/flux-eco-ehf-app-backend/app/bin/install-dependencies.sh

FROM node:19-alpine AS medi-eco-book-stack-query-actions

COPY --from=build /build /opt/

RUN chown -R node:node /opt/flux-eco-ehf-app-backend

USER node:node

EXPOSE 8200

WORKDIR /opt/flux-eco-ehf-app-backend/app
ENTRYPOINT ["/opt/flux-eco-ehf-app-backend/app/docker-entrypoint.sh"]