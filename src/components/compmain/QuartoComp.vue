<template>
    <div class="container-padre mb-5">
        <div class="container-custom text-white container-fluid">
            <div>
                <div>
                    <h6 class="mb-4">OUR BUSINESS AREAS</h6>
                    <h1 class="mb-4">Excellence in <span>Services</span></h1>
                </div>
                <div class="d-flex justify-content-between">
                    <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a
                        team of <br> experienced and renowned professionals. These are some options that you can hire.
                    </p>
                    <div>
                        <button class="pe-3 ps-3 py-1">SEE ALL</button>
                    </div>
                </div>
            </div>
            <div class="row g-5 pb-5">
                <div class="col-4" v-for="(card, indexCard) in arrayCard" :key="indexCard">
                    <div class="p-5">
                        <div class="mb-4 d-flex justify-content-between">
                            <font-awesome-icon :icon="card.icon" class="fa-3x" />
                            <font-awesome-icon icon="fa-solid fa-arrow-right" class="fa-2x" />
                        </div>
                        <h4 class="mb-3">{{ card.title }}</h4>
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuartoComp',
    data() {
        return {
            arrayCard: [
                {
                    icon: "fa-solid fa-network-wired",
                    title: "Audit & Assurance",
                    description: "Lorem inpsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    icon: "fa-solid fa-briefcase",
                    title: "Financial Advisory",
                    description: "Lorem inpsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    icon: "fa-solid fa-chart-simple",
                    title: "Analytics and M&A",
                    description: "Lorem inpsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    icon: "fa-solid fa-plane-up",
                    title: "Middle Marketing",
                    description: "Lorem inpsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    icon: "fa-solid fa-globe",
                    title: "Legal Consulting",
                    description: "Lorem inpsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    icon: "fa-solid fa-folder-open",
                    title: "Regulary Risk",
                    description: "Lorem inpsum dolor sit amet consectetur adipiscing elit."
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container-padre {
    background-color: #111117;
    padding-top: 100px;

    .container-custom {
        width: 60%;
        margin: auto;
    }

    h1,
    h6 {
        font-weight: bold;
    }

    h6 {
        font-size: 10px;
        color: #098081;
    }

    h1 {
        span {
            padding: 0 10px;
            background: rgba(#098081, 0.1);
        }
    }

    button {
        width: 120px;
        background-color: transparent;
        color: white;
        border-radius: 7px;
        border: 1px solid #52babb;
    }

    button:hover {
        background-color: #52babb;
    }
}

.col-4 {
    .p-5 {
        background-color: #1d2528;
    }
}

.fa-3x,
.fa-2x {
    color: #098081;
}

.arrow {
    border: 1px solid #098081;
    border-radius: 50%;
    padding: 5px;
    background-color: #098081;
}

.p-5:hover .fa-2x {
    border: 1px solid #098081;
    border-radius: 50%;
    padding: 5px;
    background-color: #098081;
    color: white;
}

.p-5:hover .fa-3x {
    color: white;
}
</style>