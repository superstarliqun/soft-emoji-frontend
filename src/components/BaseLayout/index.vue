<template>
    <div class="baseLayout">
        <top-head />
        <router-view />
    </div>
</template>

<script>
import header from '@/components/Header';
export default {
    components: {
        'top-head': header
    }
};
</script>

<style lang="scss" scoped>
.baseLayout {
    height: 100%;
    .main-content {
        height: 100%;
    }
}
</style>
