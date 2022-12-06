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
                    <div class="col-3">
                        <div class="sfondo">
                            <ul><span>About</span>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> The Company</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Istitutional</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Social & Events
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Innovation</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Environment</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Technology</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="sfondo">
                            <ul><span>Services</span>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Audit & Assurance
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Financial Advisory
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Analytics M&A</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Middle Marketing
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Legal Consulting
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Regulatory Risk
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="sfondo">
                            <ul><span>Support</span>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Responsibility
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Terms of Use</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> About Cookies</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Privacy Policy
                                </li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Accessibility</li>
                                <li><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" /> Information</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="bg-black">
            <div class="d-flex justify-content-between align-items-center foot-finale container-fluid p-4">
                <div>Enjoy the low price. We are tracking any intention of piracy</div>
                <div><font-awesome-icon icon="fa-regular fa-copyright" /> 2020 NEXGEN is Proudly Powered by <span>Codings</span>.</div>
            </div>
        </div>

    </footer>
</template>

<script>
export default {

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
    span{
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

    .butt-rm:hover{
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
}

.sfondo {
    background: rgba(#676969, 0.1);
    padding: 30px;
    border-radius: 10px;
}
</style>