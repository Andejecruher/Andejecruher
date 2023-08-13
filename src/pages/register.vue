<script setup>
import { useAuthStore } from "@/stores/auth";
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const form = ref({
  name: "",
  email: "",
  password: "",
  privacyPolicies: false,
});
const loading = ref(true);

const isPasswordVisible = ref(false);

const register = async () => {
  try {
    // Mostrar el spinner de carga
    loading.value = false;
    // Registrar el usuario
    await authStore.register(form.value);
    // Usar SweetAlert2 para mostrar un mensaje de éxito
    await Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "¡Bienvenido!",
    });
    // Redireccionar a la página de inicio

    await router.push("/login");
    loading.value = true;
  } catch (error) {
    // Ocultar el spinner de carga
    loading.value = true;
    // Usar SweetAlert2 para mostrar un mensaje de error
    await Swal.fire({
      icon: "error",
      title: "Error de registro",
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
        <h5 class="text-h5 mb-1">Registra tus datos 🚀</h5>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="register">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField
                v-model="form.name"
                autofocus
                label="Username"
                placeholder="Johndoe"
              />
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                placeholder="johndoe@email.com"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox
                  id="privacy-policy"
                  v-model="form.privacyPolicies"
                  inline
                />
                <VLabel for="privacy-policy" style="opacity: 1">
                  <span class="me-1">Yo acepto</span>
                  <a href="javascript:void(0)" class="text-primary"
                    >los terminos de privacidad y politica</a
                  >
                </VLabel>
              </div>

              <VBtn block type="submit" :disabled="!loading">
                Crear Cuenta
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol cols="12" class="text-center text-base">
              <span>Ya cuentas con una cuenta?</span>
              <RouterLink class="text-primary ms-2" to="/login">
                Iniciar sesion ahora
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
