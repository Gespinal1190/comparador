## Alcampo - copy products script

```JavaScript
Array.from(temp1.children).forEach(item => {
    const imageContainer = item.querySelector(".image-container");
    const image = imageContainer.querySelector("img");

    if (!image) return;
    
    const titleContainer = item.querySelector(".title-container");
    const title = titleContainer.querySelector("h3");
    const previous = alcampoList.find(i => i.name === title.textContent);
    const priceContainer = item.querySelector(".price-pack-size-container > div");
    
    if (previous || !priceContainer?.children?.length) return;
    
    const price = priceContainer.children[1].textContent;
    const size = item.querySelector("[data-test='fop-size']");
    
    const sizeContent = size.querySelector("span:not([data-test='fop-price-per-unit'])")?.textContent || "";
    const sizePrice = size.querySelector("[data-test='fop-price-per-unit']")?.textContent || "";

    const result = {
        imageSrc: image.src,
        name: title.textContent,
        price: price,
        size: sizeContent,
        price_per_size: sizePrice
    }
    
    alcampoList.push(result);     
});
```