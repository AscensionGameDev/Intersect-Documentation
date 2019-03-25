<template>
  <router-link
    :class="isActive ? 'nav-link router-link-active' : 'nav-link'"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from './util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      console.log(this.$route);
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },

    isActive() {
      if ((this.link === '/api' && this.$route.path.startsWith('/api')) || (this.link === '/dev' && this.$route.path.startsWith('/dev')) || (this.link === '/' && !this.$route.path.startsWith('/api') && !this.$route.path.startsWith('/dev'))) {
        return true
      }
      return false
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
