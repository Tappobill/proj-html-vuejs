<template>
    <div>
        <div class="container-custom container-fluid">
            <div class="row">
                <h6 class="mb-4">WE LIKE WHAT WE DO</h6>
                <div class="col-8">
                    <div>
                        <h1 class="mb-4"><span>Team</span> of Experts</h1>
                        <p class="mb-5">Ethics and integrity are the base on which our professionals build their
                            careers. <br> They
                            are
                            fundamentals that become daily attitudes</p>
                    </div>
                    <div class="d-flex row g-5">
                        <div class="col-6 d-flex">
                            <div class="me-4">
                                <img src="../../../public/img/team-1.jpg" alt="Team1">
                            </div>
                            <div>
                                <h4 class="mb-4">David Cooper</h4>
                                <h6 class="mb-4">CTO & CO-FOUNDER</h6>
                                <div>
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="me-3" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6 d-flex">
                            <div class="me-4">
                                <img src="../../../public/img/team-3.jpg" alt="Team1">
                            </div>
                            <div>
                                <h4 class="mb-4">Oliver Jones</h4>
                                <h6 class="mb-4">CHIEF PROCUREMENT</h6>
                                <div>
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="me-3" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6 d-flex">
                            <div class="me-4">
                                <img src="../../../public/img/team-2.jpg" alt="Team1">
                            </div>
                            <div>
                                <h4 class="mb-4">Emma Lopez</h4>
                                <h6 class="mb-4">CHIEF MARKETING</h6>
                                <div>
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="me-3" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6 d-flex">
                            <div class="me-4">
                                <img src="../../../public/img/team-4.jpg" alt="Team1">
                            </div>
                            <div>
                                <h4 class="mb-4">T. Johnson</h4>
                                <h6 class="mb-4">CEO & PRESIDENT</h6>
                                <div>
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3" />
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="me-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 pb-5">
                    <div class="messaggio pt-5 ps-5 pb-4">
                        <h5>President Speech</h5>
                        <p>Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit. <br> Praesent ut lacinia diam.
                        </p>
                        <p>Vivamus efficitur et est quis <br> posuere. Nulla sollicitudin vulputate <br> dui, id pretium
                            tortor congue eu. <br> Integer aliquet justo eu quam <br> volutpat ullamcorper.</p>
                        <p>Duis ut hendrerit mauris. Phasellus <br> faucibus ut enim vel tincidunt. <br> Nunc venenatis
                            a dui et laoreet.</p>
                        <div class="d-flex justify-content-between">
                            <h6 class="mt-5">T.Johnson</h6>
                            <div class="mt-4 pe-4"><font-awesome-icon icon="fa-solid fa-quote-right" class="fa-2x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuintoComp'
}
</script>

<style lang="scss" scoped>
.container-custom {
    width: 60%;
    margin: auto;

    h1 {
        span {
            color: #098081;
            padding: 0 10px;
            background: rgba(#098081, 0.1);
        }
    }

    h1,
    h6 {
        font-weight: bold;
    }

    h6 {
        font-size: 10px;
        color: #098081;
    }
}

img {
    width: 105px;
}

.col-6 {
    h6 {
        color: #bcbdbd;
    }

    .me-3 {
        color: #048383;
        border: 1px solid rgba(#60a9ad, 0.1);
        border-radius: 50%;
        padding: 5px;
        width: 10%;
        background: rgba(#60a9ad, 0.3);
    }
}

.messaggio {
    border: 1px solid #048383;
    background-color: #048383;
    color: white;

    h6 {
        color: white;
    }
}

.fa-2x {
    color: rgba(#434747, 0.5);
}
</style>