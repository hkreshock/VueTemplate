<template>
    <q-page class="flex flex-center">
    </q-page>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

// animations
import 'animate.css';

export default defineComponent({
    name: 'Dashboard',
    components: {
    },
    setup() {
        const $store = useStore();

        return { };
    },
});
</script>
