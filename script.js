//ACTION

const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";

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

//REDUCER
// (prevState, action) => newState

const initialState = {
	phones: 5,
	tablets: 10,
};

const reducer = (state = initialState, action) => {
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

//STORE
//Créer le STORE
const store = Redux.createStore(reducer);

//Récupérer la data du Store
const availablePhones = document.getElementById("count");
const availableTablets = document.getElementById("count-tab");
availablePhones.innerHTML = store.getState().phones;
availableTablets.innerHTML = store.getState().tablets;

//Effectuer le Dispatch d'un action
document.getElementById("buy-phone").addEventListener("click", function () {
	store.dispatch(buyPhone());
});
document.getElementById("buy-tablet").addEventListener("click", function () {
	store.dispatch(buyTablet());
});

//Listener
store.subscribe(() => {
	console.log("Mon nouveau Store", store.getState());
	availablePhones.innerHTML = store.getState().phones;
	availableTablets.innerHTML = store.getState().tablets;
});
