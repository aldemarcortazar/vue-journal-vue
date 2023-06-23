<script lang="ts" scoped>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<template>
    <button class="button-fab btn btn-primary">
        <i 
            class="fa fa-2x "
            :class="icon"    
        ></i>
    </button>
</template>

<style lang="scss" scoped>
.button-fab{
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}
</style>