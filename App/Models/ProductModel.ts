import { Model } from "./Models";

export class ProductModel extends Model {

    async get_data(userQuery: string) {
        this.query = userQuery;
        let receive_data = await this.get_query();
        return receive_data;
    }

}

let obj = new ProductModel();
obj.get_data("select * from products");
