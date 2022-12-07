<template>
    <main>
        <PrimoComp />
        <SecondoComp />
        <TerzoComp />
        <QuartoComp />
        <QuintoComp />
        <SestoComp />
        <SettimoComp />
        <OttavoComp />
    </main>

</template>

<script>
import PrimoComp from './compmain/PrimoComp.vue'
import SecondoComp from './compmain/SecondoComp.vue'
import TerzoComp from './compmain/TerzoComp.vue'
import QuartoComp from './compmain/QuartoComp.vue'
import QuintoComp from './compmain/QuintoComp.vue'
import SestoComp from './compmain/SestoComp.vue'
import SettimoComp from './compmain/SettimoComp.vue'
import OttavoComp from './compmain/OttavoComp.vue'

export default {
    name: 'MainComp',
    components: {
        PrimoComp,
        SecondoComp,
        TerzoComp,
        QuartoComp,
        QuintoComp,
        SestoComp,
        SettimoComp,
        OttavoComp
    }
}
</script>

<style lang="scss" scoped>

</style>

