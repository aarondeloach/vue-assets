<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const hasAccess = (access) => {
  return access === '*';
}


</script>

<template>

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <div class="mx-2">
        <a class="navbar-brand" href="#">Fixed navbar</a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">

        <ul class="navbar-nav me-auto mb-2 mb-md-0 mx-3 gap-3">

          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>

          <router-link class="nav-link" aria-current="page" to="/dev">Dev</router-link>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Components
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/table-using-component">Table using component</a></li>
              <li><a class="dropdown-item" href="/table-using-html">Table using html</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/error404">Error 404</a></li>
              <li><a class="dropdown-item" href="/error500">Error 500</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/login">Log in</a></li>

            </ul>
          </li>

        </ul>

        <div class="btn-group mx-2">
          <i class="bi bi-gear dropdown-toggle text-secondary no-arrow" data-bs-toggle="dropdown"
            data-bs-display="static" aria-expanded="false"></i>
          <ul class="dropdown-menu dropdown-menu-lg-end">
            <li><router-link class="dropdown-item" to="/">Your settings</router-link></li>
            <li><router-link class="dropdown-item" to="/">Account settings</router-link></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><router-link class="dropdown-item" to="/">Log out</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>


  <main class="container">
    <router-view />
  </main>
</template>


<style scoped>
body {
  /* min-height: 75rem; */
  padding-top: 4.5rem;
}

.navbar.bg-dark {
  background-color: #000000 !important;
}

.bi {
  font-size: 1.3em;
}

.no-arrow.dropdown-toggle::after {
  display: none;
}
</style>