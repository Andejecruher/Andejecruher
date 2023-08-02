<!-- eslint-disable vue/component-api-style -->
<!-- eslint-disable vue/no-restricted-class -->
<template>
  <!-- 👉 Transactions -->
  <VCol
    cols="12"
    md="12"
    sm="12"
    order="3"
  >
    <VRow>
      <!-- 👉 Apple Watch card -->
      <VCol
        v-for="(post, index) in posts"
        :key="index"
        lg="6"
        sm="6"
        md="6"
        xs="12"
        cols="12"
      >
        <VCard>
          <VImg
            :src="post.image"
            class="zoom-on-hover"
          />

          <VCardItem>
            <span>
              <VIcon icon="mdi-calendar" />
              {{ post.date }}
            </span>
            <span class="ml-2">
              /
            </span>

            <span class="ml-2">
              <VIcon icon="mdi-tag" />
              {{ post.category }}
            </span>
          </VCardItem>
  
          <VCardTitle>{{ post.title }}</VCardTitle>
          
          <VCardText>
            <p class="mb-0">
              {{ truncate(post.description, 140) }}
            </p>
          </VCardText>

          <VBtn
            block
            class="rounded-t-0"
          >
            Leer más ...
          </VBtn>
        </VCard>
      </VCol>
    </VRow>
    <div class="text-center mt-5 pagination">
      <VPagination
        v-model="page"
        rounded
        :length="10"
        :total-visible="5"
      />
    </div>
  </VCol>
</template>

<script>
import pages6 from '@images/pages/6.jpg'

export default {
  data() {
    return {
      page: 1,
      posts: [
        {
          image: pages6,
          date: '2023-08-01',
          category: 'Tech',
          title: 'Post 1',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          image: pages6,
          date: '2023-08-02',
          category: 'Science',
          title: 'Post 2',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          image: pages6,
          date: '2023-08-01',
          category: 'Tech',
          title: 'Post 1',
          description: 'This is the description of Post 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          image: pages6,
          date: '2023-08-02',
          category: 'Science',
          title: 'Post 2',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    }
  },
  methods: {
    truncate(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...'
      } else {
        return text
      }
    },
  },
}
</script>

<style scope>
.zoom-on-hover {
  transition: transform 0.3s; /* Transición para el efecto de aumento */
}

.zoom-on-hover:hover {
  transform: scale(1.1); /* Aumentar la imagen al hacer hover */
}

.pagination {
  position: relative;
  background: #2b2c40;
}
</style>
