<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
</script>

<template>
  <VCard>
    <Vrow>
      <VCol md="8" />
      <VCol md="4">
        <VBtn
          append-icon="mdi-plus-circle"
          variant="outlined"
        >
          Agregar usuario
        </VBtn>
      </VCol>
    </Vrow>
    <VTable>
      <thead>
        <tr>
          <th class="text-uppercase">
            Nombre
          </th>
          <th>
            Descripcion
          </th>
          <th>
            Acciones
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>
            {{ item.dessert }}
          </td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            <div>
              <VButton
                color="primary"
                class="mx-1"
                @click="editItem(item)"
              >
                <VIcon>mdi-pencil</VIcon>
              </VButton>
              <VButton
                color="error"
                class="mx-1"
                @click="deleteItem(item)"
              >
                <VIcon>mdi-delete</VIcon>
              </VButton>  
            </div>
          </td>
        </tr>
      </tbody>
    </VTable>
    <Vrow>
      <VCol
        cols="12"
        md="6"
        offset-md="3"
      >
        <VPagination
          v-model="page"
          :length="15"
          :total-visible="7"
        />
      </VCol>
    </Vrow>
  </VCard>
</template>
