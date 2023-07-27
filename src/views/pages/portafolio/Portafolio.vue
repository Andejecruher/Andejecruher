<script setup>
import avatar1 from "@images/avatars/avatar-1.png"
import avatar2 from "@images/avatars/avatar-2.png"
import avatar3 from "@images/avatars/avatar-3.png"
import avatar4 from "@images/avatars/avatar-4.png"
import pages2 from "@images/pages/2.png"

const avatars = [avatar1, avatar2, avatar3, avatar4]

const navigationTab = ref("Frontend")

const tabItems = ["Todos", "Frontend", "Backend", "Full Stack", "Mobile"]
</script>

<template>
  <!-- 👉 Transactions -->
  <VCol cols="12">
    <VCard>
      <VCardItem>
        <VCardTitle>Portafolio</VCardTitle>
      </VCardItem>
      <VTabs v-model="navigationTab">
        <VTab
          v-for="item in tabItems"
          :key="item"
          :value="item"
        >
          {{ item }}
        </VTab>
      </VTabs>

      <VDivider />

      <!-- tabs content -->
      <VWindow v-model="navigationTab">
        <VWindowItem
          v-for="item in tabItems"
          :key="item"
          :value="item"
        >
          <VCardText>
            <VRow>
              <VCol
                cols="12"
                md="4"
                xs="12"
              >
                <VCard>
                  <VImg
                    :src="pages2"
                    size="250"
                  />

                  <VCardText class="position-relative">
                    <!-- User Avatar -->
                    <VAvatar
                      size="75"
                      class="avatar-center"
                      :image="avatar1"
                    />

                    <!-- Title, Subtitle & Action Button -->
                    <div class="d-flex justify-space-between flex-wrap pt-8">
                      <div class="me-2 mb-2">
                        <VCardTitle class="pa-0">
                          Robert Meyer
                        </VCardTitle>
                        <VCardSubtitle class="text-caption pa-0">
                          London, UK
                        </VCardSubtitle>
                      </div>
                      <VBtn>send request</VBtn>
                    </div>

                    <!--  Mutual Friends -->
                    <div class="d-flex justify-space-between align-center mt-4">
                      <span class="font-weight-medium">18 mutual friends</span>

                      <div class="v-avatar-group">
                        <VAvatar
                          v-for="avatar in avatars"
                          :key="avatar"
                          :image="avatar"
                        />
                      </div>
                    </div>
                  </VCardText>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
                xs="12"
              >
                <VCard>
                  <VImg :src="pages2" />

                  <VCardText class="position-relative">
                    <!-- User Avatar -->
                    <VAvatar
                      size="75"
                      class="avatar-center"
                      :image="avatar1"
                    />

                    <!-- Title, Subtitle & Action Button -->
                    <div class="d-flex justify-space-between flex-wrap pt-8">
                      <div class="me-2 mb-2">
                        <VCardTitle class="pa-0">
                          Robert Meyer
                        </VCardTitle>
                        <VCardSubtitle class="text-caption pa-0">
                          London, UK
                        </VCardSubtitle>
                      </div>
                      <VBtn>send request</VBtn>
                    </div>

                    <!--  Mutual Friends -->
                    <div class="d-flex justify-space-between align-center mt-4">
                      <span class="font-weight-medium">18 mutual friends</span>

                      <div class="v-avatar-group">
                        <VAvatar
                          v-for="avatar in avatars"
                          :key="avatar"
                          :image="avatar"
                        />
                      </div>
                    </div>
                  </VCardText>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
                xs="12"
              >
                <VCard>
                  <VImg :src="pages2" />

                  <VCardText class="position-relative">
                    <!-- User Avatar -->
                    <VAvatar
                      size="75"
                      class="avatar-center"
                      :image="avatar1"
                    />

                    <!-- Title, Subtitle & Action Button -->
                    <div class="d-flex justify-space-between flex-wrap pt-8">
                      <div class="me-2 mb-2">
                        <VCardTitle class="pa-0">
                          Robert Meyer
                        </VCardTitle>
                        <VCardSubtitle class="text-caption pa-0">
                          London, UK
                        </VCardSubtitle>
                      </div>
                      <VBtn>send request</VBtn>
                    </div>

                    <!--  Mutual Friends -->
                    <div class="d-flex justify-space-between align-center mt-4">
                      <span class="font-weight-medium">18 mutual friends</span>

                      <div class="v-avatar-group">
                        <VAvatar
                          v-for="avatar in avatars"
                          :key="avatar"
                          :image="avatar"
                        />
                      </div>
                    </div>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>

          <VCardText>
            <div class="text-center">
              <VPagination
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              />
            </div>
          </VCardText>
        </VWindowItem>
      </VWindow>
    </VCard>
  </VCol>
</template>

<script>
import CardNavigation from "../cards/card-basic/CardNavigation.vue"

export default {
  components: {
    CardNavigation,
  },
  data() {
    return {
      page: 1,
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
