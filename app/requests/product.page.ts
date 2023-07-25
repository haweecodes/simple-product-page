import path from "path";
import { promises as fs } from "fs";
import { ProductData } from "../types/Product";

export async function getProductData() {
    const jsonDirectory = path.join(process.cwd(), "");
  
    const fileContents = await fs.readFile(
      jsonDirectory + "/product_test.json",
      "utf8"
    );
    const data = JSON.parse(fileContents) as ProductData;
  
    return data;
  };