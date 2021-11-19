## Initialization

1. Install <b>ChartMuseum</b> using helm chart in <b>./charts/chart-museum</b>
2. `helm repo add --username $USERNAME --password $PASSWORD home-cloud-chart-museum http://$IP:300001` on both machines
3. 

## Ports used

<table>
  <tbody>
    <tr><td>30_000</td><td>Container Registry</td></tr>
    <tr><td>30_001</td><td>Charts Museum</td></tr>
  </tbody>
</table>
