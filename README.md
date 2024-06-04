It lets you ask questions in natural language and get
answers based on your team specific documents. Think ChatGPT if it had access to your team's unique
knowledge. Connects to all common workplace tools such as Slack, Google Drive, Confluence, etc.

Teams have used Pinelens to:
- Speedup customer support and escalation turnaround time.
- Improve Engineering efficiency by making documentation and code changelogs easy to find.
- Let sales team get fuller context and faster in preparation for calls.
- Track customer requests and priorities for Product teams.
- Help teams self-serve IT, Onboarding, HR, etc.

## System Design
![System Design](https://github.com/vaibhawkhemka/ProtonDataLab/blob/main/System-Design.png?raw=true)

<h3>Usage</h3>

## Deployment

# Locally using Docker

Pinelens can easily be run locally (even on a laptop) or deployed on a virtual machine with a single
`docker compose` command. 
```bash
git clone (https://github.com/vaibhawkhemka/RAG-in-Production.git)
cd ProtonDataLab/deployment/docker_compose
docker-compose -f docker-compose.dev.yml -p danswer-stack up -d --build --force-recreate
```
4. This may take 15+ minutes depending on your internet speed.
Addditionally, once the images have been pulled / built, the initial startup of the api_server may take some time (we download embedding models from HuggingFace to power the search). If you see This site can’t be reached in your browser despite all containers being up and running, check the api_server logs and make sure you see Application startup complete.
If you see Killed in the logs, you may need to increase the amount of memory given to Docker. For recommendations, check the system requirements here.
Server will now be running on http://localhost:3000.

# AWS EC2 instance (In Progress)

1. The first step is to start up an EC2 instance with the appropriate resources. We recommend at least 16GB of RAM, 4-8vCPU cores, and 500GB of disk for a small-mid sized organization (< 5000 users). For reference, in our Cloud offering we use a m7i.xlarge with 500GB of EBS storage.

2.setting up the security group for the new instance, make sure that you allow for HTTPS traffic.

3.Installing Dependencies <br>

   ```bash
   sudo yum update -y
   
   sudo yum install docker -y
   sudo service docker start
   
   sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   
   sudo yum install git
   ```
4. Starting EC2 Server
   git clone (https://github.com/vaibhawkhemka/ProtonDataLab.git)

   docker-compose -f docker-compose.dev.yml -p danswer-stack up -d --build --force-recreate

5. After waiting a few minutes (you can monitor the progress with docker logs pinelens-stack-api_server-1 -f; once you see a log for INFO: Application startup complete. then everything should be good to go).

## 💃 Main Features 
* Document Search + AI Answers for natural language queries.
* Connectors to all common workplace tools like Google Drive, Confluence, Slack, etc.
* Chat support (think ChatGPT but it has access to your private knowledge sources).
* Create custom AI Assistants with different prompts and backing knowledge sets.
* Slack integration to get answers and search results directly in Slack.


## Other Noteable Benefits 
* Best in class Hybrid Search across all sources (BM-25 + prefix aware embedding models).
* User Authentication with document level access management.
* Admin Dashboard to configure connectors, document-sets, access, etc.
* Custom deep learning models + learn from user feedback.
* Connect Pinelens with LLM of your choice for a fully airgapped solution.
* Easy deployment and ability to host Pinelens anywhere of your choosing.

## Components
### Frontend
### Backend
### Api-Server
### Nginx
### Vectorstores (Vespa)
### 🔌 Connectors
Efficiently pulls the latest changes from:
  * Slack
  * GitHub
  * Google Drive
  * Confluence
  * Jira
  * Zendesk
  * Gmail
  * Notion
  * Gong
  * Slab
  * Linear
  * Productboard
  * Guru
  * Bookstack
  * Document360
  * Sharepoint
  * Hubspot
  * Local Files
  * Websites
  * And more ...

## 🚧 Roadmap
* Organizational understanding.
* Ability to locate and suggest experts from your team.
* Code Search
* Structured Query Languages (SQL, Excel formulas, etc.)

## 💡 Contributing
Looking to contribute? Please check out the [Contribution Guide](CONTRIBUTING.md) for more details.
