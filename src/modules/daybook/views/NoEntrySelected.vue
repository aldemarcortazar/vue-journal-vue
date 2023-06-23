<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fab: defineAsyncComponent(() => import('./../components/Fab.vue')),
    }
}

</script>

<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <Fab 
        icon="fa-plus"
    />
</template>


<style lang="scss" scoped>
div{
    height: 100%;
}
</style>