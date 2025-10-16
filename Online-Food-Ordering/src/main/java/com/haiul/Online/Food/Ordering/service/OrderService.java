package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.model.Order;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user) throws Exception;

    public Order updateOrder(Long orderId,String oderStatus) throws Exception;

    public void cancelOrder(Long orderId) throws Exception;

    public List<Order> getUsersOrder(Long userId) throws Exception;

    public List<Order> getRestaurantsOrder(Long restaurantId,String orderStatus) throws Exception;

    Order findOrderById(Long orderId)throws  Exception;
}
