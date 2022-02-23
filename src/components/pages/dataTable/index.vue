<template>
    <div class='row justify-center items-start content-start' style='width: 80%'>
        <div class='col-12 q-mb-md'>
          <q-table
          title="Employees"
          :rows="mockRows"
          :columns="mockColumns"
          row-key="name"
          />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DataTablePage',
    components: {
    },
    setup() {
        return {
            mockRows: [
                {
                    name: 'Hunter Kreshock',
                    role: 'developer',
                    age: 23,
                    company: 'FreightVana',
                },
                {
                    name: 'Justin Ceccarelli',
                    role: 'accountant',
                    age: 32,
                    company: 'freightVana',
                },
                {
                    name: 'kyle henderson',
                    role: 'Sandwich Artist',
                    age: 29,
                    company: 'Subway',
                },
                {
                    name: 'Don everhart',
                    role: 'facilities manager',
                    age: 31,
                    company: 'payless',
                },
                {
                    name: 'nelson Mandela',
                    role: 'influencer',
                    age: 65,
                    company: 'Instagram',
                },
            ],
            mockColumns: [
                {
                    name: 'name',
                    align: 'left',
                    label: 'Name',
                    field: 'name',
                    sortable: true,
                },
                {
                    name: 'company',
                    align: 'right',
                    label: 'Company',
                    field: 'company',
                    sortable: true,
                },
                {
                    name: 'role',
                    align: 'center',
                    label: 'Role',
                    field: 'role',
                    sortable: true,
                },
                {
                    name: 'age',
                    align: 'center',
                    label: 'Age',
                    field: 'age',
                    sortable: true,
                },
            ],
        };
    },
});

</script>

<style scoped>
</style>
