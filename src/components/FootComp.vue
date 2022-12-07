<template>
    <footer>
        <div class="text-white container-padre">
            <div class="container-custom container-fluid">
                <div class="row">
                    <div class="col-3">
                        <div>
                            <div class="mb-4">Logo</div>
                            <p class="mb-4">A Functional HTML Template <br> for Corporate & Business.</p>
                        </div>
                        <div class="mb-4 d-flex align-intems-center">
                            <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                            <div class="example">+1(305) 1234-5678</div>
                        </div>
                        <div class="mb-4 d-flex align-intems-center">
                            <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
                            <div class="example">hello@example.com</div>
                        </div>
                        <div class="mb-5 d-flex align-intems-center">
                            <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
                            <div class="example">Main Avenue, 987</div>
                        </div>
                        <button class="butt-rm">GET IN TOUCH</button>
                    </div>
                    <voce-foot v-for="(voceFoot, indexFoot) in vociFoot" :key="indexFoot" :title="voceFoot.title"
                        :voci="voceFoot.voci" />
                </div>
            </div>
        </div>
        <div class="bg-black">
            <div class="d-flex justify-content-between align-items-center foot-finale container-fluid p-4">
                <div>
                    Enjoy the low price. We are tracking any intention of piracy
                </div>
                <div><font-awesome-icon icon="fa-regular fa-copyright" /> 2020 NEXGEN is Proudly Powered by
                    <span>Codings</span>.
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
import VoceFoot from './compfoot/VoceFoot.vue'
export default {
    components: { VoceFoot },
    name: 'FootComp',
    data() {
        return {
            vociFoot: [
                {
                    title: "About",
                    voci: ["The Company", "Istitutional", "Social & Events", "Innovation", "Environment", "Technology"]
                },
                {
                    title: "Services",
                    voci: ["Audit & Assurance", "Financial Advisory", "Analytics M&A", "Middle Marketing", "Legal Consulting", "Regulatory Risk"]
                },
                {
                    title: "Support",
                    voci: ["Responsibility", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container-padre {
    background-image: url(../../public/img/bg-7.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.foot-finale {
    width: 60%;
    margin: auto;
    color: #bcbdbd;

    span {
        color: #52babb;
    }
}

.container-custom {
    width: 60%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;

    .butt-rm {
        background-color: transparent;
        color: white;
        border-radius: 7px;
        border: 1px solid #52babb;
        padding: 10px 20px;
    }

    .butt-rm:hover {
        background-color: #52babb;
    }

    .icon {
        padding: 5px;
        margin-right: 10px;
        color: #bcbdbd;
    }

    .example {
        color: #bcbdbd
    }

    p {
        color: #bcbdbd;
    }
}
</style>