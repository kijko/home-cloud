
## Add helm repositories

``helm repo add twun https://helm.twun.io``

## Generate http credentials

``htpasswd -Bbn user password``

## Install
```shell
helm install \
--set docker-registry.secrets.htpasswd=$DOCKER_REGISTRY_CREDS \
container-registry \
./container-registry \
-n container-registry
```
