## 🥇 Basic Level

In the Basic level, you will implement the core interface of application.

### Tasks

- [ ] Fetch all posts using axios
- [x] Implement posts design on main page.
- [x] Implement routing to detailed post page using dynamic routes.

## 🥈 Medium Level

### Tasks

- [ ] Create AuthContext that checks if the user is authenticated. If the user is not authenticated, they will be redirected to the login page.
- [ ] Create Login Page that sends request to 'https://dummyjson.com/auth/login' in order to get auth token.
- [ ] Rewrite all your axios requests by passing auth token (check Authorizing Resources 'https://dummyjson.com/docs#intro-auth').
      Example: 'https://dummyjson.com/auth/posts'

## 🥇 Hard Level

### Tasks

- [ ] Implement axios interceptor to pass auth token with requests.
- [ ] Handle API errors in axios interceptor response.
- [x] Create ThemeToggle button that changes the theme of your application from dark/light to light/dark using Context API
- [ ] Implement ADD, UPDATE, DELETE post features
