import {onMounted, ref} from 'vue'
import {defineStore} from 'pinia'

let id = 0
export const useItemNovelties = defineStore('ItemNovelties', () => {
    const itemNoveltiesGirls = ref([
        {
            id: id++,
            novelties: {
                url: new URL("@/assets/images/imageGirls/img1/photo.jpg", import.meta.url),
                arrNovelties: [
                    {
                        url: new URL("@/assets/images/imageGirls/img1/photo.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageGirls/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageGirls/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },

                ]
            },
            products: {
                description: 'Костюм производство турции, материал хлопок',
                url: new URL("@/assets/images/imageGirls/img1/photo.jpg", import.meta.url),
                arrProducts: [
                    {
                        url: new URL("@/assets/images/imageGirls/img1/photo.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageGirls/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageGirls/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                ]
            },
            title: 'Кофта',
            alt: 'Фотография 1',
            price: 1700,
            unit: '₽',
            size: [
                {count:1, size: 98},
                {count:4, size: 104},
                {count:3, size: 116},
                {count:1, size: 120}
            ],
            photoSize: false,
        }
    ])
    const itemNoveltiesBoys = ref([
        {
            id: id++,
            novelties: {
                url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                arrNovelties: [
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                ]
            },
            products: {
                description: 'Костюм производство турции, материал хлопок',
                url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                arrProducts: [
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                ]
            },
            title: 'Кофта',
            alt: 'Фотография 1',
            price: 1500,
            unit: '₽',
            size: [
                {count:1, size: 98},
                {count:4, size: 104},
                {count:3, size: 116},
                {count:1, size: 120}
            ],
            photoSize: false,
        },
        {
            id: id++,
            novelties: {
                url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                arrNovelties: [
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                ]
            },
            products: {
                description: 'Костюм производство турции, материал хлопок',
                url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                arrProducts: [
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                    {
                        url: new URL("@/assets/images/imageBoys/img1/photo2.jpg", import.meta.url),
                        photoSize: false,
                        photoDisabled: true
                    },
                ]
            },
            title: 'Кофта',
            alt: 'Фотография 1',
            price: 7500,
            unit: '₽',
            size: [
                {count:1, size: 98},
                {count:4, size: 104},
                {count:3, size: 116},
                {count:1, size: 120}
            ],
            photoSize: false,
        }
    ])
    /*add basket products >>>>> */
    const basketProducts = ref([])
    const getBasketProducts = (product) => {
        basketProducts.value.push(product)
        window.localStorage.setItem('CART', JSON.stringify(basketProducts.value))
    }
    onMounted(() => {
        if (basketProducts) {
            basketProducts.value = JSON.parse(localStorage.getItem('CART'))
        }

    })
    /*add basket products <<<<<<*/
    const showItemId = ref(null)
    const showTooltipClass = ref(false)
    const selectedPhotoId = ref(null)
    const getIdPhoto = (id) => {
        selectedPhotoId.value = id
        console.log('selectedPhotoId: ', selectedPhotoId)
    }

    const showTooltip = (item) => {
        showItemId.value = item.id
        setTimeout(() => {
            showTooltipClass.value = true
        }, 150)
    }
    const hideTooltip = () => {
        showItemId.value = null
        showTooltipClass.value = false
    }
    const getItemsByCategories = (url) => {
        console.log('urlCat: ', url)
        if (url === '/catalog/boys') {
            return itemNoveltiesBoys
        } else if (url === '/catalog/girls') {
            return itemNoveltiesGirls
        }
    }


    return {
        itemNoveltiesGirls, itemNoveltiesBoys, showItemId,
        showTooltip, hideTooltip, showTooltipClass, selectedPhotoId, getIdPhoto, getItemsByCategories,
        basketProducts, getBasketProducts
    }
})


// const getProductId = (id) => {
//     return itemNoveltiesBoys.value.find(it => it.id === id)
// }