<template>
  <div>
    <!-- Título alineado a la izquierda -->
    <v-row class="mt-3">
      <v-col cols="12" md="6" sx="12">
        <div>
          <h2 class="title ml-5 text-white">Educación</h2>
          <v-timeline side="start" align="start">
            <v-timeline-item
              v-for="(item, i) in education"
              :key="i"
              dot-color="primary"
              icon="mdi-school"
              fill-dot
            >
              <v-card class="mx-auto">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-card-item>
                  <v-card-title>
                    <v-row>
                      <v-col cols="12" md="6" xs="6">
                        <span class="text-h6">{{ item.name }}</span>

                        <v-icon
                          color="error"
                          icon="mdi-circle-medium"
                          size="small"
                        ></v-icon>
                      </v-col>
                      <v-col cols="12" md="6" xs="6">
                        <div class="dateChip">
                          <v-chip-group>
                            <v-chip>{{ item.date }}</v-chip>
                          </v-chip-group>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-title>

                  <v-card-subtitle>
                    <span class="me-1">{{ item.subname }}</span>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <div>
                    {{ item.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <!-- <v-card-actions class="contact-button-container">
                  <v-btn color="primary" variant="outlined">
                    {{ item.titleBtn }}
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
      <v-col cols="12" md="6" sx="12">
        <div>
          <h2 class="title ml-5 text-white">Experiencia Laboral</h2>
          <v-timeline side="start" align="start">
            <v-timeline-item
              v-for="(item, i) in works"
              :key="i"
              dot-color="primary"
              icon="mdi-briefcase"
              fill-dot
            >
              <v-card class="mx-auto">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-card-item>
                  <v-card-title>
                    <v-row>
                      <v-col cols="12" md="6" xs="6">
                        <span class="text-h6">{{ item.name }}</span>

                        <v-icon
                          color="error"
                          icon="mdi-circle-medium"
                          size="small"
                        ></v-icon>
                      </v-col>
                      <v-col cols="12" md="6" xs="6">
                        <div class="dateChip">
                          <v-chip-group>
                            <v-chip>{{ item.date }}</v-chip>
                          </v-chip-group>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-title>

                  <v-card-subtitle>
                    <span class="me-1">{{ item.subname }}</span>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <div>
                    {{ item.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <!-- <v-card-actions class="contact-button-container">
                  <v-btn color="primary" variant="outlined">
                    {{ item.titleBtn }}
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
    education: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.title {
  font-size: 24px;
  margin-block-end: 16px;
  text-align: start;
}

.card {
  margin-block-end: 16px;
}

.column-content {
  padding: 16px;
  background-color: #f0f0f0;
  text-align: center;
}

.subtitle {
  font-size: 20px;
}

.description {
  font-size: 16px;
}
</style>
