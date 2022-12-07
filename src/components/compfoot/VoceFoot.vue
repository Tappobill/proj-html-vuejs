<template>
    <div class="col-3">
        <div class="sfondo">
            <ul><span>{{ title }}</span>
                <li v-for="(voceLiFoot, indexLiFoot) in voci" :key="indexLiFoot">
                    <font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" />
                    {{ voceLiFoot }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VoceFoot',
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
* {
    list-style-type: none;
}

p {
    color: #bcbdbd;
}

ul {
    list-style-type: none;
    line-height: 35px;

    span {
        font-size: 25px;
        font-weight: bold;
    }

    li {
        color: #bcbdbd;
    }
}

.sfondo {
    background: rgba(#676969, 0.1);
    padding: 30px;
    border-radius: 10px;
}
</style>