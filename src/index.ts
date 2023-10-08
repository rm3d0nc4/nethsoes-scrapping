import { ScrappingService } from './contracts/scrapping_service';
import { ScrappingServiceImpl } from './services/scrapping_service_impl';
import PromptSync, { Prompt } from 'prompt-sync';

async function main() {
    const scrappingService: ScrappingService = new ScrappingServiceImpl();
    const prompt: Prompt = PromptSync();

    try {
        console.log("Welcome to the Netshoes Scrapping CLI!")
        const productUrl = prompt("Enter the product URL: ");

        const product = await scrappingService.fetchProduct(productUrl);
        
        console.log("Product fetched successfully!");
        console.log(product.toString());
    } catch (error) {
        console.log("Error");   
        console.log((error as Error).message);
    }
}

main();