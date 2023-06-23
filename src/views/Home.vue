<script>
export default {
    methods: {
        goToDaybook(){
            this.$router.push({ name: 'no-entry' });
        }
    }
}
</script>

<template>
    <div class="home">
        <img src="../assets/vue.svg" alt="Vue Logo">

        <h1>Hola mundo</h1>

        <button 
            @click="goToDaybook" 
            class="btn btn-primary"
        >
            Primary
        </button>
        <button 
            @click="goToDaybook" 
            class="btn btn-secondary"
        >
            Secondary
        </button>
        <button 
            @click="goToDaybook" 
            class="btn btn-success"
        >
            Success
        </button>
    </div>
</template>
