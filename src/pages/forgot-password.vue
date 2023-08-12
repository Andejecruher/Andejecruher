<script setup>
import { useAuthStore } from "@/stores/auth";
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const loading = ref(false);
const email = ref("");

const forgotPassword = async () => {
  try {
    // Mostrar el spinner de carga
    loading.value = false;
    // Registrar el usuario
    await authStore.forgotPassword(email.value);
    // Usar SweetAlert2 para mostrar un mensaje de éxito
    await Swal.fire({
      icon: "success",
      title: "Recuperación exitosa",
      description:
        "Se ha enviado un correo electrónico a tu bandeja de entrada",
      text: "¡Bienvenido!",
    });
    // Redireccionar a la página de inicio

    await router.push("/login");
  } catch (error) {
    // Ocultar el spinner de carga
    loading.value = true;
    // Usar SweetAlert2 para mostrar un mensaje de error
    await Swal.fire({
      icon: "error",
      title: "Error de recuperación",
      text: "Credenciales inválidas. Inténtalo de nuevo.",
    }).finally(() => {
      // Ocultar el spinner de carga
      loading.value = true;
      // Limpiar el formulario
      email.value = "";
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
        <h5 class="text-h5 mb-1">Recuperar contraseña! 👋🏻</h5>
        <p class="mb-0">Ingresa tu correo electronico para continuar</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="forgotPassword">
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
            <VCol cols="12">
              <!-- login button -->
              <VBtn block type="submit"> Recuperar contraseña </VBtn>
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
