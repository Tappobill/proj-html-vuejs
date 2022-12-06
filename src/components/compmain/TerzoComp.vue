<template>
    <div class="container-padre text-white">
        <div class="container-custom">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h6 class="mb-5">WHAT ARE WE DOING</h6>
                <h1><span>Results</span> in Numbers</h1>
            </div>
            <div class="d-flex justify-content-between align-items-center contatore text-center">
                <div class="risultati">
                    <div>128</div>
                    <div>Certifications</div>
                </div>
                <div class="risultati">
                    <div>230</div>
                    <div>Employees</div>
                </div>
                <div class="risultati">
                    <div>517</div>
                    <div>Customers</div>
                </div>
                <div class="risultati">
                    <div>94</div>
                    <div>Countries Served</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TerzoComp'
}
</script>

<style lang="scss" scoped>
.container-padre {
    width: 100%;
    height: 500px;
    background-image: url(../../../public/img/bg-7.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container-custom {
    width: 60%;
    margin: auto;
}

.contatore {
    .risultati {
        font-size: 18px;
        margin-top: 50px;
        font-weight: bold;

        div:first-child {
            color: #098081;
            font-size: 30px;
        }
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

h1 {
    span {
        padding: 0 10px;
        background: rgba(#60a9ad, 0.3);
    }
}
</style>