## Cluster host initialization

1. Install <b>ChartMuseum</b> using helm chart in <b>./charts/chart-museum</b>
2. `helm repo add --username $USERNAME --password $PASSWORD home-cloud-chart-museum http://$IP:300001` on both machines
3. Push <b>Container Registry</b> chart to <b>Chart Museum</b> deployed
4. Install <b>Container Registry</b> chart
5. `docker login -u $DOCKER_REG_USR -p $DOCKER_REG_PASS $IP:30000`

## Ports used

<table>
  <tbody>
    <tr><td>30_000</td><td>Container Registry</td></tr>
    <tr><td>30_001</td><td>Charts Museum</td></tr>
  </tbody>
</table>
