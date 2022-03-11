<template>
    <div class="baseLayout">
        <top-head />
        <div class="main-content flex">
            <main class="page-main flex-1">
                <router-view />
            </main>
        </div>
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
    // padding-top: 30px;
    .main-content {
        height: 100%;
    }
}
</style>
