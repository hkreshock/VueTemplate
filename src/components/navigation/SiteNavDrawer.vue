<template>
    <q-drawer
      v-model="open"
      :width="200"
      class="lvl-7"
      show-if-above
      behavior="desktop"
      style="position: sticky; top: 50px"
    >
        <div class="row justify-center full-height align-center">
            <div class="col-12">
              <q-list>
                <EssentialLink v-for="(link, index) in essentialLinks" :key="`link${index}`" v-bind="link"></EssentialLink>
              </q-list>
            </div>
        </div>
    </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from './EssentialLink.vue';

export default defineComponent({
    name: 'SiteNavDrawer',
    props: {
        essentialLinks: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    components: {
        EssentialLink,
    },
    setup() {
        const open = ref(true);
        return {
            open,
        };
    },
});
</script>

<style scoped>
</style>
