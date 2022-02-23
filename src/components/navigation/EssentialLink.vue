<template>
    <router-link
        :to="navigationObject"
        v-slot="{ isActive }"
    >
        <q-item clickable :class="isActive ? 'navItemActive' : 'navItemInactive'">
            <q-item-section class="col-shrink" v-if="icon" avatar>
                <q-icon
                    :name="icon"
                    :color="isActive ? 'primary' : 'white'"
                    size="sm"
                />
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-body2">{{ title }}</q-item-label>
            </q-item-section>
        </q-item>
    </router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EssentialLink',
    props: {
        title: {
            type: String,
            required: true,
        },
        caption: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '/',
        },
        icon: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const base = { path: props.link };

        const navigationObject = base;

        return {
            navigationObject,
        };
    },
});
</script>

<style scoped>
</style>
