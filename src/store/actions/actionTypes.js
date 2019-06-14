/*
modal
*/

//export const OPEN_MODAL = 'OPEN_MODAL';
//export const CLOSE_MODAL = 'CLOSE_MODAL';



/*
theme
*/

export const THEME_DARK_TRIGGER = 'THEME_DARK_TRIGGER';
export const THEME_LIGHT_TRIGGER = 'THEME_LIGHT_TRIGGER';



/*
SiteNav component dropdown menu box shadow (on desktop display only, not on mobile)
*/

export const MENU_SHADOW_SHOW = 'MENU_SHADOW_SHOW';
export const MENU_SHADOW_HIDE = 'MENU_SHADOW_HIDE';



/*
auth
*/

// auth -- general
export const AUTH_DISPLAY = 'AUTH_DISPLAY';
export const AUTH_RESET = 'AUTH_RESET';
export const AUTH_CHECK_STATE = "AUTH_CHECK_STATE";
//export const AUTH_CHECK_TIMEOUT = "AUTH_CHECK_TIMEOUT";
//export const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH";

// auth -- users
export const AUTH_USER_REGISTER = 'AUTH_USER_REGISTER';
export const AUTH_USER_REGISTER_SUCCEEDED = 'AUTH_USER_REGISTER_SUCCEEDED';
export const AUTH_USER_REGISTER_FAILED = 'AUTH_USER_REGISTER_FAILED';

export const AUTH_FACEBOOK_CHECK_STATE = "AUTH_FACEBOOK_CHECK_STATE";
export const AUTH_FACEBOOK_LOGIN = "AUTH_FACEBOOK_LOGIN";
export const AUTH_FACEBOOK_LOGOUT = "AUTH_FACEBOOK_LOGOUT";

export const AUTH_GOOGLE_CHECK_STATE = "AUTH_GOOGLE_CHECK_STATE";
export const AUTH_GOOGLE_LOGIN = "AUTH_GOOGLE_LOGIN";
export const AUTH_GOOGLE_LOGOUT = "AUTH_GOOGLE_LOGOUT";

export const AUTH_USER_LOGIN = "AUTH_USER_LOGIN";
export const AUTH_USER_LOGIN_SUCCEEDED = "AUTH_USER_LOGIN_SUCCEEDED";
export const AUTH_USER_LOGIN_FAILED = "AUTH_USER_LOGIN_FAILED";

export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";
export const AUTH_USER_LOGOUT_SUCCEEDED = "AUTH_USER_LOGOUT_SUCCEEDED";
export const AUTH_USER_LOGOUT_FAILED = "AUTH_USER_LOGOUT_FAILED";

// auth -- staff
export const AUTH_STAFF_LOGIN = "AUTH_STAFF_LOGIN";
export const AUTH_STAFF_LOGIN_SUCCEEDED = "AUTH_STAFF_LOGIN_SUCCEEDED";
export const AUTH_STAFF_LOGIN_FAILED = "AUTH_STAFF_LOGIN_FAILED";

export const AUTH_STAFF_LOGOUT = "AUTH_STAFF_LOGOUT";
export const AUTH_STAFF_LOGOUT_SUCCEEDED = "AUTH_STAFF_LOGOUT_SUCCEEDED";
export const AUTH_STAFF_LOGOUT_FAILED = "AUTH_STAFF_LOGOUT_FAILED";



/*
planner
*/

export const PLANNER_CLICK_DAY = 'PLANNER_CLICK_DAY';
export const PLANNER_ADD_RECIPE_TO_DAY = 'PLANNER_ADD_RECIPE_TO_DAY';
export const PLANNER_REMOVE_RECIPE_FROM_DAY = 'PLANNER_REMOVE_RECIPE_FROM_DAY';
export const PLANNER_REORDER_RECIPE_IN_DAY = 'PLANNER_REORDER_RECIPE_IN_DAY';

export const PLANNER_PUBLIC_SAVE_TO_URL = 'PLANNER_PUBLIC_SAVE_TO_URL';
export const PLANNER_UPDATE_PUBLIC_URL = 'PLANNER_UPDATE_PUBLIC_URL';

export const PLANNER_PUBLIC_LOAD_FROM_URL = 'PLANNER_PUBLIC_LOAD_FROM_URL';
export const PLANNER_FILL_FROM_URL = 'PLANNER_FILL_FROM_URL';

export const PLANNER_SAVE = 'PLANNER_SAVE';
export const PLANNER_SAVE_SUCCEEDED = 'PLANNER_SAVE_SUCCEEDED';
export const PLANNER_SAVE_FAILED = 'PLANNER_SAVE_FAILED';

export const PLANNER_LOAD = 'PLANNER_LOAD';
export const PLANNER_LOAD_SUCCEEDED = 'PLANNER_LOAD_SUCCEEDED';
export const PLANNER_LOAD_FAILED = 'PLANNER_LOAD_FAILED';



/*
chat
*/

//



/*
discovery
*/

//



/*
shopping cart
*/

export const CART_ITEM_ADD = 'CART_ITEM_ADD';
export const CART_ITEM_REMOVE = 'CART_ITEM_REMOVE';



/*
dynamic content
*/

export const GET_EQUIPMENT_REQUEST = 'GET_EQUIPMENT_REQUEST';
export const GET_EQUIPMENT_SUCCEEDED = 'GET_EQUIPMENT_SUCCEEDED';
export const GET_EQUIPMENT_FAILED = 'GET_EQUIPMENT_FAILED';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCEEDED = 'GET_INGREDIENTS_SUCCEEDED';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_RECIPES_REQUEST = 'GET_RECIPES_REQUEST';
export const GET_RECIPES_SUCCEEDED = 'GET_RECIPES_SUCCEEDED';
export const GET_RECIPES_FAILED = 'GET_RECIPES_FAILED';
