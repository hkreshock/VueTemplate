<template>
    <q-page class="flex flex-center">
      <Table></Table>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Table from '../components/pages/dataTable';

export default defineComponent({
    name: 'DataTable',
    components: {
        Table,
    },
    setup() {
        return { };
    },
});
</script>

<style scoped>
</style>
