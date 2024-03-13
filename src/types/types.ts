export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  _id: string;
  name: string;
  photo: string;
  category: string;
  price: number;
  stock: number;
};

export type ShippincagInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};

export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
  shippingInfo: ShippincagInfo;
  orderItems: OrderItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: {
    name: string;
    _id: string;
  };
  status: string;
  _id: string;
};

type CountAndChange = {
  revenue: number;
  user: number;
  product: number;
  order: number;
};
type LatestTransactions = {
  _id: string;
  discount: number;
  amount: number;
  quantity: number;
  status: string;
};
export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: CountAndChange;
  count: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: { male: number; female: number };
  latestTransactions: LatestTransactions[];
};

export type Pie = {
  orderFullfilment: { proccessing: number; shipped: number; delivered: number };
  productCategories: Record<string, number>[];
  stockAvailability: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistrubution: {
    netMargin: number;
    discount: number;
    productionCost: number;
    marketingCost: number;
    burnt: number;
  };
  usersAgeGroup: {
    teen: number;
    adult: number;
    old: number;
  };
  adminCustomer: {
    admin: number;
    customer: number;
  };
};

export type Bar = {
  users: number[];
  products: number[];
  orders: number[];
};

export type Line = {
  products: number[];
  users: number[];
  discount: number[];
  revenue: number[];
};
