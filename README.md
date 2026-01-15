# 🚚 Logistics Management System - API Gateway

<div align="center">

<!-- Golden Ratio Typography: φ emphasis for logistics excellence -->
<h2 style="font-size: 1.618em; color: #2c3e50; margin: 26px 0;">
  ⚡ High-Performance gRPC API Gateway for Enterprise Logistics
</h2>

<p style="font-size: 1.2em; color: #34495e; max-width: 618px; margin: 0 auto;">
  <strong>Modern, scalable microservices architecture with TypeScript, Express.js, and gRPC following golden ratio design principles</strong>
</p>

<!-- Golden Ratio Badge Layout: Primary (61.8%) + Secondary (38.2%) -->
<div style="margin: 32px 0;">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-4.18+-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/gRPC-Latest-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="gRPC" />
</div>

<div style="margin: 20px 0;">
  <img src="https://img.shields.io/badge/MariaDB-10.5+-003545?style=flat-square&logo=mariadb&logoColor=white" alt="MariaDB" />
  <img src="https://img.shields.io/badge/TypeORM-Latest-FE0902?style=flat-square&logo=typeorm&logoColor=white" alt="TypeORM" />
  <img src="https://img.shields.io/badge/Microservices-Architecture-FF6B6B?style=flat-square&logo=microgenetics&logoColor=white" alt="Microservices" />
</div>

</div>

---

## 📋 Overview

This project serves as the **API Gateway** for a comprehensive logistics management system. It provides RESTful HTTP endpoints that communicate with backend microservices via gRPC, offering a unified interface for managing logistics operations including shipments, inventory, tracking, and order management.

### 🎯 Key Features

- **🔌 RESTful API Gateway**: Clean HTTP endpoints for client applications
- **⚡ gRPC Communication**: High-performance inter-service communication
- **🗄️ Database Integration**: MariaDB with TypeORM for robust data persistence
- **📦 TypeScript**: Full type safety and modern development experience
- **🏗️ Microservices Architecture**: Scalable and maintainable service design
- **🔐 Enterprise-Ready**: Built for production logistics systems

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **TypeScript** | Primary programming language | Latest |
| **Express.js** | Web framework for API endpoints | 4.x |
| **gRPC** | Microservices communication protocol | Latest |
| **MariaDB** | Relational database management | 10.x+ |
| **TypeORM** | Database ORM and migration management | Latest |

---

## 🏗️ Architecture - Golden Ratio Design

<div align="center">

*Enterprise logistics architecture following φ proportions for optimal system visualization*

</div>

### 🌟 **High-Level System Architecture - Golden Ratio Layout**

```mermaid
graph TB
    %% Golden Ratio Client Layer (φ = 1.618 user interaction priority)
    subgraph "🌐 Client Layer - φ Priority Interface"
        direction LR
        WebApp[📱 Web Application<br/>Angular/React<br/>φ User Experience]
        MobileApp[📲 Mobile App<br/>React Native/Flutter<br/>φ Mobile Priority]
        AdminUI[👨‍💻 Admin Dashboard<br/>Analytics & Reports<br/>1.0 Management]
        IoT[🔌 IoT Devices<br/>Sensors & Trackers<br/>1/φ Automation]
    end
    
    %% Golden Ratio Gateway Layer (1.0 balanced processing)
    subgraph "🚪 API Gateway Layer - Balanced Processing"
        direction TB
        Gateway[⚡ Express.js Gateway<br/>Request Routing<br/>Load Balancing]
        Auth[🔐 Authentication<br/>JWT & OAuth<br/>Security Layer]
        RateLimit[⏱️ Rate Limiting<br/>Traffic Control<br/>Protection]
        Swagger[📚 API Documentation<br/>OpenAPI Spec<br/>Developer Portal]
    end
    
    %% Golden Ratio Microservices Layer (φ core business logic)
    subgraph "⚙️ Microservices Layer - φ Business Logic"
        direction TB
        
        subgraph "🚚 Logistics Core Services"
            Shipment[📦 Shipment Service<br/>Package Management<br/>φ Priority]
            Tracking[📍 Tracking Service<br/>Real-time Location<br/>φ Priority]
            Inventory[📊 Inventory Service<br/>Stock Management<br/>1.0 Priority]
        end
        
        subgraph "💼 Business Support Services"
            Order[📋 Order Service<br/>Order Processing<br/>1.0 Priority]
            User[👥 User Service<br/>Account Management<br/>1/φ Priority]
            Notification[🔔 Notification Service<br/>Alerts & Messages<br/>1/φ Priority]
        end
    end
    
    %% Golden Ratio Data Layer (1/φ = 0.618 persistence)
    subgraph "🗄️ Data Persistence Layer - φ Storage"
        direction LR
        MariaDB[(🗃️ MariaDB Cluster<br/>Primary Database<br/>φ Write Load)]
        Redis[(⚡ Redis Cache<br/>Session & Performance<br/>38.2% Cache)]
        FileSystem[(📁 File Storage<br/>Documents & Assets<br/>38.2% Files)]
    end
    
    %% Golden Spiral Communication Flow (Primary - 61.8%)
    WebApp ==>|Primary Traffic<br/>φ Load| Gateway
    MobileApp ==>|Primary Traffic<br/>φ Load| Gateway
    AdminUI -->|Management Traffic<br/>Standard Load| Gateway
    IoT -.->|Sensor Data<br/>Background Load| Gateway
    
    %% Gateway Processing (Balanced - 1.0)
    Gateway ==>|Request Processing| Auth
    Auth ==>|Authenticated Requests| RateLimit
    RateLimit ==>|Controlled Traffic| Shipment
    RateLimit ==>|Controlled Traffic| Tracking
    RateLimit ==>|Controlled Traffic| Order
    
    %% gRPC Communication (φ distributed)
    Shipment -.->|gRPC Calls<br/>Service Mesh| Inventory
    Tracking -.->|gRPC Calls<br/>Location Updates| Shipment
    Order -.->|gRPC Calls<br/>Order Processing| User
    User -.->|gRPC Calls<br/>Notifications| Notification
    
    %% Data Layer Connections (φ distributed load)
    Shipment ==>|Write Operations<br/>φ Priority| MariaDB
    Tracking ==>|Write Operations<br/>φ Priority| MariaDB
    Order ==>|Write Operations<br/>Standard| MariaDB
    
    Gateway -.->|Session Management| Redis
    Auth -.->|Token Caching| Redis
    Shipment -.->|Document Storage| FileSystem
    
    %% Golden Ratio Color Scheme (φ visual hierarchy)
    style WebApp fill:#3498db,stroke:#2980b9,stroke-width:5px,color:#ffffff
    style MobileApp fill:#e74c3c,stroke:#c0392b,stroke-width:5px,color:#ffffff
    style AdminUI fill:#f39c12,stroke:#e67e22,stroke-width:3px,color:#ffffff
    style IoT fill:#95a5a6,stroke:#7f8c8d,stroke-width:2px,color:#ffffff
    
    style Gateway fill:#2c3e50,stroke:#1a252f,stroke-width:4px,color:#ffffff
    style Auth fill:#27ae60,stroke:#229954,stroke-width:4px,color:#ffffff
    style RateLimit fill:#8e44ad,stroke:#7d3c98,stroke-width:3px,color:#ffffff
    style Swagger fill:#16a085,stroke:#138d75,stroke-width:2px,color:#ffffff
    
    style Shipment fill:#e74c3c,stroke:#c0392b,stroke-width:4px,color:#ffffff
    style Tracking fill:#3498db,stroke:#2980b9,stroke-width:4px,color:#ffffff
    style Inventory fill:#f39c12,stroke:#e67e22,stroke-width:3px,color:#ffffff
    style Order fill:#27ae60,stroke:#229954,stroke-width:3px,color:#ffffff
    style User fill:#9b59b6,stroke:#8e44ad,stroke-width:2px,color:#ffffff
    style Notification fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#ffffff
    
    style MariaDB fill:#4caf50,stroke:#388e3c,stroke-width:5px,color:#ffffff
    style Redis fill:#ff5722,stroke:#e64a19,stroke-width:3px,color:#ffffff
    style FileSystem fill:#607d8b,stroke:#455a64,stroke-width:3px,color:#ffffff
```

### 🔄 **Request Flow Architecture - Golden Ratio Communication**

<div align="center">

*gRPC communication patterns optimized with φ proportions for efficient data flow*

</div>

```mermaid
sequenceDiagram
    participant C as 📱 Client
    participant G as 🚪 API Gateway
    participant A as 🔐 Auth Service
    participant S as 📦 Shipment Service
    participant T as 📍 Tracking Service
    participant D as 🗃️ Database
    
    Note over C,D: Golden Ratio Request Flow (φ = 1.618 optimization)
    
    %% Primary Flow (61.8% - φ priority)
    C->>+G: 1. HTTP Request<br/>φ Priority Traffic
    G->>+A: 2. Validate Token<br/>Security Check
    A-->>-G: 3. Auth Success<br/>User Context
    
    %% Business Logic Flow (1.0 - balanced)
    G->>+S: 4. gRPC Call<br/>Business Logic
    S->>+T: 5. Location Update<br/>Service Communication
    T-->>-S: 6. Tracking Data<br/>Real-time Info
    
    %% Data Layer Flow (1/φ - 38.2% persistence)
    S->>+D: 7. Database Query<br/>Data Persistence
    D-->>-S: 8. Query Result<br/>Retrieved Data
    
    %% Response Flow (φ spiral pattern)
    S-->>-G: 9. gRPC Response<br/>Processed Data
    G-->>-C: 10. HTTP Response<br/>JSON Payload
    
    %% Golden Ratio Timing Annotations
    Note over C,G: φ Response Time: <100ms
    Note over G,S: 1.0 Processing: <200ms  
    Note over S,D: 1/φ Query Time: <50ms
```

### 🌐 **gRPC Service Mesh - Golden Ratio Microservices**

<div align="center">

*Advanced microservices communication mesh using φ proportions for optimal service interaction*

</div>

```mermaid
graph TB
    %% Golden Ratio Service Discovery Layer (φ = 1.618 priority)
    subgraph "🔍 Service Discovery - φ Priority Layer"
        direction TB
        ServiceRegistry[📋 Service Registry<br/>Consul/Eureka<br/>φ Discovery Priority]
        LoadBalancer[⚖️ Load Balancer<br/>HAProxy/Nginx<br/>φ Traffic Distribution]
        HealthCheck[💓 Health Monitoring<br/>Service Mesh<br/>1.0 Monitoring]
    end
    
    %% Golden Ratio gRPC Services Layer (φ core services)
    subgraph "⚡ gRPC Services Mesh - φ Business Core"
        direction TB
        
        subgraph "🚚 Logistics Domain Services"
            ShipmentGRPC[📦 Shipment gRPC<br/>Proto: shipment.proto<br/>φ Core Service]
            TrackingGRPC[📍 Tracking gRPC<br/>Proto: tracking.proto<br/>φ Core Service]
            InventoryGRPC[📊 Inventory gRPC<br/>Proto: inventory.proto<br/>1.0 Service]
        end
        
        subgraph "💼 Support Domain Services"
            OrderGRPC[📋 Order gRPC<br/>Proto: order.proto<br/>1.0 Service]
            UserGRPC[👥 User gRPC<br/>Proto: user.proto<br/>1/φ Service]
            NotificationGRPC[🔔 Notification gRPC<br/>Proto: notification.proto<br/>1/φ Service]
        end
    end
    
    %% Golden Ratio Message Queue Layer (1/φ = 0.618 async)
    subgraph "📨 Message Queue Layer - Async Communication"
        direction LR
        EventBus[🚌 Event Bus<br/>Apache Kafka<br/>φ Event Priority]
        MessageQueue[📬 Message Queue<br/>RabbitMQ<br/>38.2% Async Load]
        StreamProcessor[🌊 Stream Processing<br/>Apache Flink<br/>38.2% Real-time]
    end
    
    %% Golden Ratio Data Persistence (1/φ distributed)
    subgraph "🗄️ Distributed Data Layer - φ Storage"
        direction TB
        
        subgraph "📊 Primary Databases"
            ShipmentDB[(📦 Shipment DB<br/>MariaDB Cluster<br/>φ Write Load)]
            TrackingDB[(📍 Tracking DB<br/>TimeSeries DB<br/>φ Write Load)]
            InventoryDB[(📊 Inventory DB<br/>PostgreSQL<br/>1.0 Load)]
        end
        
        subgraph "⚡ Cache & Search"
            RedisCluster[(⚡ Redis Cluster<br/>Distributed Cache<br/>38.2% Cache)]
            ElasticSearch[(🔍 Elasticsearch<br/>Search Engine<br/>38.2% Search)]
        end
    end
    
    %% Service Discovery Connections (φ priority)
    ServiceRegistry ==>|Service Registration<br/>φ Priority| ShipmentGRPC
    ServiceRegistry ==>|Service Registration<br/>φ Priority| TrackingGRPC
    ServiceRegistry -->|Service Registration<br/>Standard| OrderGRPC
    ServiceRegistry -.->|Service Registration<br/>Background| UserGRPC
    
    LoadBalancer ==>|Traffic Distribution<br/>φ Load Balancing| ShipmentGRPC
    LoadBalancer ==>|Traffic Distribution<br/>φ Load Balancing| TrackingGRPC
    LoadBalancer -->|Traffic Distribution<br/>Standard| InventoryGRPC
    
    %% gRPC Inter-Service Communication (φ mesh)
    ShipmentGRPC -.->|gRPC Stream<br/>Real-time Updates| TrackingGRPC
    TrackingGRPC -.->|gRPC Call<br/>Location Data| ShipmentGRPC
    ShipmentGRPC -.->|gRPC Call<br/>Stock Check| InventoryGRPC
    OrderGRPC -.->|gRPC Call<br/>Order Processing| ShipmentGRPC
    UserGRPC -.->|gRPC Call<br/>User Context| OrderGRPC
    NotificationGRPC -.->|gRPC Stream<br/>Event Notifications| UserGRPC
    
    %% Event-Driven Communication (1/φ async)
    ShipmentGRPC ==>|Publish Events<br/>Shipment Created| EventBus
    TrackingGRPC ==>|Publish Events<br/>Location Updated| EventBus
    EventBus -.->|Subscribe Events<br/>Async Processing| NotificationGRPC
    EventBus -.->|Subscribe Events<br/>Analytics| StreamProcessor
    
    %% Data Layer Connections (φ distributed)
    ShipmentGRPC ==>|Write/Read<br/>φ Priority| ShipmentDB
    TrackingGRPC ==>|Write/Read<br/>φ Priority| TrackingDB
    InventoryGRPC -->|Write/Read<br/>Standard| InventoryDB
    OrderGRPC -->|Write/Read<br/>Standard| ShipmentDB
    
    %% Cache Layer Connections
    ShipmentGRPC -.->|Cache Operations<br/>Performance| RedisCluster
    TrackingGRPC -.->|Search Operations<br/>Location Queries| ElasticSearch
    InventoryGRPC -.->|Cache Operations<br/>Stock Levels| RedisCluster
    
    %% Golden Ratio Color Scheme (φ visual hierarchy)
    style ServiceRegistry fill:#2c3e50,stroke:#1a252f,stroke-width:5px,color:#ffffff
    style LoadBalancer fill:#27ae60,stroke:#229954,stroke-width:4px,color:#ffffff
    style HealthCheck fill:#3498db,stroke:#2980b9,stroke-width:3px,color:#ffffff
    
    style ShipmentGRPC fill:#e74c3c,stroke:#c0392b,stroke-width:5px,color:#ffffff
    style TrackingGRPC fill:#3498db,stroke:#2980b9,stroke-width:5px,color:#ffffff
    style InventoryGRPC fill:#f39c12,stroke:#e67e22,stroke-width:3px,color:#ffffff
    style OrderGRPC fill:#27ae60,stroke:#229954,stroke-width:3px,color:#ffffff
    style UserGRPC fill:#9b59b6,stroke:#8e44ad,stroke-width:2px,color:#ffffff
    style NotificationGRPC fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#ffffff
    
    style EventBus fill:#ff6b6b,stroke:#ee5a52,stroke-width:4px,color:#ffffff
    style MessageQueue fill:#4ecdc4,stroke:#45b7aa,stroke-width:3px,color:#ffffff
    style StreamProcessor fill:#45b7d1,stroke:#3498db,stroke-width:3px,color:#ffffff
    
    style ShipmentDB fill:#4caf50,stroke:#388e3c,stroke-width:5px,color:#ffffff
    style TrackingDB fill:#ff9800,stroke:#f57c00,stroke-width:5px,color:#ffffff
    style InventoryDB fill:#607d8b,stroke:#455a64,stroke-width:3px,color:#ffffff
    style RedisCluster fill:#ff5722,stroke:#e64a19,stroke-width:3px,color:#ffffff
    style ElasticSearch fill:#795548,stroke:#5d4037,stroke-width:3px,color:#ffffff
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MariaDB Server (v10.5+)
- Basic understanding of gRPC and microservices

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdoElHodaky/logisticsassgrpc.git
   cd logisticsassgrpc
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_user
   DB_PASSWORD=your_password
   DB_NAME=logistics_db
   GRPC_SERVICE_HOST=localhost
   GRPC_SERVICE_PORT=50051
   ```

4. **Run database migrations**
   ```bash
   npm run migration:run
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📚 API Endpoints

### Core Endpoints

The API Gateway exposes the following endpoint categories:

- **📦 Shipments**: Create, track, and manage shipments
- **📊 Inventory**: Monitor and update inventory levels
- **🚛 Tracking**: Real-time shipment tracking and status updates
- **📋 Orders**: Order processing and management
- **👥 Users**: User authentication and profile management

### Example Endpoints

```
GET    /api/shipments          - List all shipments
POST   /api/shipments          - Create new shipment
GET    /api/shipments/:id      - Get shipment details
PUT    /api/shipments/:id      - Update shipment
DELETE /api/shipments/:id      - Delete shipment

GET    /api/tracking/:id       - Track shipment status
GET    /api/inventory          - View inventory
POST   /api/orders             - Create new order
```

---

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run test suite
npm run lint         # Lint code
npm run migration:generate  # Generate new migration
npm run migration:run       # Run pending migrations
```

### Project Structure

```
logisticsassgrpc/
├── src/
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic & gRPC clients
│   ├── entities/        # TypeORM database entities
│   ├── routes/          # API route definitions
│   ├── middleware/      # Express middleware
│   ├── config/          # Configuration files
│   └── proto/           # gRPC protocol buffer definitions
├── migrations/          # Database migrations
├── tests/              # Test files
└── package.json
```

---

## 🔐 Security Features

- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- SQL injection protection via TypeORM
- Environment-based configuration

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test suite
npm test -- shipments.test.ts
```

---

## 📈 Performance

- **gRPC Protocol**: Binary protocol for efficient service-to-service communication
- **Connection Pooling**: Optimized database connections
- **Async/Await**: Non-blocking asynchronous operations
- **Caching**: Redis integration ready for response caching

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**abdoElHodaky**
- GitHub: [@abdoElHodaky](https://github.com/abdoElHodaky)

---

## 🙏 Acknowledgments

- Express.js community for the robust web framework
- gRPC team for the efficient RPC framework
- TypeORM contributors for the excellent ORM
- MariaDB Foundation for the reliable database

---

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub or contact the maintainer.

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for the logistics industry

</div>

---

## 📝 One-Line Summary

**A production-ready TypeScript API Gateway that bridges RESTful HTTP clients with gRPC-based logistics microservices (shipments, inventory, tracking, orders) using Express.js for routing and TypeORM with MariaDB for type-safe data persistence in an enterprise-grade, scalable microservices architecture.**
