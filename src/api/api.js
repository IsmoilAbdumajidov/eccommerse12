export const baseUrl = 'https://dummyjson.com/products';



export const GetProduct = async ({ dispatch, type = "def", value = "all" }) => {
    try {
        let res;
        if (type == "def" || value === "all") {
            res = await fetch(baseUrl)
        }
        else if (type === "search") {
            res = await fetch(baseUrl + `/search?q=${value}`)
        }
        else if (type === "filter") {
            res = await fetch(baseUrl + `/category/${value}`)
        }
        const { products } = await res.json()
        dispatch({ type: "ALL_PRODUCTS", payload: products })
    } catch (error) {
        console.log(error);
    }
}

export const GetCategoryList = async ({ setCategories }) => {
    try {
        const res = await fetch(baseUrl + "/categories")
        const data = await res.json()
        setCategories([{ slug: "all", name: "All" }, ...data])
    } catch (error) {
        console.log(error);
    }
}