SQL: Structured Query Language
DB" SQL/NoSQL
NoSql types:
Document DB,
Key value Db
GraphDb
Wide column DB
Multi-model

NoSQL (not-only SQL) : MongoDB is a document database, which stores data in JSON-like documents with dynamic schemas.

monolith vs microservice
1. development speed
2. code repo
3. code review process
4. scalability
5. deployment
6. tech stack
7. infra cast
8. complexity
9. fault isolation
10. testing
11. ownership
12. maintainability
13. revamps
14. debugging
15. dev experience (DX)



# **Monolith vs Microservices (Advanced Comparison)**

## **Comparison Table**

| Feature            | **Monolith** | **Microservices** |
|-------------------|-------------|------------------|
| **1. Development Speed** | Faster for small teams and projects since all components are in one place. | Slower initially due to the need for defining boundaries, inter-service communication, and API contracts. |
| **2. Code Repository** | Single codebase (monorepo) for the entire application. | Multiple repositories (polyrepo) for different services, though some teams use a monorepo for managing services. |
| **3. Code Review Process** | Simple and centralized; all changes happen in the same repo. | More complex due to multiple services; may require cross-repo coordination and domain knowledge. |
| **4. Scalability** | Vertical scaling (adding more resources to a single instance); limited horizontal scaling. | Horizontally scalable; services can scale independently based on demand. |
| **5. Deployment** | Single deployment for the whole application; changes require redeploying everything. | Independent deployment of services; enables frequent releases without affecting the entire system. |
| **6. Tech Stack** | Uses a single technology stack for the entire system. | Polyglot architecture: different services can use different programming languages, databases, and frameworks. |
| **7. Infrastructure Cost** | Lower in the beginning but can become expensive due to inefficient scaling. | Higher due to the need for container orchestration, API gateways, service meshes, and distributed logging. |
| **8. Complexity** | Simpler for small applications, but complexity increases as the application grows. | Higher complexity due to distributed systems, network calls, service discovery, and data consistency challenges. |
| **9. Fault Isolation** | A single bug can crash the entire system. | Better fault isolation: a failure in one service doesn’t necessarily bring down the entire application. |
| **10. Testing** | Easier to test end-to-end since all components are together. | Requires extensive integration and contract testing due to inter-service communication. |
| **11. Ownership** | Typically, one team owns the entire application. | Each service is owned by a separate team, promoting autonomy but requiring coordination. |
| **12. Maintainability** | As the codebase grows, maintenance becomes harder due to tight coupling and dependencies. | Easier to maintain individual services but requires strong DevOps practices for handling distributed systems. |
| **13. Revamps (Refactoring & Rewrites)** | Difficult to revamp individual parts without affecting the whole system. | Easier to replace or rewrite a single microservice without impacting the entire application. |
| **14. Debugging** | Easier debugging since everything is in one place, but log clutter can be an issue. | More challenging due to distributed logging, tracing, and debugging across multiple services. |
| **15. Developer Experience** | Easier for new developers to understand since everything is centralized. | Steep learning curve due to API communication, distributed debugging, and observability tools. |

---

## **When to Choose Monolith vs Microservices?**

### ✅ **Monolith is better when:**
- You’re a startup or small team with a simple product.
- Speed of development is a priority.
- You don’t have DevOps expertise or infrastructure for distributed systems.
- You need fast debugging and testing cycles.

### ✅ **Microservices are better when:**
- Your application has high scalability requirements.
- Teams are large, working on different features simultaneously.
- You need independent deployments with different tech stacks.
- Fault isolation and resilience are critical.

---
