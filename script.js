//ACTION

const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

function buyPhone() {
	return {
		type: BUY_PHONE,
	};
}

function buyTablet() {
	return {
		type: BUY_TABLET,
	};
}
function buyTv() {
	return {
		type: BUY_TV,
	};
}

//REDUCER
// (prevState, action) => newState

const initialStatePhones = {
	phones: 5,
	tablets: 10,
};
const initialStateTv = {
	tv: 20,
};

const phonesReducer = (state = initialStatePhones, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return {
				...state,
				phones: state.phones - 1,
			};
		case BUY_TABLET:
			return {
				...state,
				tablets: state.tablets - 1,
			};
		default:
			return state;
	}
};
const tvReducer = (state = initialStateTv, action) => {
	switch (action.type) {
		case BUY_TV:
			return {
				...state,
				tv: state.tv - 1,
			};
		default:
			return state;
	}
};

//Combine Reducers
const rootReducer = Redux.combineReducers({
	phone: phonesReducer,
	tv: tvReducer,
});

//STORE
//Créer le STORE
const store = Redux.createStore(rootReducer);

//Récupérer la data du Store
const availablePhones = document.getElementById("count");
const availableTablets = document.getElementById("count-tab");
const availableTv = document.getElementById("count-tv");
availablePhones.innerHTML = store.getState().phone.phones;
availableTablets.innerHTML = store.getState().phone.tablets;
availableTv.innerHTML = store.getState().tv.tv;
console.log("Initial State", store.getState());

//Effectuer le Dispatch d'un action
document.getElementById("buy-phone").addEventListener("click", function () {
	store.dispatch(buyPhone());
});
document.getElementById("buy-tablet").addEventListener("click", function () {
	store.dispatch(buyTablet());
});
document.getElementById("buy-tv").addEventListener("click", function () {
	store.dispatch(buyTv());
});

//Listener
store.subscribe(() => {
	availablePhones.innerHTML = store.getState().phone.phones;
	availableTablets.innerHTML = store.getState().phone.tablets;
	availableTv.innerHTML = store.getState().tv.tv;
	console.log("Updated State", store.getState());
});
