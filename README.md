# 🍽️ UNI Resto Cafe - Restaurant Ordering Application

> A modern restaurant ordering application built with React.js, featuring JWT authentication, real-time cart management, and responsive design. This project demonstrates practical implementation of React concepts, state management, and component-based architecture.

[![React](https://img.shields.io/badge/React-17.0.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/) [![React Router](https://img.shields.io/badge/React_Router-5.3.0-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/) [![ESLint](https://img.shields.io/badge/ESLint-Airbnb-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture & Design Patterns](#-architecture--design-patterns)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Core Functionalities](#-core-functionalities)
- [Code Quality & Best Practices](#-code-quality--best-practices)
- [API Integration](#-api-integration)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Project Overview

**UNI Resto Cafe** is a Single Page Application (SPA) that delivers a seamless restaurant ordering experience. Built with React.js, the application showcases component-based architecture, global state management with Context API, protected routing, and RESTful API integration.

### 🎯 Key Highlights

- **Component Architecture**: Modular, reusable components following React best practices
- **State Management**: Context API implementation for global cart state
- **Authentication**: JWT token-based authentication with protected routes
- **API Integration**: RESTful API consumption with proper error handling
- **Responsive Design**: Mobile-first approach with cross-device compatibility

### 🎥 Live Demo

🔗 **[https://avanisrestocafe.ccbp.tech/](https://avanisrestocafe.ccbp.tech/)**

### 👤 Demo Credentials

```
Username: rahul
Password: rahul@2021
```

---

## ✨ Key Features

### 🔐 Authentication & Security

- **JWT Token Authentication** - Secure login with token-based session management
- **Cookie-based Persistence** - Session data stored securely using `js-cookie`
- **Protected Route Guards** - Automatic redirect to login for unauthorized access
- **Session Expiry** - 7-day token expiration with auto-logout

### 🛒 Cart Management

- **Global State with Context API** - Centralized cart state across the application
- **Real-time Updates** - Instant cart badge counter reflection
- **Quantity Controls** - Increment/decrement with automatic removal at zero
- **Item Duplication Prevention** - Smart detection and quantity increment
- **Remove All Functionality** - Bulk cart clearing with confirm action
- **Persistent Cart State** - Maintains cart during navigation

### 🍕 Menu & Ordering

- **Dynamic Menu Categories** - API-driven category list with active state
- **Dish Details Display** - Image, name, price, calories, availability status
- **Add-on Support** - Display customization options for dishes
- **Availability Indicators** - Visual feedback for out-of-stock items
- **Category Filtering** - Click-to-filter menu by category
- **Responsive Grid Layout** - Adaptive dish card arrangement

### 🎨 UI/UX Enhancements

- **Responsive Design** - Mobile-first approach, works on all screen sizes
- **Loading States** - Spinner animations during API calls
- **Error Handling** - User-friendly error messages with retry options
- **Smooth Navigation** - React Router for seamless page transitions
- **Icon Integration** - React Icons for consistent visual language
- **Clean Typography** - Professional font choices and hierarchy

---

## 🛠️ Technology Stack

### Core Technologies

| Technology               | Version  | Purpose                              |
| ------------------------ | -------- | ------------------------------------ |
| **React**                | 17.0.1   | UI component library with Hooks      |
| **React Router DOM**     | 5.3.0    | Client-side routing and navigation   |
| **React Context API**    | Built-in | Global state management              |
| **js-cookie**            | 3.0.5    | Cookie management for authentication |
| **React Icons**          | 4.2.0    | SVG icon library                     |
| **React Loader Spinner** | 4.0.0    | Loading state indicators             |

### Development & Code Quality

| Tool            | Purpose                                 |
| --------------- | --------------------------------------- |
| **ESLint**      | Code linting with Airbnb style guide    |
| **Prettier**    | Code formatting and consistency         |
| **Husky**       | Git hooks for pre-commit quality checks |
| **lint-staged** | Run linters on staged files only        |

### Testing Framework

| Tool                            | Purpose                           |
| ------------------------------- | --------------------------------- |
| **Jest**                        | JavaScript testing framework      |
| **React Testing Library**       | Component testing utilities       |
| **@testing-library/user-event** | User interaction simulation       |
| **MSW**                         | API mocking for integration tests |

---

## 🏗️ Architecture & Design Patterns

### 1. **React Context API Pattern**

```javascript
// Centralized cart state management
<CartContext.Provider
  value={{
    cartList,
    addCartItem,
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeAllCartItems,
  }}
>
  <App />
</CartContext.Provider>
```

**Benefits:**

- Eliminates prop drilling
- Single source of truth for cart data
- Easy access from any component

### 2. **Protected Routes HOC**

```javascript
// Route guard implementation
const ProtectedRoutes = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (!jwtToken) return <Redirect to="/login" />
  return <Route {...props} />
}
```

**Benefits:**

- Centralized authentication logic
- Automatic redirect handling
- Reusable across routes

### 3. **Class Component State Management**

- Lifecycle methods for API calls (`componentDidMount`)
- Local state for UI states (loading, error, data)
- Method binding for event handlers
- Immutable state updates with functional setState

### 4. **Functional Components with Hooks**

- `useState` for form inputs and UI states
- Event-driven state updates
- Clean, declarative code

### 5. **API Integration Pattern**

- Async/await for readable asynchronous code
- Try-catch error handling
- Response status validation
- Data transformation (snake_case → camelCase)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: `^10.13 || 12 || 14 || 15`
- **npm**: `>=6` or **pnpm** (recommended)

### Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/avanishtatat/Restaurant-app-2.git
cd Restaurant-app-2
```

2. **Install Dependencies**

```bash
# Using npm
npm install

# Or using pnpm (faster)
pnpm install
```

3. **Start Development Server**

```bash
npm start
```

4. **Access Application**

```
http://localhost:3000
```

### Available Scripts

| Command            | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `npm start`        | Launches development server with hot reload on port 3000 |
| `npm run build`    | Creates optimized production build in `/build` directory |
| `npm test`         | Runs test suite in interactive watch mode                |
| `npm run lint`     | Checks code for ESLint violations                        |
| `npm run lint:fix` | Auto-fixes ESLint issues where possible                  |
| `npm run format`   | Formats code using Prettier configuration                |
| `npm run run-all`  | Runs tests and linting in parallel                       |

---

## 📁 Project Structure

```
Restaurant-app-2/
│
├── public/                          # Static assets
│   ├── index.html                  # HTML entry point
│   ├── manifest.json               # PWA configuration
│   ├── robots.txt                  # SEO crawler instructions
│   └── img/                        # Static images
│
├── src/                             # Application source code
│   ├── components/                 # Reusable UI components
│   │   ├── CartItem/              # Cart item display with controls
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── dish/                  # Dish card component
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Menu/                  # Menu category tabs
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── MenuCategory/          # Category dish list
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Navbar/                # Header with cart icon
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   └── ProtectedRoutes/       # Authentication HOC
│   │       └── index.js
│   │
│   ├── context/                    # Global state management
│   │   └── CartContext.js         # Cart state & operations
│   │
│   ├── custom-hooks/               # Reusable custom hooks
│   │   └── useFetch.js            # Generic data fetching hook
│   │
│   ├── pages/                      # Route-level components
│   │   ├── Login/                 # Authentication page
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Home/                  # Menu display page
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   └── Cart/                  # Shopping cart page
│   │       ├── index.js
│   │       └── index.css
│   │
│   ├── App.js                      # Root component with routing
│   ├── App.css                     # Global styles
│   ├── index.js                    # React DOM entry point
│   └── setupTests.js               # Jest configuration
│
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies & scripts
├── pnpm-lock.yaml                  # Dependency lock file
└── README.md                       # Project documentation
```

---

## 🔧 Core Functionalities

### 1. **Authentication Flow**

```
User Login → POST /login API → Receive JWT Token →
Store in Cookie → Redirect to Home →
Protected Routes Validate Token on Navigation
```

**Key Implementation:**

- Cookie-based session management with `js-cookie`
- Automatic redirect on failed authentication
- Persistent session across browser refreshes
- Token expiry set to 7 days

### 2. **Cart Management System**

**State Structure:**

```javascript
state = {
  cartList: [
    {
      dishId: 'string',
      dishName: 'string',
      quantity: number,
      dishPrice: number,
      dishImage: 'string',
      dishCurrency: 'string',
    },
  ],
}
```

**Operations:** | Operation | Functionality | |-----------|--------------| | `addCartItem(dish)` | Adds new dish or increments existing quantity | | `removeCartItem(id)` | Removes dish completely from cart | | `incrementCartItemQuantity(id)` | Increases dish quantity by 1 | | `decrementCartItemQuantity(id)` | Decreases quantity (auto-removes at 0) | | `removeAllCartItems()` | Clears entire cart |

**Smart Features:**

- **Duplicate detection**: Adding existing item increments quantity
- **Auto-cleanup**: Decrementing to 0 automatically removes item
- **Real-time badge**: Cart icon shows total item count
- **State persistence**: Maintains cart during navigation

### 3. **Menu Display & Filtering**

**Data Flow:**

```
API Call → Data Transformation → State Update → UI Render
```

**Features:**

- Dynamic category tabs generated from API data
- Active category highlighting with visual feedback
- Dish availability status indicators
- Add-on customization display ("Customizations available" badge)
- Responsive grid layout that adapts to screen size

### 4. **Protected Route Implementation**

```javascript
// Guards routes requiring authentication
<Switch>
  <Route exact path="/login" component={Login} />
  <ProtectedRoutes exact path="/" component={Home} />
  <ProtectedRoutes exact path="/cart" component={Cart} />
</Switch>
```

**Benefits:**

- DRY principle: Single authentication check
- Automatic login redirect for unauthorized users
- Scalable for multiple protected routes

---

## ✅ Code Quality & Best Practices

### Linting & Formatting

- **ESLint** with Airbnb Style Guide

  - Enforces consistent code style
  - Catches common errors and anti-patterns
  - Configured in `package.json`

- **Prettier** integration
  - Automatic code formatting
  - Consistent indentation and spacing
  - Runs on file save

### Git Hooks with Husky

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

- Pre-commit validation ensures code quality
- Prevents committing linting errors
- Auto-formats staged files before commit

### Best Practices Demonstrated

✅ Component-based architecture  
✅ Separation of concerns (Components/Pages/Context)  
✅ Reusable components and hooks  
✅ Consistent naming conventions (camelCase for JS, kebab-case for CSS)  
✅ Single Responsibility Principle  
✅ DRY (Don't Repeat Yourself) principle  
✅ Responsive design principles  
✅ Semantic HTML elements  
✅ Accessibility considerations  
✅ Error boundary implementation (optional enhancement)

---

## 🌐 API Integration

### API Endpoints

| Endpoint                                                            | Method | Purpose                                 |
| ------------------------------------------------------------------- | ------ | --------------------------------------- |
| `https://apis.ccbp.in/login`                                        | POST   | User authentication - Returns JWT token |
| `https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details` | GET    | Fetch complete restaurant menu data     |

### Data Transformation Example

```javascript
// API Response (snake_case) → UI-friendly format (camelCase)
const formattedData = data.map(restaurant => ({
  restaurantId: restaurant.restaurant_id,
  restaurantName: restaurant.restaurant_name,
  tableMenuList: restaurant.table_menu_list.map(menu => ({
    menuCategory: menu.menu_category,
    menuCategoryId: menu.menu_category_id,
    categoryDishes: menu.category_dishes.map(dish => ({
      dishId: dish.dish_id,
      dishName: dish.dish_name,
      dishPrice: dish.dish_price,
      dishImage: dish.dish_image,
      dishCurrency: dish.dish_currency,
      dishCalories: dish.dish_calories,
      dishDescription: dish.dish_description,
      dishAvailability: dish.dish_Availability,
      dishType: dish.dish_Type,
      addOn: dish.addonCat,
    })),
  })),
}))
```

### API States Management

```javascript
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
```

---

## 🚀 Future Enhancements

### Planned Features

- [ ] **Order History** - Track past orders with detailed status
- [ ] **Search Functionality** - Search dishes by name, category, or ingredients
- [ ] **Advanced Filters** - Filter by Veg/Non-veg, price range, ratings
- [ ] **User Profile** - Manage user details, addresses, and preferences
- [ ] **Payment Integration** - Stripe/Razorpay for online payments
- [ ] **Real-time Order Tracking** - WebSocket integration for live updates
- [ ] **Favorites** - Save and quick-access favorite dishes
- [ ] **Ratings & Reviews** - User feedback and rating system
- [ ] **Dark Mode** - Theme toggle for better accessibility
- [ ] **Multi-language Support** - i18n for internationalization

### Technical Improvements

- [ ] **TypeScript Migration** - Type safety across the entire application
- [ ] **Redux Toolkit** - More scalable state management for larger apps
- [ ] **React Query** - Advanced data fetching, caching, and synchronization
- [ ] **PWA Features** - Service workers, offline support, push notifications
- [ ] **E2E Testing** - Cypress or Playwright for end-to-end testing
- [ ] **Performance Optimization** - Code splitting, lazy loading, memoization
- [ ] **Storybook** - Component library documentation
- [ ] **CI/CD Pipeline** - GitHub Actions for automated testing and deployment
- [ ] **Docker Containerization** - Consistent development and production environments
- [ ] **Analytics Integration** - Google Analytics or Mixpanel for user insights

---

## 📸 Screenshots

### Mobile View

![Mobile Interface](https://res.cloudinary.com/dupvp9gj9/image/upload/v1688465518/Restaurant_page_movie-view_2_p6r4up.png) _Responsive mobile design with intuitive navigation_

### Desktop View

![Web Interface](https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png) _Full-featured desktop experience with enhanced UX_

---

## 🧪Testing

### Testing Strategy

- **Unit Tests**: Component isolation testing with React Testing Library
- **Integration Tests**: Context provider and API integration testing
- **E2E Scenarios**: User flow validation (optional with Cypress)
- **API Mocking**: MSW (Mock Service Worker) for reliable tests

### Running Tests

```bash
# Run all tests in watch mode
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in CI mode
npm test -- --ci
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style (ESLint + Prettier)
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Avanish Tiwari**

- 💼 Portfolio: _Coming Soon_
- 💼 LinkedIn: [linkedin.com/in/avanishtiwari18](https://www.linkedin.com/in/avanishtiwari18/)
- 🐙 GitHub: [@avanishtatat](https://github.com/avanishtatat)
- 📧 Email: avanisht.at.at@gmail.com

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official React docs
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - Code style standards
- **CCBP** - API provider for restaurant data
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Router](https://reactrouter.com/) - Routing solution
- **Open Source Community** - For amazing tools and libraries

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/avanishtatat/Restaurant-app-2) ![GitHub contributors](https://img.shields.io/github/contributors/avanishtatat/Restaurant-app-2) ![GitHub stars](https://img.shields.io/github/stars/avanishtatat/Restaurant-app-2?style=social) ![GitHub forks](https://img.shields.io/github/forks/avanishtatat/Restaurant-app-2?style=social)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ using React**

[Report Bug](https://github.com/avanishtatat/Restaurant-app-2/issues) · [Request Feature](https://github.com/avanishtatat/Restaurant-app-2/issues)

---

_Last Updated: February 2026_

</div>
