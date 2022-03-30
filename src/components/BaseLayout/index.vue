<template>
    <div class="baseLayout">
        <top-head />
        <router-view />
        <bottom-head />
    </div>
</template>

<script>
import header from '@/components/Header';
import bottom from '@/components/Bottom';
export default {
    components: {
        'top-head': header,
        'bottom-head': bottom
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
