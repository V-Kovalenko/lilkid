import {onMounted, ref} from 'vue'
import {defineStore} from 'pinia'
import NeedToChooseSize from "@/components/modalWindows/NeedToChooseSize.vue";

let id = 0
export const useItemNovelties = defineStore('ItemNovelties', () => {
    const itemNoveltiesGirls = ref([
        {
            id: ++id,
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
            selectedSize: '',
            description: 'Костюм производство турции, материал хлопок',
            title: 'Кофта',
            alt: 'Фотография 1',
            price: 1700,
            unit: '₽',
            size: [
                {count: 1, size: 98},
                {count: 2, size: 104},
                {count: 3, size: 116},
                {count: 4, size: 120}
            ],
            photoSize: false,
        }
    ])
    const itemNoveltiesBoys = ref([
        {
            id: ++id,
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
            selectedSize: '',
            description: 'Костюм производство турции, материал хлопок',
            title: 'Кофта',
            alt: 'Фотография 1',
            price: 1500,
            unit: '₽',
            size: [
                {count: 1, size: 98},
                {count: 2, size: 104},
                {count: 3, size: 116},
                {count: 4, size: 120}
            ],
            photoSize: false,
        },
    ])
    /*add basket products >>>>> */
    const basketProducts = ref([]) // state корзины
    console.log('basketProducts: ', basketProducts)
    const getBasketProducts = (product) => { // добавление товара
            basketProducts.value.push(product)
            window.localStorage.setItem('CART', JSON.stringify(basketProducts.value)) // сохранение в Localstorage

    }
    onMounted(() => { // монтирование localStorage при загрузке страницы
        if (basketProducts) {
            basketProducts.value = JSON.parse(localStorage.getItem('CART'))
        }

    })

    const getSizeFromButtonSize = (size, index) => {


    }
    /*add basket products <<<<<<*/


    const showItemId = ref(null) /*---ЧТОБЫ ПОКАЗАТЬ TOOLTIP НА НАВЕДЕННЫЙ ЭЛЕМЕНТ--showItemId*/

    const showTooltipClass = ref(false)  /*---МЕНЯТЬ КЛАСС ВЗАВИСИМОСТИ ОТ TRUE-FALSE - showTooltipClass */
    /*---ДАННЫЕ МАССИВА itemNoveltiesGirls И itemNoveltiesBoys--->>>*/
    const selectedPhotoId = ref(null) // state itemsGirls and ItemBoys
    const getIdPhoto = (id) => { // передается каждый элемент массива и присваивается selectedPhotoId
        selectedPhotoId.value = id
        console.log('selectedPhotoId: ', selectedPhotoId)
    }
    /*---ДАННЫЕ МАССИВА itemNoveltiesGirls И itemNoveltiesBoys---<<<*/
    /*---ПОКАЗАТЬ-СКРЫТЬ TOOLTIP--->>>*/
    //ПОКАЗАТЬ
    const showTooltip = (item) => {
        showItemId.value = item.id
        setTimeout(() => {
            showTooltipClass.value = true
        }, 150)
    }
    //СКРЫТЬ
    const hideTooltip = () => {
        showItemId.value = null
        showTooltipClass.value = false
    }
    /*---ПОКАЗАТЬ-СКРЫТЬ TOOLTIP---<<<*/

    /*---ВОЗРАЩЕНИЕ МАССИВА itemNoveltiesBoys ИЛИ itemNoveltiesGirls В ЗАВИСИМОСТИ ОТ URL--->>>*/

    const getItemsByCategories = (url) => {
        console.log('urlCat: ', url)
        if (url === '/catalog/boys') {
            return itemNoveltiesBoys
        } else if (url === '/catalog/girls') {
            return itemNoveltiesGirls
        }
    }
    /*---ВОЗРАЩЕНИЕ МАССИВА itemNoveltiesBoys ИЛИ itemNoveltiesGirls В ЗАВИСИМОСТИ ОТ URL---<<<*/

    return {
        itemNoveltiesGirls, itemNoveltiesBoys, showItemId,
        showTooltip, hideTooltip, showTooltipClass, selectedPhotoId, getIdPhoto, getItemsByCategories,
        basketProducts, getBasketProducts, getSizeFromButtonSize
    }
})


// const getProductId = (id) => {
//     return itemNoveltiesBoys.value.find(it => it.id === id)
// }