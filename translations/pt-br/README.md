# VSCODE Terraform Snippets

## Como utilizar? 
> 1º Vá até o vscode e clique em "Arquivo"

> 2º Clique em "Preferências"

> 3º Clique em "Configurar Snippets de usuário"

> 4º Escolha um nome para o arquivo

O arquivo será criado com o seguinte nome
<nomeescolhido>.code-snippets

> 5º copie e cole o código do arquivo principal "terraform-snippets.code-snippets" e cole no arquivo
que você gerou, sobrescrevendo-o.

> 6º Salve o arquivo

> Fim, agora vc pode utilizar os seguintes snippets:

- `["variable", "var"]` para criar variáveis genéricas
- `varstr` para variáveis de string
- `varnum` para variáveis numéricas
- `["pool-disks", "sec-disk", "vardisks"]` para uma pool de discos secundários
- `["google_compute_instance", "compute_instance"]` para criar uma compute instance
- `["terraform-google-vpc", "vpc", "compute_network"]` para criar uma VPC
- `["terraform-google-subnetwork", "sn", "compute_subnetwork"]` para criar uma subnetwork
- `["terraform-google-disk", "disk", "compute_disk"]` para criar um disco
- `["terraform-google-bucket", "bucket", "mb"]` para criar um bucket
- `["gke-node-pull", "gke-pool", "node_pool", "pool"]` para criar uma pool de nodes GKE
- `public-ip` para criar um IP público
- `cloud-sql` para criar uma instância Cloud SQL
- `["gke", "cluster", "gke-cluster"]` para criar um cluster GKE
- `["firewall", "firewall-rule", "rule"]` para criar uma regra de firewall
- `["load-balancer", "lb"]` para criar um balanceador de carga
- `attach-disk` para anexar discos



