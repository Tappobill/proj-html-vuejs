<template>
    <div class="container-padre">
        <div class="container-custom container-fluid">
            <div class="row">
                <div class="col-6">
                    <h6 class="pb-4">NEWSLETTER</h6>
                    <h1 class="pb-4"><span>Know</span> First</h1>
                    <p>Follow closely and receive content about our company <br> and the news of the current market</p>
                </div>
                <div class="col-6">
                    <div><input class="w-50 mb-4 ps-2" type="text" placeholder="Name"></div>
                    <div><input class="w-50 mb-4 ps-2" type="text" placeholder="Email"></div>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettimoComp'
}
</script>

<style lang="scss" scoped>
.container-padre {
    background-color: #111117;
    padding-bottom: 100px;
    padding-top: 100px;
    color: white;

    .container-custom {
        width: 60%;
        margin: auto;

        h1 {
            span {
                color: white;
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
            border-radius: 3px;
            border: #52babb;
            padding: 5px 0px;
        }

        button:hover {
            background-color: transparent;
            border: 1px solid #52babb;
        }

        input {
            background-color: #1d2528;
            border: #1d2528;
            padding: 5px 0px;
            color: white;
        }
    }
}
</style>