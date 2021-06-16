<template>
    <div class="card-sale col-lg-4 col-sm-6 col-xs-12">
        <router-link class="card-sale__content d-xs-block" :to="`/details/${card.id}`">
            <span class="card-sale__wrap-img pos-rel ovh d-xs-flex justify-content-xs-center">
                <img
                    class="card-sale__img"
                    :src="'https://via.placeholder.com/564x233/AA0000/FFFFFF?text=img_' + card.id"
                    loading="lazy"
                    width="455"
                    height="188"
                    alt="Фото дома"
                />
                <span v-if="card.type === 'IndependentLiving'" class="card-label card-label_blue pos-abs fw-b"
                    >Independent living</span
                >
                <span v-if="card.type === 'SupportAvailable'" class="card-label card-label_orange pos-abs fw-b"
                    >Restaurant &amp; Support available</span
                >
            </span>
            <span class="card-sale__wrap-text d-xs-block">
                <span class="card-sale__title fw-b d-xs-block">
                    {{ card.title }}
                    <br />
                </span>
                <span class="card-sale__text card-sale__text_title d-xs-block">{{ card.address }}</span>
                <span class="card-sale__text card-sale__text_price d-xs-block">
                    New Properties for Sale from
                    <span class="fw-b">£{{ card.price | price }}</span>
                </span>
                <span class="card-sale__av d-xs-block">Shared Ownership Available</span>
            </span>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        card: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>
