<template>
    <div>
        <div class="container-custom">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h6 class="mb-5">INTRODUCTION VIDEO</h6>
                <h1 class="mb-4">Advisory <span class="green">Performance</span></h1>
                <p class="text-center mb-5">Financial executives need to review their stategies, operating models and
                    capabilities so that their <br>
                    areas can generate sound information for better decision making.</p>
            </div>
            <div class="position">
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <img src="../../../public/img/video-1.jpg" alt="video" class="w-75">
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center position-1">
                    <font-awesome-icon icon="fa-solid fa-play" class="play" />
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center position-2">
                    <font-awesome-icon icon="fa-solid fa-play" class="play" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecondoComp'
}
</script>

<style lang="scss" scoped>
.container-custom {
    width: 60%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}

.position {
    position: relative;

    .position-1 {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        color: #098081;
    }

    .position-2 {
        position: absolute;
        top: 18px;
        bottom: 0;
        right: 0;
        left: 0;
        color: white;
    }

    .play {
        width: 100px;
        height: 100px;
    }
}

h6 {
    color: #098081;
    font-weight: bold;
}

h1 {
    font-weight: bold;

    span {
        padding: 0 10px;
        background: rgba(#60a9ad, 0.3);
        color: #098081;
    }
}
</style>