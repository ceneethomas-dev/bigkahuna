export const siteConfig = {
	name: "Mon Restaurant",
	description: "Restaurant traditionnel proposant une cuisine faite maison, dans une ambiance chaleureuse.",
	address: {
		street: "12 rue de la Paix",
		city: "Pau",
		postalCode: "64000",
		country: "FR"
	},
	phone: "+33-5-XX-XX-XX-XX",
	cuisine: "Française",
	priceRange: "€€",
	openingHours: [
		{ day: "Monday", label: "Lundi", closed: true, slots: [] },
		{ day: "Tuesday", label: "Mardi", slots: [{ opens: "12:00", closes: "14:00" }, { opens: "19:00", closes: "22:00" }] },
		{ day: "Wednesday", label: "Mercredi", slots: [{ opens: "12:00", closes: "14:00" }, { opens: "19:00", closes: "22:00" }] },
		{ day: "Thursday", label: "Jeudi", slots: [{ opens: "12:00", closes: "14:00" }, { opens: "19:00", closes: "22:00" }] },
		{ day: "Friday", label: "Vendredi", slots: [{ opens: "12:00", closes: "14:30" }, { opens: "19:00", closes: "23:00" }] },
		{ day: "Saturday", label: "Samedi", slots: [{ opens: "19:00", closes: "23:00" }] },
		{ day: "Sunday", label: "Dimanche", closed: true, slots: [] }
	],
	social: {
		facebook: "https://facebook.com/monrestaurant",
		instagram: "https://instagram.com/monrestaurant"
	}
};