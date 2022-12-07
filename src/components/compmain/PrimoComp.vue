<template>
    <div class="text-white slider text-center">
        <div>
            <h1>Financial Risk</h1>
            <p class="text-center">The right outcomes depend on continuos rigor in governance. models, and <br>
                processes
                across the finance function.</p>
        </div>
        <div>
            <button class="p-1 me-3 butt-git">GET IN TOUCH</button>
            <button class="p-1 butt-rm">READ MORE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrimoComp'
}
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    height: 1000px;
    background-image: url(../../../public/img/bg-2.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.butt-git {
    width: 120px;
    background-color: #52babb;
    color: white;
    border-radius: 7px;
    border: #52babb;
}

.butt-git:hover {
    background-color: transparent;
    border: 1px solid #52babb;
}

.butt-rm {
    width: 120px;
    background-color: transparent;
    color: white;
    border-radius: 7px;
    border: 1px solid #52babb;
}

.butt-rm:hover {
    background-color: #52babb;
}
</style>