<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <!-- Titulo  -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Junio</span>
            <span class="mx-2 fw-light">2023, Jueves</span>
        </div>

        <div class="entry-description">
            Dolor cillum quis est aliquip sint adipisicing culpa veniam. Anim quis duis reprehenderit eiusmod laboris eu in incididunt esse velit excepteur tempor. Nostrud velit officia ullamco quis consectetur amet sit in ut labore magna. Qui irure aliqua ullamco ullamco qui eu. Mollit laboris voluptate sunt exercitation labore in magna anim eu. Ut magna nostrud officia ipsum quis non nisi mollit proident ex enim eiusmod irure.
        </div>
    </div>
</template>

<style lang="scss"  scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }
    }

    .entry-description{
        font-size: 12px;
    }
</style>
{{ account.url}}/api/content/spaces/inversiones/typestabla-valores-extranjeros/entries?sort_by=meta.name&per_page=20&order=asc