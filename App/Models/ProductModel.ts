import { Model } from "./Models";

export class ProductModel extends Model {

    get_data(userQuery: string): any {
        this.query = userQuery;
        return this.get_query();
    }

}

let obj = new ProductModel();
obj.get_data("select * from products");
