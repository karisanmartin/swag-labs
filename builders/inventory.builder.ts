import { type Page } from "@playwright/test";
import { InventoryPage } from "../pages/inventory.page";
import { InventoryProductComponent } from "../components/inventory-product.component";

export class InventoryBuilder {
    constructor(private readonly page: Page) {}

    build() {
        return new InventoryPage(
            this.page,
            new InventoryProductComponent(this.page),
        );
    }
}
