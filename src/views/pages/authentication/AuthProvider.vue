<script setup>
import { useTheme } from 'vuetify'

const { global } = useTheme()

const authProviders = [
  {
    icon: 'bxl-facebook',
    color: '#4267b2',
    colorInDark: '#4267b2',
    url: 'https://www.facebook.com/andejecruher',
  },
  {
    icon: 'bxl-twitter',
    color: '#1da1f2',
    colorInDark: '#1da1f2',
    url: 'https://twitter.com/andejecruher',
  },
  {
    icon: 'bxl-github',
    color: '#272727',
    colorInDark: '#fff',
    url: 'https://github.com/Andejecruher',
  },
  {
    icon: 'bxl-instagram',
    color: '#db4437',
    colorInDark: '#db4437',
    url: 'https://www.instagram.com/andejecruher/',
  },
]

const openLinkInNewTab = url => {
  window.open(url, '_blank')
}
</script>

<template>
  <VBtn
    v-for="link in authProviders"
    :key="link.icon"
    :icon="link.icon"
    variant="text"
    :color="global.name.value === 'dark' ? link.colorInDark : link.color"
    @click="openLinkInNewTab(link.url)"
  />
</template>
