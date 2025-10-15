package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.model.IngredientCategory;
import com.haiul.Online.Food.Ordering.model.IngredientsItem;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IngredientsService {

    public IngredientCategory createIngredientCategory(String name,Long restaurantId)throws Exception;

    public IngredientCategory findIngredientCategoryById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientCategoryByRestaurentId(Long id) throws Exception;

    public IngredientsItem createIngredientitem(Long restaurantid, String ingredientiane, Long categoryla) throws Exception;

    public List<IngredientsItem> findRestaurentsIngredients(Long restaurentId);

    public IngredientsItem updateStock(Long id) throws Exception;
}
