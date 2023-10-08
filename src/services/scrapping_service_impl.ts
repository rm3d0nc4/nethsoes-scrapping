import puppeteer, { Page } from "puppeteer";
import { ScrappingService } from "../contracts/scrapping_service";
import { InvalidUrlException } from "../exceptions/invalid_url_exception";
import { Product } from "../models/product";

export class ScrappingServiceImpl implements ScrappingService {
    
    async fetchProduct(url: string): Promise<Product> {
        
        if(!url.includes("https://www.netshoes.com.br/")) {
            throw new InvalidUrlException("Invalid URL", 400);
        }

        const browser = await puppeteer.launch({headless: "new"});
        const page = await browser.newPage();
        await page.goto(url);

        const title = await this.fetchTitle(page);
        const price = await this.fetchPrice(page);
        const imageUrl = await this.fetchImageUrl(page);
        const description = await this.fetchDescription(page);

        const product = new Product(title, price, description, imageUrl);
        await browser.close();
        return product;
    }


    private async fetchTitle(page: Page): Promise<string> {
        const element = await page.$(".short-description");
        const titleTag = await element!.$("h1");
        const title = await page.evaluate((el) => el!.textContent, titleTag);
        return title!;
    }

    private async fetchPrice(page: Page): Promise<number> {
        const element = await page.$("#hiddenPriceSaleInCents");
        const price = await page.evaluate((el) => el!.getAttribute("value"), element);
        return Number(price) / 100;
    }

    private async fetchImageUrl(page: Page): Promise<string> {
        const element = await page.$(".photo-figure");
        const image = await element!.$("img");
        const imageUrl = await page.evaluate((el) => el!.getAttribute("src"), image);
        return imageUrl!;
    }

    private async fetchDescription(page: Page): Promise<string> {
        const element = await page.$("#features");
        const descriptionElement = await element!.$("p");
        const description = await page.evaluate((el) => el!.textContent, descriptionElement);
        return description!;
    }
}