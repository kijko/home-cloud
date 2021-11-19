## Installation

```shell
helm install \
-n chart-museum \
--set env.auth.user=$USER,env.auth.password=$PASSWORD \
chart-museum \
$CHART_DIR
```

## Pushing hard
Use plugin:
```shell
helm plugin install https://github.com/chartmuseum/helm-push.git
```