import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProductItemType {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface ProductsType {
  productList: ProductItemType[];
  filterType: string;
  filterValue: string;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: any;
}

const initialState = {
  productList: [],
  filterType: "category",
  filterValue: "All Collection",
  status: "idle",
  error: null,
} as ProductsType;

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filterType = "category";
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, { payload }) => {
      state.status = "pending";
      console.log("payload-pending", initialState, payload);
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.productList = payload;
    });
    builder.addCase(fetchProducts.rejected, (state, { payload }) => {
      state.status = "failed";
    });
    console.log("builder", builder);
  },
});

export const { setCategoryFilter } = productsSlice.actions;

export const allProductsStatus = (state: RootState) => state.products.status;
export const selectedProductCategory = (state: RootState) => state.products.filterValue;

export const allProducts = (state: RootState) => {
  const productList = state.products.productList;
  if (state.products.filterType === "category") {
    if (state.products.filterValue === "All Collection") {
      return productList;
    } else {
      return productList.filter((values) => {
        return values.category === state.products.filterValue;
      });
    }
  }
};

export default productsSlice.reducer;
