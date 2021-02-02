<template>
  <div>
    <header id="header">
      <a class="logo" href="#">Industrious</a>
      <nav>
        <a href="#" @click="openMenu">Menu</a>
      </nav>
    </header>

    <nav id="menu" :class="{ show: isMenuOpen }">
      <ul class="links">
        <li
          v-for="link in links"
          :key="link.path"
          :class="{ active: $route.path === link.path }"
        >
          <router-link :to="link.path">{{ link.label }}</router-link>
        </li>
        <a href="#" class="close" @click="closeMenu" />
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      links: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Generic",
          path: "/generic",
        },
        {
          label: "Element",
          path: "/element",
        },
      ],
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style>
.active {
  font-weight: bold;
  color: goldenrod;
}
</style>
