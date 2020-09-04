import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import {
  dataGetInitialData,
  dataGetInitialDataSucceeded,
  dataGetInitialDataFailed,
  dataGetContent,
  dataGetContentSucceeded,
  dataGetContentFailed,
  dataGetContentTypes,
  dataGetContentTypesSucceeded,
  dataGetContentTypesFailed,
  dataGetCuisines,
  dataGetCuisinesSucceeded,
  dataGetCuisinesFailed,
  dataGetEquipments,
  dataGetEquipmentsSucceeded,
  dataGetEquipmentsFailed,
  dataGetEquipmentTypes,
  dataGetEquipmentTypesSucceeded,
  dataGetEquipmentTypesFailed,
  dataGetIngredients,
  dataGetIngredientsSucceeded,
  dataGetIngredientsFailed,
  dataGetIngredientTypes,
  dataGetIngredientTypesSucceeded,
  dataGetIngredientTypesFailed,
  dataGetMeasurements,
  dataGetMeasurementsSucceeded,
  dataGetMeasurementsFailed,
  dataGetMethods,
  dataGetMethodsSucceeded,
  dataGetMethodsFailed,
  dataGetProducts,
  dataGetProductsSucceeded,
  dataGetProductsFailed,
  dataGetProductCategories,
  dataGetProductCategoriesSucceeded,
  dataGetProductCategoriesFailed,
  dataGetProductTypes,
  dataGetProductTypesSucceeded,
  dataGetProductTypesFailed,
  dataGetRecipes,
  dataGetRecipesSucceeded,
  dataGetRecipesFailed,
  dataGetRecipeTypes,
  dataGetRecipeTypesSucceeded,
  dataGetRecipeTypesFailed,

  dataGetInitialUserData,
  dataGetInitialUserDataSucceeded,
  dataGetInitialUserDataFailed,
  dataGetMyContent,
  dataGetMyContentSucceeded,
  dataGetMyContentFailed,
  dataGetMyFavoriteRecipes,
  dataGetMyFavoriteRecipesSucceeded,
  dataGetMyFavoriteRecipesFailed,
  dataGetMyFriendships,
  dataGetMyFriendshipsSucceeded,
  dataGetMyFriendshipsFailed,
  dataGetMyPlans,
  dataGetMyPlansSucceeded,
  dataGetMyPlansFailed,
  dataGetMyPrivateEquipments,
  dataGetMyPrivateEquipmentsSucceeded,
  dataGetMyPrivateEquipmentsFailed,
  dataGetMyPrivateIngredients,
  dataGetMyPrivateIngredientsSucceeded,
  dataGetMyPrivateIngredientsFailed,
  dataGetMyPrivateRecipes,
  dataGetMyPrivateRecipesSucceeded,
  dataGetMyPrivateRecipesFailed,
  dataGetMyPublicRecipes,
  dataGetMyPublicRecipesSucceeded,
  dataGetMyPublicRecipesFailed,
  dataGetMySavedRecipes,
  dataGetMySavedRecipesSucceeded,
  dataGetMySavedRecipesFailed
} from './actions';
import {
  dataGetInitialDataSaga,
  dataGetContentSaga,
  dataGetContentTypesSaga,
  dataGetCuisinesSaga,
  dataGetEquipmentsSaga,
  dataGetEquipmentTypesSaga,
  dataGetIngredientsSaga,
  dataGetIngredientTypesSaga,
  dataGetMeasurementsSaga,
  dataGetMethodsSaga,
  dataGetProductsSaga,
  dataGetProductCategoriesSaga,
  dataGetProductTypesSaga,
  dataGetRecipesSaga,
  dataGetRecipeTypesSaga,

  dataGetInitialUserDataSaga,
  dataGetMyContentSaga,
  dataGetMyFavoriteRecipesSaga,
  dataGetMyFriendshipsSaga,
  dataGetMyPlansSaga,
  dataGetMyPrivateEquipmentsSaga,
  dataGetMyPrivateIngredientsSaga,
  dataGetMyPrivateRecipesSaga,
  dataGetMyPublicRecipesSaga,
  dataGetMySavedRecipesSaga
} from './sagas';

const endpoint = NOBSCBackendAPIEndpointOne;

describe('dataGetInitialDataSaga', () => {
  it('should dispatch initialData and succeeded if data found', () => {
    const iterator = dataGetInitialDataSaga();
    const res = {
      data: {
        officialContent: [],
        contentTypes: [{id: 1, parent_id: 0, name: "Page", path: "/page"}],
        cuisines: [{"id": 1, "name": "Russian", "nation": "Russia"}],
        measurements: [{"id": 1, "name": "teaspoon"}],
        methods: [{"id": 1, "name": "No-Cook"}],
        officialEquipment: [
          {
            id: 1,
            equipment_type_id: 4,
            owner_id: 1,
            name: "Chopstick",
            equipment_type_name: "Dining",
            description: "It works.",
            image: "nobsc-chopstick"
          }
        ],
        equipmentTypes: [{"id": 1, "name": "Cleaning"}],
        officialIngredients: [
          {
            id: 1,
            ingredient_type_id: 1,
            owner_id: 1,
            ingredient_type_name: "Fish",
            brand: null,
            variety: "Chilean",
            name: "Salmon",
            description: "Tasty.",
            image: "nobsc-salmon"
          }
        ],
        ingredientTypes: [{"id": 1, "name": "Fish"}],
        products: [],
        productCategories: [],
        productTypes: [],
        officialRecipes: [
          {
            id: 1,
            owner_id: 1,
            recipe_type_id: 1,
            cuisine_id: 1,
            title: "Tasty",
            recipe_image: "nobsc-tasty"
          }
        ],
        recipeTypes: [{"id": 1, "name": "Drink"}]
      }
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/data-init`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetInitialData(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetInitialDataSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetInitialDataSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/data-init`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetInitialDataFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetContentSaga', () => {
  it('should dispatch content and succeeded if data found', () => {
    const iterator = dataGetContentSaga();
    const res = {
      data: [
        {
          id: 1,
          title: "How To",
          author: "NOBSC",
          image: "nobsc-grilling",
          //snippet: "Blah..."
        }
      ]
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/content`));
    expect(iterator.next(res).value).toEqual(put(dataGetContent(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetContentSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetContentSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/content`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetContentFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetContentTypesSaga', () => {
  it('should dispatch contentTypes and succeeded if data found', () => {
    const iterator = dataGetContentTypesSaga();
    const res = {
      data: [
        {id: 1, parent_id: 0, name: "Page", path: "/page"},
        {id: 2, parent_id: 0, name: "Post", path: "/post"}
      ]
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/content-type`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetContentTypes(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetContentTypesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetContentTypesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/content-type`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetContentTypesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetCuisinesSaga', () => {
  it('should dispatch cuisines and succeeded if data found', () => {
    const iterator = dataGetCuisinesSaga();
    const res = {data: [{id: 1, name: "Russian", nation: "Russia"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/cuisine`));
    expect(iterator.next(res).value).toEqual(put(dataGetCuisines(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetCuisinesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetCuisinesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/cuisine`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetCuisinesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetEquipmentsSaga', () => {
  it('should dispatch equipments and succeeded if data found', () => {
    const iterator = dataGetEquipmentsSaga();
    const res = {
      data: [
        {
          id: 1,
          equipment_type_id: 4,
          owner_id: 1,
          name: "Chopstick",
          equipment_type_name: "Dining",
          description: "It works.",
          image: "nobsc-chopstick"
        }
      ]
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/equipment/official/all`));
    expect(iterator.next(res).value).toEqual(put(dataGetEquipments(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetEquipmentsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetEquipmentsSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/equipment/official/all`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetEquipmentsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetEquipmentTypesSaga', () => {
  it('should dispatch equipment types and succeeded if data found', () => {
    const iterator = dataGetEquipmentTypesSaga();
    const res = {data: [{"id": 1, "name": "Cleaning"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/equipment-type`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetEquipmentTypes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetEquipmentTypesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetEquipmentTypesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/equipment-type`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetEquipmentTypesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetIngredientsSaga', () => {
  it('should dispatch ingredients and succeeded if data found', () => {
    const iterator = dataGetIngredientsSaga();
    const res = {
      data: [
        {
          id: 1,
          ingredient_type_id: 1,
          owner_id: 1,
          ingredient_type_name: "Fish",
          brand: null,
          variety: "Chilean",
          name: "Salmon",
          description: "Tasty.",
          image: "nobsc-salmon"
        }
      ]
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/ingredient/official/all`));
    expect(iterator.next(res).value).toEqual(put(dataGetIngredients(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetIngredientsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetIngredientsSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/ingredient/official/all`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetIngredientsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetIngredientTypesSaga', () => {
  it('should dispatch ingredient types and succeeded if data found', () => {
    const iterator = dataGetIngredientTypesSaga();
    const res = {data: [{"id": 1, "name": "Fish"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/ingredient-type`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetIngredientTypes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetIngredientTypesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetIngredientTypesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/ingredient-type`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetIngredientTypesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMeasurementsSaga', () => {
  it('should dispatch measurements and succeeded if data found', () => {
    const iterator = dataGetMeasurementsSaga();
    const res = {data: [{id: 1, name: "teaspoon"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/measurement`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMeasurements(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetMeasurementsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMeasurementsSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/measurement`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMeasurementsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMethodsSaga', () => {
  it('should dispatch methods and succeeded if data found', () => {
    const iterator = dataGetMethodsSaga();
    const res = {data: [{"id": 1, "name": "No-Cook"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/method`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMethods(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMethodsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMethodsSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/method`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMethodsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetProductsSaga', () => {
  it('should dispatch products and succeeded if data found', () => {
    const iterator = dataGetProductsSaga();
    const res = {
      data: [
        {
          id: 1,
          product_category_id: 1,
          product_type_id: 1,
          brand: null,
          variety: null,
          name: "Some Item",
          fullname: "Some Item",
          description: "High quality.",
          specs: {},
          image: "nobsc-tasty"
        }
      ]
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/product`));
    expect(iterator.next(res).value).toEqual(put(dataGetProducts(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetProductsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetProductsSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/product`));
    expect(iterator.throw('error').value).toEqual(put(dataGetProductsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetProductCategoriesSaga', () => {
  it('should dispatch product categories and succeeded if data found', () => {
    const iterator = dataGetProductCategoriesSaga();
    const res = {data: [{"id": 1, "name": "Fish"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/product-category`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetProductCategories(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetProductCategoriesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetProductCategoriesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/product-category`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetProductCategoriesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetProductTypesSaga', () => {
  it('should dispatch product types and succeeded if data found', () => {
    const iterator = dataGetProductTypesSaga();
    const res = {data: [{"id": 1, "name": "Fish"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/product-type`));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetProductTypes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetProductTypesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetProductTypesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/product-type`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetProductTypesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetRecipesSaga', () => {
  it('should dispatch recipes and succeeded if data found', () => {
    const iterator = dataGetRecipesSaga();
    const res = {
      data: [
        {
          id: 1,
          owner_id: 1,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "Tasty",
          recipe_image: "nobsc-tasty"
        }
      ]
    };

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/recipe/official/all`));
    expect(iterator.next(res).value).toEqual(put(dataGetRecipes(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetRecipesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetRecipesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/recipe/official/all`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetRecipesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetRecipeTypesSaga', () => {
  it('should dispatch recipe types and succeeded if data found', () => {
    const iterator = dataGetRecipeTypesSaga();
    const res = {data: [{"id": 1, "name": "Drink"}]};

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/recipe-type`));
    expect(iterator.next(res).value).toEqual(put(dataGetRecipeTypes(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetRecipeTypesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetRecipeTypesSaga();

    expect(iterator.next().value)
      .toEqual(call([axios, axios.get], `${endpoint}/recipe-type`));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetRecipeTypesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('dataGetInitialUserDataSaga', () => {
  it('should dispatch initialUserData and succeeded if data found', () => {
    const iterator = dataGetInitialUserDataSaga();
    const res = {
      data: {
        myContent: [],
        myFavoriteRecipes: [],
        myFriendships: [],
        myPlans: [],
        myPrivateEquipment: [
          {
            id: 1,
            equipment_type_id: 4,
            owner_id: 1,
            name: "Chopstick",
            equipment_type_name: "Dining",
            description: "It works.",
            image: "nobsc-chopstick"
          }
        ],
        myPrivateIngredients: [
          {
            id: 1,
            ingredient_type_id: 1,
            owner_id: 1,
            ingredient_type_name: "Fish",
            brand: null,
            variety: "Chilean",
            name: "Salmon",
            description: "Tasty.",
            image: "nobsc-salmon"
          }
        ],
        myPrivateRecipes: [
          {
            id: 8,
            owner_id: 8,
            recipe_type_id: 4,
            cuisine_id: 4,
            title: "My Tasty",
            recipe_image: "my-tasty"
          }
        ],
        myPublicRecipes: [],
        mySavedRecipes: [
          {
            id: 1,
            owner_id: 1,
            recipe_type_id: 1,
            cuisine_id: 1,
            title: "Tasty",
            recipe_image: "nobsc-tasty"
          }
        ],
      }
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/data-init`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetInitialUserData(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetInitialUserDataSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetInitialUserDataSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/data-init`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetInitialUserDataFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyContentSaga', () => {
  it('should dispatch content and succeeded if data found', () => {
    const iterator = dataGetMyContentSaga();
    const res = {
      data: [
        {
          id: 1,
          title: "A Great Grilling Setup",
          author: "Person",
          image: "a-great-grilling-setup",
          //snippet: "Blah..."
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/content/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value).toEqual(put(dataGetMyContent(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetMyContentSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyContentSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/content/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyContentFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyFavoriteRecipesSaga', () => {
  it('should dispatch recipes and succeeded if data found', () => {
    const iterator = dataGetMyFavoriteRecipesSaga();
    const res = {
      data: [
        {
          id: 1,
          owner_id: 1,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "Tasty",
          recipe_image: "nobsc-tasty"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/favorite-recipe`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMyFavoriteRecipes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMyFavoriteRecipesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyFavoriteRecipesSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/favorite-recipe`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyFavoriteRecipesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyFriendshipsSaga', () => {
  it('should dispatch friendships and succeeded if data found', () => {
    const iterator = dataGetMyFriendshipsSaga();
    const res = {
      data: [
        {
          user_id: 1749,
          username: "SnowboarderMike",
          avatar: "SnowboarderMike",
          status: "accepted"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/friendship`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMyFriendships(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetMyFriendshipsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyFriendshipsSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/friendship`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyFriendshipsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyPlansSaga', () => {
  it('should dispatch plans and succeeded if data found', () => {
    const iterator = dataGetMyPlansSaga();
    const res = {
      data: [
        {
          id: 98234,
          name: "Plan A",
          data: {
            1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
            8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
           15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
           22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
         }
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/plan/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value).toEqual(put(dataGetMyPlans(res.data)));
    expect(iterator.next().value).toEqual(put(dataGetMyPlansSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyPlansSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/plan/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value).toEqual(put(dataGetMyPlansFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyPrivateEquipmentsSaga', () => {
  it('should dispatch equipments and succeeded if data found', () => {
    const iterator = dataGetMyPrivateEquipmentsSaga();
    const res = {
      data: [
        {
          id: 1,
          equipment_type_id: 3,
          owner_id: 3908,
          name: "My Teapot",
          equipment_type_name: "Dining",
          description: "From grandmother.",
          image: "my-teapot"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/equipment/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMyPrivateEquipments(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMyPrivateEquipmentsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyPrivateEquipmentsSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/equipment/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyPrivateEquipmentsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyPrivateIngredientsSaga', () => {
  it('should dispatch ingredients and succeeded if data found', () => {
    const iterator = dataGetMyPrivateIngredientsSaga();
    const res = {
      data: [
        {
          id: 8927,
          ingredient_type_id: 18,
          owner_id: 1,
          ingredient_type_name: "Product",
          brand: "Uncle Bob",
          variety: "DOUBLE HOT",
          name: "HOT Sauce",
          description: "From Uncle Bob.",
          image: "hot-sauce"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/ingredient/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMyPrivateIngredients(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMyPrivateIngredientsSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyPrivateIngredientsSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/ingredient/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyPrivateIngredientsFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyPrivateRecipesSaga', () => {
  it('should dispatch recipes and succeeded if data found', () => {
    const iterator = dataGetMyPrivateRecipesSaga();
    const res = {
      data: [
        {
          id: 841,
          owner_id: 3908,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "Tasty",
          recipe_image: "nobsc-tasty"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/recipe/private/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMyPrivateRecipes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMyPrivateRecipesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyPrivateRecipesSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/recipe/private/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyPrivateRecipesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMyPublicRecipesSaga', () => {
  it('should dispatch recipes and succeeded if data found', () => {
    const iterator = dataGetMyPublicRecipesSaga();
    const res = {
      data: [
        {
          id: 841,
          owner_id: 3908,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "Tasty",
          recipe_image: "nobsc-tasty"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/recipe/public/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMyPublicRecipes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMyPublicRecipesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMyPublicRecipesSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/recipe/public/all`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMyPublicRecipesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('dataGetMySavedRecipesSaga', () => {
  it('should dispatch recipes and succeeded if data found', () => {
    const iterator = dataGetMySavedRecipesSaga();
    const res = {
      data: [
        {
          id: 1,
          owner_id: 1,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "Tasty",
          recipe_image: "nobsc-tasty"
        }
      ]
    };

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/saved-recipe`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.next(res).value)
      .toEqual(put(dataGetMySavedRecipes(res.data)));
    expect(iterator.next().value)
      .toEqual(put(dataGetMySavedRecipesSucceeded()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if data not found', () => {
    const iterator = dataGetMySavedRecipesSaga();

    expect(iterator.next().value).toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/saved-recipe`,
      {},
      {withCredentials: true}
    ));
    expect(iterator.throw('error').value)
      .toEqual(put(dataGetMySavedRecipesFailed()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});