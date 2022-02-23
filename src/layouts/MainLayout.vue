<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>
    <Drawer :essentialLinks="linkList"></Drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue';
import Drawer from 'components/navigation/SiteNavDrawer.vue';
import Header from '../components/navigation/SiteHeader.vue';

export default defineComponent({
    name: 'MainLayout',

    components: {
        Header,
        Drawer,
    },

    setup() {
        const linkList = [
            {
                title: 'Welcome',
                caption: '',
                icon: 'mdi-human-greeting',
                link: '/',
            },
            {
                title: 'Data Table',
                caption: '',
                icon: 'mdi-table',
                link: '/dataTable',
            },
        ];
        return { linkList };
    },
});
</script>
