# Application Web Sécurisée (Patch IPSSI)

Ce projet est une application web conteneurisée et sécurisée, construite avec une architecture en couches. Elle démontre les bonnes pratiques de sécurité modernes, l'utilisation d'un ORM et un déploiement prêt pour la production.

## 🚀 Stack Technique

- **Backend**: Node.js, Express.js
- **Base de données**: PostgreSQL (via Prisma ORM)
- **Frontend**: React.js (servi via Nginx)
- **Conteneurisation**: Docker & Docker Compose
- **Sécurité**: Helmet, Rate Limiting, Bcrypt, Validation des entrées

## 🏗️ Architecture

Le backend suit une **Architecture en Couches** modulaire :

- **`src/controllers/`**: Gère les requêtes et réponses HTTP.
- **`src/services/`**: Contient la logique métier et interagit avec la base de données.
- **`src/routes/`**: Définit les points de terminaison de l'API.
- **`src/config/`**: Configuration de la base de données.
- **`src/app.js`**: Configuration de l'application (Middleware, CORS).

## 🛠️ Démarrage

### Prérequis
- [Docker](https://www.docker.com/products/docker-desktop) installé.

### Installation

1. **Cloner le dépôt** (si ce n'est pas déjà fait).

2. **Configurer les Variables d'Environnement** :
   Copiez le fichier d'exemple pour créer `.env` :
   ```bash
   # Linux/Mac
   cp .env.example .env
   
   # Windows
   copy .env.example .env
   ```
   *(Optionnel)* Modifiez `.env` pour personnaliser les identifiants.

3. **Lancer l'Application** :
   Construisez et démarrez les conteneurs avec Docker Compose :
   ```bash
   docker-compose up --build
   ```

4. **Accéder à l'App** :
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend API**: [http://localhost:8000](http://localhost:8000)

## 🔒 Fonctionnalités de Sécurité

- **Protection Injection SQL** : Toutes les requêtes BDD utilisent Prisma ORM, qui paramètre automatiquement les requêtes.
- **Protection XSS** : En-têtes HTTP sécurisés activés via `Helmet`.
- **Hachage de Mots de Passe** : Les mots de passe utilisateurs sont hachés de manière sécurisée avec `bcrypt` (salés).
- **Rate Limiting** : L'API est protégée contre les attaques DoS (limite de requêtes par fenêtre de temps par IP).
- **Confidentialité des Données** : L'API filtre strictement les données sensibles (les mots de passe ne sont jamais envoyés au client).
