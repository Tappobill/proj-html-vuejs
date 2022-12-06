<template>
    <div class="container-padre">
        <div class="container-custom container-fluid">
            <div>
                <div>
                    <h6 class="pt-5">OUR EDITORIAL CONTENT</h6>
                    <h1>Latest <span>News</span></h1>
                </div>
                <div class="d-flex justify-content-between pb-5">
                    <p>Every week we publish content about what is best in the business world.</p>
                    <button>SEE ALL</button>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <img src="../../../public/img/news-1.jpg" alt="">
                    <div class="hover-1 d-flex justify-content-between">
                        <div class="user"><font-awesome-icon icon="fa-regular fa-user" /> Andrea Miller</div>
                        <div class="day"><font-awesome-icon icon="fa-solid fa-clock" /> 2 Days Ago</div>
                    </div>
                    <div class="frase">
                        <p class="text-center">Increasing creativity is possible for everyone</p>
                    </div>
                    <div class="hover-2">
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div class="col-4">
                    <img src="../../../public/img/news-2.jpg" alt="">
                    <div class="hover-1 d-flex justify-content-between">
                        <div class="user"><font-awesome-icon icon="fa-regular fa-user" /> Andrea Miller</div>
                        <div class="day"><font-awesome-icon icon="fa-solid fa-clock" /> 2 Days Ago</div>
                    </div>
                    <div class="frase">
                        <p class="text-center">Because market research is part of the business plan</p>
                    </div>
                    <div class="hover-2">
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div class="col-4">
                    <img src="../../../public/img/news-3.jpg" alt="">
                    <div class="hover-1 d-flex justify-content-between">
                        <div class="user"><font-awesome-icon icon="fa-regular fa-user" /> Andrea Miller</div>
                        <div class="day"><font-awesome-icon icon="fa-solid fa-clock" /> 2 Days Ago</div>
                    </div>
                    <div class="frase">
                        <p class="text-center">Working from home is now a trend</p>
                    </div>
                    <div class="hover-2">
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SestoComp'
}
</script>

<style lang="scss" scoped>
.container-padre {
    background-color: #e7eee9;
    padding-bottom: 100px;

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

        button {
            width: 120px;
            background-color: #52babb;
            color: white;
            border-radius: 7px;
            border: #52babb;
        }

        button:hover {
            background-color: transparent;
            color: #52babb;
            border: 1px solid #52babb;
        }

        img {
            width: 100%;
            filter: brightness(50%);
            -webkit-filter: brightness(50%);
        }
    }
}

.frase {
    position: relative;

    p {
        position: absolute;
        top: -200px;
        bottom: 0;
        right: 0;
        left: 0;
        color: white;
        font-size: 20px;
        padding: 16px;
    }
}

.hover-1 div,
.hover-2 {
    position: relative;
    display: none;
}

.user {
    position: absolute;
    top: -300px;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: start;
    color: white;
    padding-left: 20px;
}

.day {
    position: absolute;
    top: -300px;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;
    text-align: end;
    padding-right: 20px;
}

.hover-2 div {
    position: absolute;
    top: -100px;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;
    text-align: center;
    padding: 16px;
}

.col-4:hover .user {
    display: block;
}

.col-4:hover .day {
    display: block;
}

.col-4:hover .hover-2 {
    display: block;
}
</style>