class Product {
    constructor( id, name, salePrice, costPrice, imgSrc, discountPercentage, description, stockCount){
        this.id=id
        this.name=name
        this.salePrice=salePrice
        this.costPrice=costPrice
        this.imgSrc=imgSrc
        this.discountPercentage=discountPercentage
        this.description=description
        // this.categoryId=categoryId
        this.stockCount=stockCount
        this.createdAt=new Date()
    }
}