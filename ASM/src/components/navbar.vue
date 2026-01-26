<template>
  <nav class="navbar navbar-expand-lg navbar-danger bg-danger">
    <div class="container">
      <router-link class="navbar-brand" to="/">Bài Viết</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/createdetail">Tạo bài viết</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
