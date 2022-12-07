<template>
    <div class="container-custom container-fluid">
        <div class="row">
            <div class="col-8">
                <div>
                    <h6 class="mb-4">SEND A MESSAGE</h6>
                    <h1 class="mb-4">Get in <span>Touch</span></h1>
                    <p>We will respond to your message as soon as possible.</p>
                </div>
                <div>
                    <div class="d-flex justify-content-between">
                        <input class="w-50 me-4 pe-4 mb-3 p-1" type="text" placeholder="Name">
                        <input class="w-50  pe-4 mb-3 p-1" type="text" placeholder="Email">
                    </div>
                    <div class="d-flex justify-content-between">
                        <input class="me-4 w-50 pe-4 mb-3 p-1" type="text" placeholder="Phone">
                        <input class="w-50 pe-4 mb-3 p-1" type="text" placeholder="More Info">
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <textarea name="testo" cols="140" rows="8" placeholder="Messaggio" class="p-1 mb-3"></textarea>
                    </div>
                    <button class="butt-git ">SEND</button>
                </div>
            </div>
            <div class="col-4 ps-5">
                <div>
                    <h4 class="mb-4">Example Inc.</h4>
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit.</p>
                    <p class="mb-5">Praesent diam lacus, dapibus sed imperdiet <br> consectetur.</p>
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
                <button class="butt-rm">VIEW MAP</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OttavoComp'
}
</script>

<style lang="scss" scoped>
.container-custom {
    width: 60%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;

    h1 {
        span {
            color: #098081;
            padding: 0 10px;
            background: rgba(#098081, 0.2);
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

    p {
        color: #bcbdbd;
    }

    .butt-git {
        width: 80px;
        background-color: #52babb;
        color: white;
        border-radius: 3px;
        border: #52babb;
        padding: 5px 0px;
    }

    .butt-git:hover {
        background-color: transparent;
        color: #52babb;
        border: 1px solid #52babb;
    }

    .butt-rm {
        width: 120px;
        background-color: transparent;
        color: #60a9ad;
        border-radius: 7px;
        border: 1px solid #52babb;
    }

    .butt-rm:hover {
        background-color: #52babb;
        color: white;
        border: 1px solid #52babb;
    }

    .icon {
        color: #048383;
        border: 1px solid rgba(#60a9ad, 0.1);
        border-radius: 50%;
        padding: 5px;
        width: 5%;
        background: rgba(#60a9ad, 0.3);
        margin-right: 10px;
    }

    .example {
        color: #048383;
    }

}
</style>