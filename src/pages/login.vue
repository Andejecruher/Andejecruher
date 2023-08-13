<script setup>
import { useAuthStore } from "@/stores/auth";
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const email = ref("");
const password = ref("");
const remember = ref(false);
const loading = ref(false);

const isPasswordVisible = ref(false);

const login = async () => {
  try {
    // Mostrar el spinner de carga
    loading.value = true;
    await authStore.login(email.value, password.value, remember.value);
    // Usar SweetAlert2 para mostrar un mensaje de éxito
    await Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: "¡Bienvenido!",
    });
    // Redireccionar a la página de admin
    await router.push("/admin");
    loading.value = false;
  } catch (error) {
    // Ocultar el spinner de carga
    loading.value = false;
    // Usar SweetAlert2 para mostrar un mensaje de error
    await Swal.fire({
      icon: "error",
      title: "Error de inicio de sesión",
      text: "Credenciales inválidas. Inténtalo de nuevo.",
    });
  }
};
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <VCardTitle class="text-2xl font-weight-bold">
          Andejecruher
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">Bienvenido! 👋🏻</h5>
        <p class="mb-0">Ingresa tus datos para continuar</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div
                class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
              >
                <VCheckbox v-model="remember" label="Recuerdame" />

                <RouterLink class="text-primary ms-2 mb-1" to="forgot-password">
                  Olvidaste tu contraseñas?
                </RouterLink>
              </div>

              <!-- login button -->
              <VBtn block type="submit" :disabled="loading"> Login </VBtn>
            </VCol>

            <!-- create account -->
            <VCol cols="12" class="text-center text-base">
              <span>Nuevo en la plataforma?</span>
              <RouterLink class="text-primary ms-2" to="/register">
                Crea una cuenta
              </RouterLink>
            </VCol>

            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol cols="12" class="text-center">
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
