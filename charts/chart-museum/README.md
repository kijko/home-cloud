## Installation

```shell
helm install \
-n chart-museum \
--set env.auth.user=$USER,env.auth.password=$PASSWORD \
chart-museum \
$CHART_DIR
```
