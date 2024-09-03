package com.oneshop.ecommerce.service;

import com.oneshop.ecommerce.dto.Purchase;
import com.oneshop.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}