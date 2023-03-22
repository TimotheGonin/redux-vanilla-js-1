//ACTION

const BUY_PHONE = "BUY_PHONE";

function buyPhone() {
	return {
		type: BUY_PHONE,
	};
}

//REDUCER
// (prevState, action) => newState

const initialState = {
	phones: 5,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return {
				...state,
				phones: state.phones - 1,
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
availablePhones.innerHTML = store.getState().phones;

//Effectuer le Dispatch d'un action
document.getElementById("buy-phone").addEventListener("click", function () {
	store.dispatch(buyPhone());
});

//Listener
store.subscribe(() => {
	console.log("Mon nouveau Store", store.getState());
	availablePhones.innerHTML = store.getState().phones;
});
