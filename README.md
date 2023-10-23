# VSCode Terraform Snippets

## How to Use?
1. Open VSCode and click on "File."

2. Click on "Preferences."

3. Click on "Configure User Snippets."

4. Choose a name for the file.

The file will be created with the following name: <chosenname>.code-snippets.

5. Copy and paste the code from the main file "terraform-snippets.code-snippets" into the file you generated, overwriting it.

6. Save the file.

That's it! Now you can use the following snippets:

- `["variable", "var"]` to create generic variables.
- `varstr` for string variables.
- `varnum` for numeric variables.
- `["pool-disks", "sec-disk", "vardisks"]` for a pool of secondary disks.
- `["google_compute_instance", "compute_instance"]` to create a compute instance.
- `["terraform-google-vpc", "vpc", "compute_network"]` to create a VPC.
- `["terraform-google-subnetwork", "sn", "compute_subnetwork"]` to create a subnetwork.
- `["terraform-google-disk", "disk", "compute_disk"]` to create a disk.
- `["terraform-google-bucket", "bucket", "mb"]` to create a bucket.
- `["gke-node-pull", "gke-pool", "node_pool", "pool"]` to create a GKE node pool.
- `public-ip` to create a public IP.
- `cloud-sql` to create a Cloud SQL instance.
- `["gke", "cluster", "gke-cluster"]` to create a GKE cluster.
- `["firewall", "firewall-rule", "rule"]` to create a firewall rule.
- `["load-balancer", "lb"]` to create a load balancer.
- `attach-disk` to attach disks.
