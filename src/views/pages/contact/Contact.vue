<template>
  <!-- 👉 Transactions -->
  <VCol
    cols="12"
    md="12"
    sm="12"
    order="3"
  >
    <FormContact />
    <ContactFormCard />
  </VCol>
</template>

<script>
import FormContact from "../../../components/FormContact.vue"

export default {
  components: {
    FormContact,
  },
}
</script>

