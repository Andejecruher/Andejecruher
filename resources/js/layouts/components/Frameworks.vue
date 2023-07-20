<template>
  <div class="frameworks-content">
    <v-list lines="one" class="mb-0 mt-0">
      <v-list-item key="key1" class="item-list">
        <v-icon color="success" icon="mdi-check" size="small"></v-icon>
        Bootstrap, MUI, Vuetify
      </v-list-item>
      <v-list-item key="key1" class="item-list">
        <v-icon color="success" icon="mdi-check" size="small"></v-icon>
        Stylus, Sass, Less
      </v-list-item>
      <v-list-item key="key1" class="item-list">
        <v-icon color="success" icon="mdi-check" size="small"></v-icon>
        Git, GitHub, GitLab
      </v-list-item>
      <v-list-item key="key1" class="item-list">
        <v-icon color="success" icon="mdi-check" size="small"></v-icon>
        Laravel, Reacjs, Vue
      </v-list-item>
    </v-list>
  </div>
</template>

<style lang="scss">
.item-list {
  font-family: monospace, sans-serif;
  font-size: 0.8rem;
  margin-block: -10px 0;
  margin-inline: 20px 0;
}

.frameworks-content {
  margin-block: 20px;
  margin-block-end: 20px;
  margin-inline: 0;
}

.frameworks-content {
  .v-list-item {
    padding-block: 0.5rem;
    padding-inline: 0;
  }
}
</style>
