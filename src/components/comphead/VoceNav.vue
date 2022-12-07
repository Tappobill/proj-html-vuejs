<template>
    <div class="me-4">
        <ul class="position-relative">{{ title }} <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
            <li class="position-absolute">
                <ul>
                    <li v-for="(voceLiNav, indexLiNav) in voci" :key="indexLiNav">{{ voceLiNav }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'VoceNav',
    props: {
        title: {
            type: String,
            required: true
        },
        voci: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    margin: auto;
    padding: 0;
}

.me-4:hover {
    color: #52babb;
    cursor: pointer;
}

ul:hover li {
    display: block;
    color: white;
}

li {
    display: none;
    margin: auto;
}
</style>