const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    noFilteredItems: [],
    resultPrice: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            }
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CARD':
            const id = action.payload;
            const price = action.price;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };

            // создаю полный список выбраных элементов без фильтрации для последующего каунта одинаковых товаров
            let noFilterRes = {
                ...state,
                noFilteredItems: [
                    ...state.noFilteredItems,
                    newItem
                ]
            }

            let res = {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }

            res.items = res.items.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.id === thing.id
                ))
            )


            return {
                ...state,
                items: res.items,
                noFilteredItems: noFilterRes.noFilteredItems,
                resultPrice: state.resultPrice + price
            }

        case 'ITEM_REMOVE_FROM_CARD':
            const idx = action.payload;
            const pricex = action.price;
            const countx = action.count;
            const itemIndex = state.items.findIndex(item => item.id === idx)
            const itemIndexNoFilter = state.noFilteredItems.findIndex(item => item.id === idx)

            let delRes = {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }

            let delNoFilterRes = {
                ...state,
                noFilteredItems: [
                    ...state.noFilteredItems.slice(0, itemIndexNoFilter),
                    ...state.noFilteredItems.slice(itemIndexNoFilter + 1)
                ]
            }

            return {
                ...state,
                items: delRes.items,
                noFilteredItems: delNoFilterRes.noFilteredItems,
                resultPrice: state.resultPrice - (pricex * countx)
            }
        default:
            return state;
    }


}
export default reducer;