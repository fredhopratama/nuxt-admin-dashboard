<template>
  <aside class="sidebar">
    <h2 class="logo">Admin</h2>

    <nav>
      <NuxtLink to="/">Dashboard</NuxtLink>
      <NuxtLink to="/users">Customers</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </nav>
  </aside>
</template>


<style scoped>
.sidebar {
  width: 220px;
  background: #343a40;
  color: white;
  padding: 20px;
}

.logo {
  margin-bottom: 24px;
  font-size: 18px;
}

nav a {
  display: block;
  color: #c2c7d0;
  text-decoration: none;
  padding: 10px 0;
}

nav a:hover {
  color: white;
}
</style>
