# Experiment 7: Implement a Canary Deployment Strategy

**Aim:** To implement a Canary deployment strategy, gradually roll out a new application version to a subset of users, and analyze rollout metrics and rollback triggers.

## 1. Introduction
Canary deployment is an advanced software deployment strategy in which a new application version is gradually released to a small percentage of users before making it available to everyone. It allows developers to test new features in a production-like environment while minimizing the impact of potential failures.

## 2. Working Principle
1. Deploy the existing stable application.
2. Deploy the new Canary application.
3. Configure traffic routing.
4. Send a small percentage of traffic to the Canary version.
5. Monitor application performance and error rates.
6. Gradually increase traffic if the new version performs correctly.
7. Roll back if serious issues are detected.

## 3. Tools Used

| Tool | Purpose |
| :--- | :--- |
| **Docker** | Runs application containers |
| **Nginx** | Distributes application traffic |
| **Terminal** | Executes deployment commands |
| **Docker Network** | Enables container communication |

## 4. Rollout Metrics
* Application response time.
* HTTP error rate.
* CPU utilization.
* Memory consumption.
* Request throughput.
* Application availability.

## 5. Rollback Triggers
1. Application error rates increase significantly.
2. Response times become unacceptable.
3. The new version crashes.
4. Application health checks fail.
5. Important application features stop working.

## 6. Advantages
1. Reduces deployment risks.
2. Supports gradual application releases.
3. Allows real-world performance testing.
4. Limits the impact of application failures.
5. Provides a controlled rollback mechanism.

## 7. Limitations
1. Requires traffic-routing infrastructure.
2. Needs continuous monitoring.
3. Configuration can be complex.
4. Different application versions must remain compatible with shared data and services.

## 8. Conclusion
Canary deployment is an effective deployment strategy for releasing new application versions gradually. In this experiment, Stable and Canary application containers were deployed using Docker. Nginx was configured to distribute traffic between both versions. The traffic distribution was monitored, and rollback was demonstrated by removing the Canary version from the traffic-routing configuration. This approach improves application reliability and reduces the risks associated with software deployment.
