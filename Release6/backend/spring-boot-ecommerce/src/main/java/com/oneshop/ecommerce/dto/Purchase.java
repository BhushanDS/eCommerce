package com.oneshop.ecommerce.dto;

import com.oneshop.ecommerce.entity.Address;
import com.oneshop.ecommerce.entity.Customer;
import com.oneshop.ecommerce.entity.Order;
import com.oneshop.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
