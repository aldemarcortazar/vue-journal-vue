<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
    name: 'Entry-view',
    components: {
        Fab: defineAsyncComponent(() => import('./../components/Fab.vue')),
    }
}
</script>

<template>
    <div class="entry-title d-flex justify-content-center">

        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>

        <div>
            <button
                class="btn btn-danger mx-2"
            >
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedio hoy?"></textarea>
    </div>

    <Fab 
        icon="fa-save"
    />

    <img 
        src="https://media.istockphoto.com/id/1430788652/es/foto/el-r%C3%ADo-barneveldse-beek-fluye-a-trav%C3%A9s-de-la-zona-agr%C3%ADcola-cerca-del-pueblo-de-stoutenburg.jpg?s=1024x1024&w=is&k=20&c=hxmAhxqLwrz81iZJxiKZnMRbjBrOGJSKWRUC4xnQjLM=" 
        alt="Entry Picture"
        class="img-thumbnail"
    >
</template>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>