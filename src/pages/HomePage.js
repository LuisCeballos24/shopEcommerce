import React from "react"
import { useGetProductsAllQuery } from "../redux/products/products.api"
import { ProductItem } from "../components/product-item/ProductItem"
import { Loader } from "../components/loader/Loader"
import { ProductFilters } from "../components/product-filters/ProductFilters"
import { useSelector } from "react-redux"
import { ProductCarousel } from "../components/carousel/carousel";

export function HomePage() {
    const { data, error, isLoading, status } = useGetProductsAllQuery()
    const { filters, searchFilterProducts } = useSelector(state => state.product)

    const filterByCategory = (category) => {
        return data?.filter(product => product.Category.name === category)
            .map(product => <ProductItem product={product} key={product.producto_id} />)
    }

    const filterByPrice = price => {
        const products = data?.filter(item => item.price >= price[0] && item.price <= price[1])
            .map(product => <ProductItem product={product} key={product.producto_id} />)
        if (products.length === 0) {
            return <div className='text-center'>
                <p className='font-medium'>Products not found...</p>
                <p>Minimum value 7$ - Maximum value 1000$</p>
            </div>
        }
        return products
    }

    const filterByRating = rating => {
        return data?.filter(item => rating === 'above' ? item.rating.rate >= 3 : item.rating.rate <= 3)
            .map(product => <ProductItem product={product} key={product.producto_id} />)
    }

    const filterSearch = data => {
        if (data.length > 0) {
            return data.map(product => <ProductItem product={product} key={product.producto_id} />)
        } else {
            return <p className='mt-[30px] mx-auto'>Products not found...</p>
        }
    }

    const renderProducts = () => {
        if (filters.category) return filterByCategory(filters.category)
        if (filters.price) return filterByPrice(filters.price)
        if (filters.rating) return filterByRating(filters.rating)
        if (searchFilterProducts) return filterSearch(searchFilterProducts)

        return data?.map(product => <ProductItem product={product} key={product.producto_id} />)
    }

    return (
        <>
            <div className="container max-w-[1240px] mx-auto mt-[60px] mb-[20px] px-4 transition-all flex flex-col">
                {isLoading && <Loader />}
                {error && <p className="text-center mt-4">{error.error}</p>}
                {status === "fulfilled" && (
                    <>
                        {/* Carrusel siempre arriba */}
                        <div className="w-full mb-10">
                        <ProductCarousel products={data} />
                        </div>

                        {/* Sección filtros + productos */}
                        <div className="flex flex-col xl:flex-row xl:items-start xl:gap-6">
                            {/* Filtros */}
                            <div className="w-full lg:w-3/5 xl:w-1/5 flex flex-col items-center mb-6 xl:mb-0">
                                <ProductFilters />
                            </div>

                            {/* Productos */}
                            <div className="w-full xl:flex-1 flex flex-wrap justify-center xl:justify-start">
                                {renderProducts()}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}